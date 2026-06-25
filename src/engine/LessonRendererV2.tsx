import { useState } from 'react'
import type { Lesson } from '../domain'
import LessonHero from '../components/lesson/LessonHero'
import LessonMetaCard from '../components/lesson/LessonMetaCard'
import ReadingTipCard from '../components/lesson/ReadingTipCard'
import PassageCard from '../components/lesson/PassageCard'
import VocabularyCard from '../components/lesson/VocabularyCard'
import QuestionsCard from '../components/lesson/QuestionsCard'
import LessonResultCard from '../components/lesson/LessonResultCard'
import { useAuth } from '../hooks/useAuth'
import { evaluateLessonAchievements } from './achievements/achievementEngine'
import { getLearnersForAccount } from '../services/firestore/learnerRepository'
import { saveNewAchievements } from '../repositories/achievements/achievementRepository'
import { saveLessonProgress } from '../repositories/progress/progressRepository'
import { calculateSessionResult, type SessionResult } from './session/sessionEngine'

type LessonRendererProps = {
  lesson: Lesson
}

function LessonRendererV2({ lesson }: LessonRendererProps) {
  const { user, isGuest } = useAuth()
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<SessionResult | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')
  const [achievementMessage, setAchievementMessage] = useState('')

  function handleAnswer(questionId: string, optionId: string) {
    setAnswers((current) => ({
      ...current,
      [questionId]: optionId,
    }))
  }

  async function handleSubmit() {
    const sessionResult = calculateSessionResult(lesson, answers)
    setResult(sessionResult)

    if (!user || isGuest) {
      setSaveMessage('Guest mode: progress is not saved.')
      return
    }

    setIsSaving(true)
    setSaveMessage('Saving progress...')
    setAchievementMessage('')

    const learners = await getLearnersForAccount(user.uid)
    const activeLearner = learners[0]

    if (!activeLearner) {
      setSaveMessage('No learner profile found.')
      setIsSaving(false)
      return
    }

    await saveLessonProgress({
      learnerId: activeLearner.learnerId,
      lessonId: lesson.id,
      correctAnswers: sessionResult.correctAnswers,
      totalQuestions: sessionResult.totalQuestions,
      scorePercent: sessionResult.scorePercent,
      completedAt: sessionResult.completedAt,
    })

    const achievements = evaluateLessonAchievements(activeLearner.learnerId, sessionResult)
    await saveNewAchievements(achievements)

    setSaveMessage('Progress saved.')
    setAchievementMessage(
      achievements.map((item) => `${item.icon} ${item.title}`).join(', '),
    )
    setIsSaving(false)
  }

  return (
    <section className="lesson">
      <LessonHero lesson={lesson} />
      <LessonMetaCard lesson={lesson} />
      <ReadingTipCard lesson={lesson} />
      <PassageCard lesson={lesson} />
      <VocabularyCard lesson={lesson} />

      <article className="dashboard-card">
        <QuestionsCard
          lesson={lesson}
          answers={answers}
          hasResult={Boolean(result)}
          onAnswer={handleAnswer}
        />

        <button className="lesson-submit" onClick={handleSubmit} disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Semak Jawapan'}
        </button>

        {result && (
          <LessonResultCard
            lesson={lesson}
            result={result}
            saveMessage={saveMessage}
            achievementMessage={achievementMessage}
          />
        )}
      </article>
    </section>
  )
}

export default LessonRendererV2
