import type { Lesson } from '../../domain'

type Props = {
  lesson: Lesson
}

function LessonHero({ lesson }: Props) {
  return (
    <div className="lesson-hero">
      <div className="lesson-hero-icon">📖</div>
      <p className="eyebrow">Form {lesson.form} · {lesson.strand}</p>
      <h1>{lesson.title}</h1>
      <p className="subtitle">
        {lesson.skill} · {lesson.estimatedMinutes} min
      </p>
    </div>
  )
}

export default LessonHero
