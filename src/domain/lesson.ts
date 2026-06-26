import type { CurriculumLessonMeta } from './curriculum'
import type { LessonCurriculumReferences } from './curriculumReference'
import type { AccessTier } from './entitlement'

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
  example: string
}

export type Lesson = {
  id: string
  sortOrder?: number
  accessTier?: AccessTier
  title: string
  form: 1 | 2 | 3 | 4 | 5
  strand: 'Membaca'
  skill: string
  learningObjective: string
  readingTip: string
  estimatedMinutes: number
  curriculumMeta: CurriculumLessonMeta
  curriculumReferences: LessonCurriculumReferences
  passageTitle: string
  passage: string
  vocabulary: VocabularyItem[]
  questions: LessonQuestion[]
  summary: string[]
}
