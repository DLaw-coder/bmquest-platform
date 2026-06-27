import { Link } from 'react-router-dom'
import type { Lesson } from '../../domain'
import type { SessionResult } from '../../engine/session/sessionEngine'
import { useLanguage } from '../../context/LanguageContext'
import SectionHeader from '../SectionHeader'

type LessonResultCardProps = {
  lesson: Lesson
  result: SessionResult
  saveMessage: string
  achievementMessage: string
  nextLessonId?: string
  arcadeGrantToken?: string
  arcadePracticeSecondsRemaining?: number
}

function LessonResultCard({
  lesson,
  result,
  saveMessage,
  achievementMessage,
  nextLessonId,
  arcadeGrantToken,
  arcadePracticeSecondsRemaining = 0,
}: LessonResultCardProps) {
  const { language, t } = useLanguage()
  const remainingMinutes = Math.ceil(arcadePracticeSecondsRemaining / 60)

  return (
    <div className="result-card">
      <strong>🎉 {t('lesson.complete')}</strong>

      <p>
        Skor: {result.correctAnswers}/{result.totalQuestions} · {result.scorePercent}%
      </p>

      <div className="reward-moment">
        <strong>{result.reward.icon} {result.reward.label}</strong>
        <small>{result.reward.message}</small>
      </div>

      <small>{saveMessage}</small>
      {achievementMessage && <small>{achievementMessage}</small>}
      {!arcadeGrantToken
        && result.scorePercent >= 70
        && remainingMinutes > 0 && (
          <small>
            {language === 'ms'
              ? `Ganjaran arked akan dibuka selepas ${remainingMinutes} minit lagi latihan aktif.`
              : `Arcade reward unlocks after ${remainingMinutes} more minutes of active practice.`}
          </small>
        )}

      <SectionHeader malay="RUMUSAN" english={t('lesson.summary')} />

      <ul className="summary-list">
        {lesson.summary.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>

      <div className="result-actions">
        {arcadeGrantToken && (
          <Link
            to={`/arcade-reward?grant=${arcadeGrantToken}`}
            className="result-action primary-action"
          >
            {t('lesson.playReward')}
          </Link>
        )}

        {nextLessonId ? (
          <Link to={`/lesson/${nextLessonId}`} className="result-action primary-action">
            {t('lesson.continueNext')}
          </Link>
        ) : (
          <Link to="/" className="result-action primary-action">
            {t('lesson.returnDashboard')}
          </Link>
        )}

        <Link to="/curriculum" className="result-action">
          {t('lesson.browseCurriculum')}
        </Link>
      </div>
    </div>
  )
}

export default LessonResultCard
