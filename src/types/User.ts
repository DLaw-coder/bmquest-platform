import type { AccountPlan } from '../domain'

export type UserRole = 'guest' | 'student' | 'parent'

export type BMQuestUser = {
  uid: string
  displayName: string
  email?: string
  role: UserRole
  plan?: AccountPlan
  createdAt: string
}
