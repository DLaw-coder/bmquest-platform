import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useAppData } from '../context/AppStateContext'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../hooks/useAuth'
import type { ArcadeGameMode, ArcadeScore } from '../domain/arcade'
import { getLearnerPublicName } from '../domain'
import {
  getTopArcadeScores,
  saveArcadeScore,
} from '../repositories/arcade/arcadeScoreRepository'

const GAME_SECONDS = 180
const GAME_MODES: ArcadeGameMode[] = ['catch-stars', 'word-burst', 'book-dash']

type ArcadeSound = 'target' | 'bonus' | 'countdown' | 'game-over'

type BrowserWindow = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext
  }

type Target = {
  id: number
  icon: string
  label: string
  points: number
  left: number
  top: number
}

const modeCopy: Record<ArcadeGameMode, { title: string; description: string }> = {
  'catch-stars': {
    title: 'Catch the BM Stars',
    description: 'Catch stars and blue books before time runs out.',
  },
  'word-burst': {
    title: 'Word Burst',
    description: 'Tap Bahasa Melayu power words for bonus points.',
  },
  'book-dash': {
    title: 'Book Dash',
    description: 'Dash between books, pens and stars for a quick score rush.',
  },
}

function ArcadeRewardPage() {
  const [searchParams] = useSearchParams()
  const { user, isGuest } = useAuth()
  const { learner } = useAppData()
  const { t } = useLanguage()
  const rewardTier = searchParams.get('tier') ?? 'bronze'
  const rewardIcon = rewardTier === 'gold' ? '🌟' : '⭐'
  const rewardLabel = rewardTier === 'gold' ? 'Mastery Star' : 'BM Star'
  const [timeLeft, setTimeLeft] = useState(GAME_SECONDS)
  const [score, setScore] = useState(0)
  const [targetIndex, setTargetIndex] = useState(0)
  const [leaderboard, setLeaderboard] = useState<ArcadeScore[]>([])
  const [saveMessage, setSaveMessage] = useState('')
  const [soundMessage, setSoundMessage] = useState('Tap any arcade target to start sound feedback.')
  const [hasSavedScore, setHasSavedScore] = useState(false)
  const [isSoundOn, setIsSoundOn] = useState(true)
  const audioContextRef = useRef<AudioContext | null>(null)
  const lastCountdownSoundRef = useRef<number | null>(null)
  const hasPlayedGameOverSoundRef = useRef(false)
  const gameMode = useMemo<ArcadeGameMode>(() => {
    const seed = `${rewardTier}-${Date.now()}-${Math.random()}`
    const index = Math.abs(hashString(seed)) % GAME_MODES.length

    return GAME_MODES[index]
  }, [rewardTier])
  const isGameOver = timeLeft <= 0
  const target = useMemo<Target>(() => {
    const left = 10 + ((targetIndex * 37 + gameMode.length * 11) % 78)
    const top = 12 + ((targetIndex * 53 + gameMode.length * 7) % 62)
    const targetOptions = getTargetsForMode(gameMode, rewardIcon)
    const selectedTarget = targetOptions[targetIndex % targetOptions.length]

    return {
      id: targetIndex,
      ...selectedTarget,
      left,
      top,
    }
  }, [gameMode, rewardIcon, targetIndex])

  useEffect(() => {
    getTopArcadeScores().then(setLeaderboard)
  }, [])

  useEffect(() => {
    if (isGameOver) {
      return
    }

    const timer = window.setInterval(() => {
      setTimeLeft((current) => Math.max(0, current - 1))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [isGameOver])

  useEffect(() => {
    async function saveScore() {
      if (!isGameOver || score <= 0 || hasSavedScore) {
        return
      }

      if (isGuest || !learner) {
        setSaveMessage('Guest mode: arcade score is not saved.')
        setHasSavedScore(true)
        return
      }

      await saveArcadeScore({
        learnerId: learner.learnerId,
        displayName: getLearnerPublicName(learner, user?.displayName),
        form: learner.currentForm,
        gameMode,
        rewardTier,
        score,
        playedAt: new Date().toISOString(),
      })

      setSaveMessage('Arcade score saved.')
      setHasSavedScore(true)
      setLeaderboard(await getTopArcadeScores())
    }

    saveScore()
  }, [gameMode, hasSavedScore, isGameOver, isGuest, learner, rewardTier, score, user?.displayName])

  useEffect(() => {
    if (!isSoundOn || isGameOver || timeLeft > 10 || timeLeft <= 0) {
      return
    }

    if (lastCountdownSoundRef.current === timeLeft) {
      return
    }

    if (!audioContextRef.current) {
      return
    }

    lastCountdownSoundRef.current = timeLeft
    playArcadeSound('countdown')
  }, [isGameOver, isSoundOn, timeLeft])

  useEffect(() => {
    if (!isSoundOn || !isGameOver || hasPlayedGameOverSoundRef.current) {
      return
    }

    if (!audioContextRef.current) {
      return
    }

    hasPlayedGameOverSoundRef.current = true
    playArcadeSound('game-over')
  }, [isGameOver, isSoundOn])

  function getAudioContext() {
    if (audioContextRef.current) {
      return audioContextRef.current
    }

    const AudioContextConstructor =
      window.AudioContext ?? (window as BrowserWindow).webkitAudioContext

    if (!AudioContextConstructor) {
      return null
    }

    audioContextRef.current = new AudioContextConstructor()

    return audioContextRef.current
  }

  function playArcadeSound(sound: ArcadeSound) {
    if (!isSoundOn) {
      return
    }

    const audioContext = getAudioContext()

    if (!audioContext) {
      return
    }

    if (audioContext.state === 'suspended') {
      audioContext.resume().catch(() => undefined)
    }

    if (sound === 'target') {
      playTone(audioContext, 560, 0.08, 'triangle', 0.08)
      playTone(audioContext, 760, 0.1, 'triangle', 0.07, 0.06)
      return
    }

    if (sound === 'bonus') {
      playTone(audioContext, 660, 0.08, 'sine', 0.08)
      playTone(audioContext, 880, 0.09, 'sine', 0.08, 0.07)
      playTone(audioContext, 1120, 0.11, 'sine', 0.07, 0.15)
      return
    }

    if (sound === 'countdown') {
      playTone(audioContext, 330, 0.06, 'square', 0.04)
      return
    }

    playTone(audioContext, 620, 0.12, 'triangle', 0.07)
    playTone(audioContext, 460, 0.12, 'triangle', 0.06, 0.12)
    playTone(audioContext, 300, 0.18, 'triangle', 0.05, 0.24)
  }

  function handleCatchTarget() {
    if (isGameOver) {
      return
    }

    playArcadeSound(target.points >= 6 ? 'bonus' : 'target')
    setScore((current) => current + target.points)
    setTargetIndex((current) => current + 1)
  }

  function handleSoundToggle() {
    if (isSoundOn) {
      setIsSoundOn(false)
      setSoundMessage('Sound effects are muted.')
      return
    }

    setIsSoundOn(true)
    setSoundMessage('Sound effects are on.')

    const audioContext = getAudioContext()

    if (!audioContext) {
      return
    }

    audioContext
      .resume()
      .then(() => {
        playTone(audioContext, 560, 0.08, 'triangle', 0.08)
        playTone(audioContext, 760, 0.1, 'triangle', 0.07, 0.06)
      })
      .catch(() => {
        setSoundMessage('Sound could not be started in this browser.')
      })
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = String(timeLeft % 60).padStart(2, '0')
  const copy = modeCopy[gameMode]

  return (
    <section className="arcade-page">
      <div className="dashboard-hero">
        <div>
          <p className="eyebrow">Reward Arcade</p>
          <h1>{copy.title}</h1>
          <p className="subtitle">
            {rewardLabel} unlocked. {copy.description}
          </p>
        </div>
        <div className="dashboard-icon">{rewardIcon}</div>
      </div>

      <div className="dashboard-grid">
        <article className="dashboard-card">
          <span>{t('arcade.timeLeft')}</span>
          <h2>{minutes}:{seconds}</h2>
          <p>Reward play ends automatically after 3 minutes.</p>
        </article>

        <article className="dashboard-card">
          <span>{t('arcade.score')}</span>
          <h2>{score}</h2>
          <p>{target.label} is worth {target.points} points.</p>
        </article>

        <article className="dashboard-card">
          <span>{t('arcade.soundEffects')}</span>
          <h2>{isSoundOn ? 'On' : 'Muted'}</h2>
          <p>{soundMessage}</p>
          <button
            className="secondary-button arcade-sound-toggle"
            onClick={handleSoundToggle}
            type="button"
          >
            {isSoundOn ? 'Mute Arcade' : 'Turn Sound On'}
          </button>
        </article>
      </div>

      <article className={`arcade-board ${gameMode}`} aria-label="BM Quest reward arcade">
        {isGameOver ? (
          <div className="arcade-finished">
            <strong>⏱️ Time!</strong>
            <p>You scored {score} points. {saveMessage}</p>
            <Link className="mission-button" to="/">
              {t('arcade.returnDashboard')}
            </Link>
          </div>
        ) : (
          <button
            className="arcade-star"
            onClick={handleCatchTarget}
            style={{ left: `${target.left}%`, top: `${target.top}%` }}
            type="button"
          >
            {target.icon}
          </button>
        )}
      </article>

      <article className="dashboard-card">
        <span>{t('arcade.topScores')}</span>
        <div className="lesson-list">
          {leaderboard.length === 0 ? (
            <p>No scores yet. Be the first on the board!</p>
          ) : (
            leaderboard.map((item, index) => (
              <div className="lesson-row" key={item.scoreId ?? `${item.learnerId}-${item.playedAt}`}>
                <div>
                  <strong>{index + 1}. {item.displayName}</strong>
                  <small>{t('common.form')} {item.form} · {modeCopy[item.gameMode].title}</small>
                </div>
                <span>{item.score}</span>
              </div>
            ))
          )}
        </div>
      </article>
    </section>
  )
}

function getTargetsForMode(
  gameMode: ArcadeGameMode,
  rewardIcon: string,
): Array<Omit<Target, 'id' | 'left' | 'top'>> {
  if (gameMode === 'word-burst') {
    return [
      { icon: '📚', label: 'Kosa Kata', points: 3 },
      { icon: '✍️', label: 'Tatabahasa', points: 4 },
      { icon: rewardIcon, label: 'Reward Star', points: 5 },
      { icon: '💡', label: 'Idea', points: 6 },
    ]
  }

  if (gameMode === 'book-dash') {
    return [
      { icon: '📘', label: 'Blue Book', points: 5 },
      { icon: '🖊️', label: 'Pen Dash', points: 3 },
      { icon: rewardIcon, label: 'Reward Star', points: 4 },
      { icon: '🚀', label: 'Speed Boost', points: 7 },
    ]
  }

  return [
    { icon: rewardIcon, label: 'BM Star', points: 2 },
    { icon: '📘', label: 'Blue Book', points: 5 },
    { icon: '🎯', label: 'Focus Target', points: 6 },
  ]
}

function hashString(value: string) {
  return value.split('').reduce((hash, character) => {
    return ((hash << 5) - hash + character.charCodeAt(0)) | 0
  }, 0)
}

function playTone(
  audioContext: AudioContext,
  frequency: number,
  duration: number,
  type: OscillatorType,
  volume: number,
  delay = 0,
) {
  const startTime = audioContext.currentTime + delay
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.type = type
  oscillator.frequency.setValueAtTime(frequency, startTime)
  gainNode.gain.setValueAtTime(0.001, startTime)
  gainNode.gain.exponentialRampToValueAtTime(volume, startTime + 0.01)
  gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration)

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)
  oscillator.start(startTime)
  oscillator.stop(startTime + duration + 0.02)
}

export default ArcadeRewardPage
