import type { Lesson } from '../../domain'
import LessonSection from './LessonSection'

type Props = {
  lesson: Lesson
}

function PassageCard({ lesson }: Props) {
  return (
    <LessonSection icon="📖" malay="PETIKAN" english="Reading Passage">
      <h2>{lesson.passageTitle}</h2>
      <p className="passage-text">{lesson.passage}</p>
    </LessonSection>
  )
}

export default PassageCard
