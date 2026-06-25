import type { Lesson } from '../../domain'
import LessonSection from './LessonSection'

type Props = {
  lesson: Lesson
}

function LessonMetaCard({ lesson }: Props) {
  return (
    <LessonSection icon="🎯" malay="OBJEKTIF" english="Learning Objective">
      <p>{lesson.learningObjective}</p>
    </LessonSection>
  )
}

export default LessonMetaCard
