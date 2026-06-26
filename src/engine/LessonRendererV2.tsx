import { useEffect, useState } from 'react'
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
import { getLessonNavigation } from '../repositories/curriculum/lessonRepository'
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
  const { isGuest } = useAuth()
  const { learner, lessons, progress } = useAppData()
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
  const [nextLessonId, setNextLessonId] = useState<string | undefined>()
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
    setPracticeMode(hasCompletedLesson ? 'challenge' : 'review')
    setAnswers({})
    setResult(null)
    setSaveMessage('')
    setAchievementMessage('')
  }, [lesson.id, hasCompletedLesson])

  useEffect(() => {
    async function loadNavigation() {
      const navigation = await getLessonNavigation(lesson.id, lesson.form)
      setNextLessonId(navigation.nextLesson?.id)
    }

    loadNavigation()
  }, [lesson.id])

  function handlePracticeModeChange(nextMode: PracticeMode) {
    setPracticeMode(nextMode)
    setAnswers({})
    setResult(null)
    setSaveMessage('')
    setAchievementMessage('')
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
    })

    setResult(session.result)
    setSaveMessage(session.saveMessage)
    setAchievementMessage(session.achievementMessage)
    setIsSaving(false)
  }

  return (
    <section className="lesson">
      <LessonHero lesson={activeLesson} />

      <UnitProgress lessons={unitLessons} />

      {hasCompletedLesson && (
        <article className="dashboard-card practice-card">
          <span>Repeat Practice</span>
          <h2>Attempt {nextAttemptNumber}</h2>
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
              Next Challenge
            </button>
            <button
              className={practiceMode === 'review' ? 'practice-action active' : 'practice-action'}
              onClick={() => handlePracticeModeChange('review')}
              type="button"
            >
              Review Completed
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

        <button className="lesson-submit" onClick={handleSubmit} disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Semak Jawapan'}
        </button>

        {result && (
          <LessonResultCard
            lesson={activeLesson}
            result={result}
            saveMessage={saveMessage}
            achievementMessage={achievementMessage}
            nextLessonId={nextLessonId}
          />
        )}
      </article>
    </section>
  )
}

export default LessonRendererV2
