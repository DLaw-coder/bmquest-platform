import { useEffect, useRef, useState } from 'react'
import type { Lesson } from '../domain'
import type { SessionResult } from './session/sessionEngine'
import LessonHero from '../components/lesson/LessonHero'
import LessonMetaCard from '../components/lesson/LessonMetaCard'
import ReadingTipCard from '../components/lesson/ReadingTipCard'
import PassageCard from '../components/lesson/PassageCard'
import VocabularyCard from '../components/lesson/VocabularyCard'
import QuestionsCard from '../components/lesson/QuestionsCard'
import LessonResultCard from '../components/lesson/LessonResultCard'
import UnitProgress from '../components/progress/UnitProgress'
import { useAuth } from '../hooks/useAuth'
import { useAppData } from '../context/AppStateContext'
import { useLanguage } from '../context/LanguageContext'
import { completeLessonSession } from '../services/lesson/lessonSessionService'
import {
  createPracticeLesson,
  getChallengeTemplate,
  getLessonAttempts,
  getNextAttemptNumber,
  getNextVariantLevel,
  type PracticeMode,
} from '../services/lesson/adaptiveLessonService'
import { getLessonProgressStateFromProgress } from '../services/progress/progressService'
import { issueArcadeGrant } from '../services/rewards/arcadeGrantService'
import {
  logEngagementEvent,
  logEngagementEventOnce,
} from '../repositories/engagement/engagementRepository'

type LessonRendererProps = {
  lesson: Lesson
}

type UnitLesson = {
  id: string
  title: string
  completed: boolean
  current: boolean
}

