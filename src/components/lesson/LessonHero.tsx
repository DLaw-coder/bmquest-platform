import type { Lesson } from '../../domain'
import { useLanguage } from '../../context/LanguageContext'

type Props = {
  lesson: Lesson
}

function LessonHero({ lesson }: Props) {
  const { t } = useLanguage()

  return (
    <div className="lesson-hero">
      <div className="lesson-hero-icon">📖</div>
      <p className="eyebrow">{t('common.form')} {lesson.form} · {lesson.strand}</p>
      <h1>{lesson.title}</h1>
      <p className="subtitle">
        {lesson.skill} · {lesson.estimatedMinutes} min
      </p>
    </div>
  )
}

export default LessonHero
