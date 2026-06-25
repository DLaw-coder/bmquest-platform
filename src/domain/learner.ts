export type FormLevel = 1 | 2 | 3 | 4 | 5

export type Learner = {
  learnerId: string
  accountId: string
  displayName: string
  currentForm: FormLevel
  schoolId?: string
  avatar?: string
  preferredLanguage: 'en' | 'ms'
  createdAt: string
  updatedAt: string
}