function LessonRendererV2({ lesson }: LessonRendererProps) {
  const { user, isGuest } = useAuth()
  const { learner, lessons, progress } = useAppData()
  const { t } = useLanguage()
  const attempts = getLessonAttempts(progress, lesson.id)
  const hasCompletedLesson = attempts.length > 0
  const nextAttemptNumber = getNextAttemptNumber(attempts)
  const nextVariantLevel = getNextVariantLevel(attempts)
  const [practiceMode, setPracticeMode] = useState<PracticeMode>(
    hasCompletedLesson ? 'challenge' : 'review',
  )
  const activeVariantLevel = practiceMode === 'challenge' && hasCompletedLesson
    ? nextVariantLevel
    : 1
  const activeLesson = createPracticeLesson(
    lesson,
    practiceMode,
    activeVariantLevel,
  )
  const activeChallengeTemplate = getChallengeTemplate(activeVariantLevel)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<SessionResult | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')
  const [achievementMessage, setAchievementMessage] = useState('')
  const [arcadeGrantToken, setArcadeGrantToken] = useState<string>()
  const activePracticeSeconds = useRef(0)
  const lastPracticeActivity = useRef(0)
  const initialAttemptNumber = useRef(nextAttemptNumber)
  const priorActivePracticeSeconds = attempts.reduce(
    (total, attempt) => total + (attempt.activePracticeSeconds ?? 0),
    0,
  )
  const currentLessonIndex = lessons.findIndex(
    (availableLesson) => availableLesson.id === lesson.id,
  )
  const nextLessonId = currentLessonIndex >= 0
    ? lessons[currentLessonIndex + 1]?.id
    : undefined
  const unitLessons: UnitLesson[] = isGuest
    ? [
        {
          id: activeLesson.id,
          title: activeLesson.title,
          completed: Boolean(result),
          current: true,
        },
      ]
    : getLessonProgressStateFromProgress(
        progress,
        lessons,
        activeLesson.id,
        result?.lessonId,
      )

  useEffect(() => {
    logEngagementEventOnce(
      `lesson-started:${lesson.id}:${initialAttemptNumber.current}`,
      {
        eventName: 'lesson_started',
        audience: isGuest ? 'guest' : 'authenticated',
        ...getEngagementIdentity(isGuest, user?.uid, learner?.learnerId),
        form: lesson.form,
        lessonId: lesson.id,
        attemptNumber: initialAttemptNumber.current,
      },
    )
  }, [isGuest, learner?.learnerId, lesson.form, lesson.id, user?.uid])

  useEffect(() => {
    const recordActivity = () => {
      lastPracticeActivity.current = Date.now()
    }
    recordActivity()
    const timer = window.setInterval(() => {
      const isRecentlyActive =
        Date.now() - lastPracticeActivity.current <= 2 * 60 * 1000

      if (
        document.visibilityState === 'visible'
        && document.hasFocus()
        && isRecentlyActive
      ) {
        activePracticeSeconds.current += 1
      }
    }, 1000)

    window.addEventListener('pointerdown', recordActivity)
    window.addEventListener('keydown', recordActivity)
    window.addEventListener('scroll', recordActivity, { passive: true })
    window.addEventListener('touchstart', recordActivity, { passive: true })
    window.addEventListener('focus', recordActivity)

    return () => {
      window.clearInterval(timer)
      window.removeEventListener('pointerdown', recordActivity)
      window.removeEventListener('keydown', recordActivity)
      window.removeEventListener('scroll', recordActivity)
      window.removeEventListener('touchstart', recordActivity)
      window.removeEventListener('focus', recordActivity)
    }
  }, [lesson.id, practiceMode])

  function handlePracticeModeChange(nextMode: PracticeMode) {
    setPracticeMode(nextMode)
    setAnswers({})
    setResult(null)
    setSaveMessage('')
    setAchievementMessage('')
    setArcadeGrantToken(undefined)
    activePracticeSeconds.current = 0
    lastPracticeActivity.current = Date.now()

    logEngagementEventOnce(
      `lesson-started:${lesson.id}:${nextAttemptNumber}:${nextMode}`,
      {
        eventName: 'lesson_started',
        audience: isGuest ? 'guest' : 'authenticated',
        ...getEngagementIdentity(isGuest, user?.uid, learner?.learnerId),
        form: lesson.form,
        lessonId: lesson.id,
        attemptNumber: nextAttemptNumber,
      },
    )
  }

  function handleAnswer(questionId: string, optionId: string) {
    setAnswers((current) => ({
      ...current,
      [questionId]: optionId,
    }))
  }

  async function handleSubmit() {
    setIsSaving(true)

    const session = await completeLessonSession({
      learnerId: learner?.learnerId,
      isGuest,
      lesson: activeLesson,
      answers,
      attemptNumber: nextAttemptNumber,
      practiceMode,
      variantLevel: activeVariantLevel,
      activePracticeSeconds: activePracticeSeconds.current,
      priorActivePracticeSeconds,
    })

    setResult(session.result)
    setSaveMessage(session.saveMessage)
    setAchievementMessage(session.achievementMessage)
    logEngagementEvent({
      eventName: 'lesson_completed',
      audience: isGuest ? 'guest' : 'authenticated',
      ...getEngagementIdentity(isGuest, user?.uid, learner?.learnerId),
      form: lesson.form,
      lessonId: lesson.id,
      attemptNumber: nextAttemptNumber,
      scorePercent: session.result.scorePercent,
    }).catch((error) => {
      console.warn('Lesson completion analytics were not recorded.', error)
    })

    if (session.result.arcadeEligible && session.result.reward.tier !== 'none') {
      setArcadeGrantToken(
        issueArcadeGrant(session.result.reward.tier).token,
      )
      logEngagementEvent({
        eventName: 'arcade_unlocked',
        audience: isGuest ? 'guest' : 'authenticated',
        ...getEngagementIdentity(isGuest, user?.uid, learner?.learnerId),
        form: lesson.form,
        lessonId: lesson.id,
        attemptNumber: nextAttemptNumber,
        scorePercent: session.result.scorePercent,
      }).catch((error) => {
        console.warn('Arcade unlock analytics were not recorded.', error)
      })
    }
    setIsSaving(false)
  }

  return (
    <section className="lesson">
      <LessonHero lesson={activeLesson} />

      <UnitProgress lessons={unitLessons} />

      {hasCompletedLesson && (
        <article className="dashboard-card practice-card">
          <span>{t('lesson.repeatPractice')}</span>
          <h2>{t('lesson.attempt')} {nextAttemptNumber}</h2>
          <p>
            {practiceMode === 'challenge'
              ? `Next challenge: ${activeChallengeTemplate.label} · ${activeChallengeTemplate.focus}.`
              : 'Review the completed exercise with the original questions.'}
          </p>
          <div className="practice-actions">
            <button
              className={practiceMode === 'challenge' ? 'practice-action active' : 'practice-action'}
              onClick={() => handlePracticeModeChange('challenge')}
              type="button"
            >
              {t('lesson.nextChallenge')}
            </button>
            <button
              className={practiceMode === 'review' ? 'practice-action active' : 'practice-action'}
              onClick={() => handlePracticeModeChange('review')}
              type="button"
            >
              {t('lesson.reviewCompleted')}
            </button>
          </div>
        </article>
      )}

      <LessonMetaCard lesson={activeLesson} />
      <ReadingTipCard lesson={activeLesson} />
      <PassageCard lesson={activeLesson} />
      <VocabularyCard lesson={activeLesson} />

      <article className="dashboard-card">
        <QuestionsCard
          lesson={activeLesson}
          answers={answers}
          hasResult={Boolean(result)}
          onAnswer={handleAnswer}
        />

        <button
          className="lesson-submit"
          onClick={handleSubmit}
          disabled={isSaving || Boolean(result)}
        >
          {isSaving ? t('lesson.saving') : t('lesson.checkAnswers')}
        </button>

        {result && (
          <LessonResultCard
            lesson={activeLesson}
            result={result}
            saveMessage={saveMessage}
            achievementMessage={achievementMessage}
            nextLessonId={nextLessonId}
            arcadeGrantToken={arcadeGrantToken}
            arcadePracticeSecondsRemaining={
              result.arcadePracticeSecondsRemaining
            }
          />
        )}
      </article>
    </section>
  )
}

function getEngagementIdentity(
  isGuest: boolean,
  accountId?: string,
  learnerId?: string,
) {
  if (isGuest || !accountId) {
    return {}
  }

  return {
    accountId,
    ...(learnerId ? { learnerId } : {}),
  }
}

export default LessonRendererV2
