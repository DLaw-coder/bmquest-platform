export type CurriculumVersion = 'KSSM'

export type LearningArea =
  | 'Membaca'
  | 'Menulis'
  | 'Tatabahasa'
  | 'Seni Bahasa'
  | 'Mendengar dan Bertutur'
  | 'KOMSAS'

export type CurriculumLevel = {
  curriculum: CurriculumVersion
  form: 1 | 2 | 3 | 4 | 5
  learningAreas: LearningArea[]
}
