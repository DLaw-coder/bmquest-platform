import type {
  ContentStandard,
  CurriculumVersion,
  LearningArea,
  LearningStandard,
  Subject,
} from './curriculum'
import type { FormLevel } from './learner'

export type ReferenceVerificationStatus = 'verified' | 'needs-review'

export type CurriculumStandardReference = {
  standardId: string
  curriculum: CurriculumVersion
  subject: Subject
  form: FormLevel
  learningArea: LearningArea
  contentStandard: ContentStandard
  learningStandard: LearningStandard
  dskpVersion: string
  sourceTitle: string
  sourceUrl?: string
  verificationStatus: ReferenceVerificationStatus
}

export type TextbookReference = {
  referenceId: string
  curriculum: CurriculumVersion
  subject: Subject
  form: FormLevel
  title: string
  editionYear: number
  isbn?: string
  publisher: string
  unit: string
  pageStart: number
  pageEnd: number
  alignmentNote: string
  catalogUrl?: string
  sourceUrl?: string
  verificationStatus: ReferenceVerificationStatus
}

export type LessonCurriculumReferences = {
  standardIds: string[]
  textbookReferenceIds: string[]
}
