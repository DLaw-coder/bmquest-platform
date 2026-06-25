import type { Lesson } from '../../domain'
import InfoCallout from './InfoCallout'
import LessonSection from './LessonSection'

type Props = {
  lesson: Lesson
}

function ReadingTipCard({ lesson }: Props) {
  return (
    <LessonSection icon="💡" malay="TIP MEMBACA" english="Reading Tip">
      <InfoCallout>{lesson.readingTip}</InfoCallout>
    </LessonSection>
  )
}

export default ReadingTipCard
