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
import { getLearnersForAccount } from '../services/firestore/learnerRepository'
import { getLessonNavigation } from '../repositories/curriculum/lessonRepository'
import { completeLessonSession } from '../services/lesson/lessonSessionService'
import { getLessonProgressState } from '../services/progress/progressService'

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
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<SessionResult | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')
  const [achievementMessage, setAchievementMessage] = useState('')
  const [nextLessonId, setNextLessonId] = useState<string | undefined>()
  const [unitLessons, setUnitLessons] = useState<UnitLesson[]>([])

  async function loadUnitProgress() {
    if (!user || isGuest) {
      setUnitLessons([
        {
          id: lesson.id,
          title: lesson.title,
          completed: Boolean(result),
          current: true,
        },
      ])
      return
    }

    const learners = await getLearnersForAccount(user.uid)
    const activeLearner = learners[0]

    if (!activeLearner) {
      return
    }

    const progressState = await getLessonProgressState(activeLearner.learnerId, lesson.id)
    setUnitLessons(progressState)
  }

  useEffect(() => {
    async function loadNavigation() {
      const navigation = await getLessonNavigation(lesson.id)
      setNextLessonId(navigation.nextLesson?.id)
    }

    loadNavigation()
    loadUnitProgress()
  }, [lesson.id, user?.uid, isGuest])

  function handleAnswer(questionId: string, optionId: string) {
    setAnswers((current) => ({
      ...current,
      [questionId]: optionId,
    }))
  }

  async function handleSubmit() {
    setIsSaving(true)

    const session = await completeLessonSession({
      userId: user?.uid,
      isGuest,
      lesson,
      answers,
    })

    setResult(session.result)
    setSaveMessage(session.saveMessage)
    setAchievementMessage(session.achievementMessage)
    setIsSaving(false)

    await loadUnitProgress()
  }

  return (
    <section className="lesson">
      <LessonHero lesson={lesson} />

      <UnitProgress lessons={unitLessons} />

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
            nextLessonId={nextLessonId}
          />
        )}
      </article>
    </section>
  )
}

export default LessonRendererV2
