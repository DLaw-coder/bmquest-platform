import { Link } from 'react-router-dom'
import { curriculum } from '../data/curriculum'

function CurriculumPage() {
  return (
    <section className="dashboard">
      <div className="dashboard-hero">
        <div>
          <p className="eyebrow">Curriculum Browser</p>
          <h1>{curriculum.title}</h1>
          <p className="subtitle">
            Browse KSSM-aligned Bahasa Melayu learning paths.
          </p>
        </div>
        <div className="dashboard-icon">📚</div>
      </div>

      <div className="dashboard-grid">
        {curriculum.units.map((unit) => (
          <article className="dashboard-card" key={unit.id}>
            <span>Unit</span>
            <h2>{unit.title}</h2>
            <p>{unit.description}</p>

            <div className="lesson-list">
              {unit.lessons.map((lesson) =>
                lesson.status === 'Available' ? (
                  <Link className="lesson-row lesson-link" to={`/lesson/${lesson.id}`} key={lesson.id}>
                    <div>
                      <strong>📖 {lesson.title}</strong>
                      <small>{lesson.duration}</small>
                    </div>
                    <span>Start →</span>
                  </Link>
                ) : (
                  <div className="lesson-row locked-lesson" key={lesson.id}>
                    <div>
                      <strong>🔒 {lesson.title}</strong>
                      <small>{lesson.duration}</small>
                    </div>
                    <span>Coming Soon</span>
                  </div>
                ),
              )}
            </div>
          </article>
        ))}
      </div>

      <p className="footer-text">Sprint 4.2 · Interactive Curriculum Browser</p>
    </section>
  )
}

export default CurriculumPage
