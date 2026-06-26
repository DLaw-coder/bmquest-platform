import type { AccountPlan } from './entitlement'

export type AccountRole = 'parent' | 'student'

export type Account = {
  uid: string
  displayName: string
  email?: string
  photoURL?: string
  role: AccountRole
  provider: 'google'
  plan?: AccountPlan
  planUpdatedAt?: string
  createdAt: string
  updatedAt: string
}
