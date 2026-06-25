import { Link } from 'react-router-dom'

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
  return (
    <article className="dashboard-card">
      <h2>📍 Unit Progress</h2>
      <p className="subtitle">
        Follow your learning journey through this unit.
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
