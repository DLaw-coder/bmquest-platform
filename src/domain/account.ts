export type AccountRole = 'parent' | 'student'

export type Account = {
  uid: string
  displayName: string
  email?: string
  photoURL?: string
  role: AccountRole
  provider: 'google'
  createdAt: string
  updatedAt: string
}
