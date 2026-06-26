import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

type LessonStep = {
  id: string
  title: string
  completed: boolean
  current: boolean
}

type UnitProgressProps = {
  lessons: LessonStep[]
}

function UnitProgress({ lessons }: UnitProgressProps) {
  const { t } = useLanguage()

  return (
    <article className="dashboard-card">
      <h2>📍 {t('unit.progress')}</h2>
      <p className="subtitle">
        {t('unit.subtitle')}
      </p>

      <div className="unit-progress">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            to={`/lesson/${lesson.id}`}
            className={`unit-step ${
              lesson.completed
                ? 'completed'
                : lesson.current
                ? 'current'
                : 'locked'
            }`}
          >
            <div className="unit-icon">
              {lesson.completed
                ? '✅'
                : lesson.current
                ? '➡️'
                : '🔒'}
            </div>

            <strong>{lesson.title}</strong>
          </Link>
        ))}
      </div>
    </article>
  )
}

export default UnitProgress
