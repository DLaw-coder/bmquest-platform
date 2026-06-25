export type CurriculumVersion = 'KSSM'

export type Subject = 'Bahasa Melayu'

export type LearningArea =
  | 'Membaca'
  | 'Menulis'
  | 'Tatabahasa'
  | 'Seni Bahasa'
  | 'Mendengar dan Bertutur'
  | 'KOMSAS'

export type ContentStandard = {
  code: string
  description: string
}

export type LearningStandard = {
  code: string
  description: string
}

export type CurriculumLessonMeta = {
  subject: Subject
  curriculum: CurriculumVersion
  form: 1 | 2 | 3 | 4 | 5
  theme: string
  unit: string
  learningArea: LearningArea
  contentStandard: ContentStandard
  learningStandard: LearningStandard
}

export type CurriculumLevel = {
  curriculum: CurriculumVersion
  subject: Subject
  form: 1 | 2 | 3 | 4 | 5
  learningAreas: LearningArea[]
}
