import { Link } from 'react-router-dom'
import type { Lesson } from '../../domain'
import type { SessionResult } from '../../engine/session/sessionEngine'
import SectionHeader from '../SectionHeader'

type LessonResultCardProps = {
  lesson: Lesson
  result: SessionResult
  saveMessage: string
  achievementMessage: string
}

function LessonResultCard({
  lesson,
  result,
  saveMessage,
  achievementMessage,
}: LessonResultCardProps) {
  return (
    <div className="result-card">
      <strong>🎉 Lesson Complete</strong>

      <p>
        Skor: {result.correctAnswers}/{result.totalQuestions} · {result.scorePercent}%
      </p>

      <small>{saveMessage}</small>
      {achievementMessage && <small>{achievementMessage}</small>}

      <SectionHeader malay="RUMUSAN" english="Lesson Summary" />

      <ul className="summary-list">
        {lesson.summary.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>

      <div className="result-actions">
        <Link to="/" className="result-action primary-action">
          Return Dashboard
        </Link>
        <Link to="/curriculum" className="result-action">
          Browse Curriculum
        </Link>
      </div>
    </div>
  )
}

export default LessonResultCard
