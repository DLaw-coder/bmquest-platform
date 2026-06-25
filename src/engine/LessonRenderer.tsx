import { useState } from 'react'
import type { Lesson } from '../domain'

type LessonRendererProps = {
  lesson: Lesson
}

function LessonRenderer({ lesson }: LessonRendererProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isCompleted, setIsCompleted] = useState(false)

  const score = lesson.questions.filter(
    (question) => answers[question.id] === question.correctOptionId,
  ).length

  function handleSubmit() {
    setIsCompleted(true)
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

              {isCompleted && (
                <p className="feedback">
                  {answers[question.id] === question.correctOptionId ? '✅ Betul. ' : '❌ Cuba lagi. '}
                  {question.explanation}
                </p>
              )}
            </div>
          ))}
        </div>

        <button className="lesson-submit" onClick={handleSubmit}>
          Semak Jawapan
        </button>

        {isCompleted && (
          <p className="footer-text">
            Skor: {score}/{lesson.questions.length}
          </p>
        )}
      </article>
    </section>
  )
}

export default LessonRenderer
