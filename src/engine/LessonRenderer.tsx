import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Lesson } from '../domain'
import { useAuth } from '../hooks/useAuth'
import { evaluateLessonAchievements } from './achievements/achievementEngine'
import { getLearnersForAccount } from '../services/firestore/learnerRepository'
import { saveNewAchievements } from '../repositories/achievements/achievementRepository'
import { saveLessonProgress } from '../repositories/progress/progressRepository'
import { calculateSessionResult, type SessionResult } from './session/sessionEngine'

type LessonRendererProps = {
  lesson: Lesson
}

function LessonRenderer({ lesson }: LessonRendererProps) {
  const { user, isGuest } = useAuth()
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<SessionResult | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')
  const [achievementMessage, setAchievementMessage] = useState('')

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
      <div className="dashboard-hero">
        <div>
          <p className="eyebrow">
            Form {lesson.form} · {lesson.strand}
          </p>
          <h1>{lesson.title}</h1>
          <p className="subtitle">
            {lesson.skill} · {lesson.estimatedMinutes} min
          </p>
        </div>
        <div className="dashboard-icon">📖</div>
      </div>

      <article className="dashboard-card">
        <span>Petikan</span>
        <h2>{lesson.passageTitle}</h2>
        <p className="passage-text">{lesson.passage}</p>
      </article>

      <article className="dashboard-card">
        <span>Kosa Kata</span>
        <div className="vocab-list">
          {lesson.vocabulary.map((item) => (
            <div className="lesson-row" key={item.word}>
              <strong>{item.word}</strong>
              <small>{item.meaning}</small>
            </div>
          ))}
        </div>
      </article>

      <article className="dashboard-card">
        <span>Soalan</span>

        <div className="question-list">
          {lesson.questions.map((question) => (
            <div className="question-card" key={question.id}>
              <strong>{question.prompt}</strong>

              <div className="answer-list">
                {question.options.map((option) => (
                  <label key={option.id}>
                    <input
                      type="radio"
                      name={question.id}
                      value={option.id}
                      checked={answers[question.id] === option.id}
                      onChange={() =>
                        setAnswers((current) => ({
                          ...current,
                          [question.id]: option.id,
                        }))
                      }
                    />
                    {option.text}
                  </label>
                ))}
              </div>

              {result && (
                <p className="feedback">
                  {answers[question.id] === question.correctOptionId ? '✅ Betul. ' : '❌ Cuba lagi. '}
                  {question.explanation}
                </p>
              )}
            </div>
          ))}
        </div>

        <button className="lesson-submit" onClick={handleSubmit} disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Semak Jawapan'}
        </button>

        {result && (
          <div className="result-card">
            <strong>🎉 Lesson Complete</strong>
            <p>
              Skor: {result.correctAnswers}/{result.totalQuestions} · {result.scorePercent}%
            </p>
            <small>{saveMessage}</small>
            {achievementMessage && <small>{achievementMessage}</small>}

            <div className="result-actions">
              <Link to="/" className="result-action primary-action">
                Return Dashboard
              </Link>
              <Link to="/curriculum" className="result-action">
                Browse Curriculum
              </Link>
            </div>
          </div>
        )}
      </article>
    </section>
  )
}

export default LessonRenderer
