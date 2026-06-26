import { Link } from 'react-router-dom'
import { appInfo } from '../config/appInfo'
import { useAppData } from '../context/AppStateContext'
import { useLanguage } from '../context/LanguageContext'
import type { Lesson } from '../domain'

type LessonUnit = {
  title: string
  description: string
  lessons: Lesson[]
}

function getUnitDisplayTitle(title: string) {
  if (title === 'Kemahiran Membaca Foundation') {
    return 'Kemahiran Membaca Asas'
  }

  if (title === 'Latihan Membaca Depth Set') {
    return 'Latihan Membaca Lanjutan'
  }

  return title
}

function groupLessonsByUnit(lessons: Lesson[]): LessonUnit[] {
  const units = new Map<string, LessonUnit>()

  for (const lesson of lessons) {
    const title = lesson.curriculumMeta.unit
    const existingUnit = units.get(title)

    if (existingUnit) {
      existingUnit.lessons.push(lesson)
    } else {
      units.set(title, {
        title,
        description: `${lesson.curriculumMeta.learningArea} · ${lesson.skill}`,
        lessons: [lesson],
      })
    }
  }

  return Array.from(units.values())
}

function CurriculumPage() {
  const { learner, lessons, isAppDataLoading } = useAppData()
  const { t } = useLanguage()
  const activeForm = learner?.currentForm ?? 1
  const units = groupLessonsByUnit(lessons)

  return (
    <section className="dashboard">
      <div className="dashboard-hero">
        <div>
          <p className="eyebrow">{t('curriculum.eyebrow')}</p>
          <h1>{t('curriculum.title')} {activeForm}</h1>
          <p className="subtitle">
            {t('curriculum.subtitle')}
          </p>
        </div>
        <div className="dashboard-icon">📚</div>
      </div>

      <div className="dashboard-grid">
        {units.map((unit) => (
          <article className="dashboard-card" key={unit.title}>
            <span>{t('curriculum.unit')}</span>
            <h2>{getUnitDisplayTitle(unit.title)}</h2>
            <p>{unit.description}</p>

            <div className="lesson-list">
              {unit.lessons.map((lesson) => (
                <Link className="lesson-row lesson-link" to={`/lesson/${lesson.id}`} key={lesson.id}>
                  <div>
                    <strong>📖 {lesson.title}</strong>
                    <small>{lesson.estimatedMinutes} min</small>
                  </div>
                  <span>{t('curriculum.start')} →</span>
                </Link>
              ))}
            </div>
          </article>
        ))}

        {!isAppDataLoading && units.length === 0 ? (
          <article className="dashboard-card">
            <span>{t('curriculum.lessons')}</span>
            <h2>{t('curriculum.noLessons')}</h2>
            <p>{t('curriculum.noLessonsSubtitle')}</p>
          </article>
        ) : null}
      </div>

      <p className="footer-text">{appInfo.version}</p>
    </section>
  )
}

export default CurriculumPage
