export type QuestionOption = {
  id: string
  text: string
}

export type LessonQuestion = {
  id: string
  prompt: string
  options: QuestionOption[]
  correctOptionId: string
  explanation: string
}

export type VocabularyItem = {
  word: string
  meaning: string
}

export type Lesson = {
  id: string
  title: string
  form: 1 | 2 | 3 | 4 | 5
  strand: 'Membaca'
  skill: string
  estimatedMinutes: number
  passageTitle: string
  passage: string
  vocabulary: VocabularyItem[]
  questions: LessonQuestion[]
}
