import type { Lesson } from './lesson'

export type AccountPlan = 'free' | 'premium'
export type AccessTier = 'free' | 'premium'

export type Entitlement = {
  plan: AccountPlan
  label: string
  isPremium: boolean
}

export function getDefaultAccountPlan(): AccountPlan {
  return 'free'
}

export function getEntitlement(plan?: AccountPlan): Entitlement {
  const activePlan = plan ?? getDefaultAccountPlan()

  return {
    plan: activePlan,
    label: activePlan === 'premium' ? 'Premium' : 'Free',
    isPremium: activePlan === 'premium',
  }
}

export function getLessonAccessTier(lesson: Lesson): AccessTier {
  return lesson.accessTier ?? 'free'
}

export function canAccessTier(plan: AccountPlan | undefined, tier: AccessTier) {
  return tier === 'free' || plan === 'premium'
}

export function canAccessLesson(plan: AccountPlan | undefined, lesson: Lesson) {
  return canAccessTier(plan, getLessonAccessTier(lesson))
}

export function withDefaultLessonAccess(lesson: Lesson): Lesson {
  return {
    ...lesson,
    accessTier: getLessonAccessTier(lesson),
  }
}
