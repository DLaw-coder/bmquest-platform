export type UserRole = 'guest' | 'student' | 'parent'

export type BMQuestUser = {
  uid: string
  displayName: string
  email?: string
  role: UserRole
  createdAt: string
}
