import type { Lesson } from '../../domain'
import LessonSection from './LessonSection'

type Props = {
  lesson: Lesson
}

function VocabularyCard({ lesson }: Props) {
  return (
    <LessonSection icon="📚" malay="KOSA KATA" english="Vocabulary">
      <div className="vocab-list">
        {lesson.vocabulary.map((item) => (
          <div className="lesson-row" key={item.word}>
            <div>
              <strong>{item.word}</strong>
              <small>{item.meaning}</small>
              <small>{item.example}</small>
            </div>
          </div>
        ))}
      </div>
    </LessonSection>
  )
}

export default VocabularyCard
