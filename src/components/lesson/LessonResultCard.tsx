import { Link } from 'react-router-dom'
import type { Lesson } from '../../domain'
import type { SessionResult } from '../../engine/session/sessionEngine'
import SectionHeader from '../SectionHeader'

type LessonResultCardProps = {
  lesson: Lesson
  result: SessionResult
  saveMessage: string
  achievementMessage: string
  nextLessonId?: string
}

function LessonResultCard({
  lesson,
  result,
  saveMessage,
  achievementMessage,
  nextLessonId,
}: LessonResultCardProps) {
  return (
    <div className="result-card">
      <strong>🎉 Lesson Complete</strong>

      <p>
        Skor: {result.correctAnswers}/{result.totalQuestions} · {result.scorePercent}%
      </p>

      <div className="reward-moment">
        <strong>{result.reward.icon} {result.reward.label}</strong>
        <small>{result.reward.message}</small>
      </div>

      <small>{saveMessage}</small>
      {achievementMessage && <small>{achievementMessage}</small>}

      <SectionHeader malay="RUMUSAN" english="Lesson Summary" />

      <ul className="summary-list">
        {lesson.summary.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>

      <div className="result-actions">
        {result.reward.tier !== 'none' && (
          <Link
            to={`/arcade-reward?tier=${result.reward.tier}`}
            className="result-action primary-action"
          >
            Play 3-Min Reward Game
          </Link>
        )}

        {nextLessonId ? (
          <Link to={`/lesson/${nextLessonId}`} className="result-action primary-action">
            Continue Next Lesson
          </Link>
        ) : (
          <Link to="/" className="result-action primary-action">
            Return Dashboard
          </Link>
        )}

        <Link to="/curriculum" className="result-action">
          Browse Curriculum
        </Link>
      </div>
    </div>
  )
}

export default LessonResultCard
