import type { Lesson } from '../../domain'
import SectionHeader from '../SectionHeader'

type QuestionsCardProps = {
  lesson: Lesson
  answers: Record<string, string>
  hasResult: boolean
  onAnswer: (questionId: string, optionId: string) => void
}

function QuestionsCard({
  lesson,
  answers,
  hasResult,
  onAnswer,
}: QuestionsCardProps) {
  return (
    <article className="dashboard-card">
      <SectionHeader malay="SOALAN" english="Questions" />

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
                    onChange={() => onAnswer(question.id, option.id)}
                  />
                  {option.text}
                </label>
              ))}
            </div>

            {hasResult && (
              <p className="feedback">
                {answers[question.id] === question.correctOptionId
                  ? '✅ Betul. '
                  : '❌ Cuba lagi. '}
                {question.explanation}
              </p>
            )}
          </div>
        ))}
      </div>
    </article>
  )
}

export default QuestionsCard
