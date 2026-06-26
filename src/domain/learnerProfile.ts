import type { Learner } from './learner'

export function getLearnerPublicName(
  learner: Learner | null | undefined,
  fallbackName?: string,
) {
  return learner?.nickname?.trim()
    || learner?.displayName?.trim()
    || fallbackName?.trim()
    || 'Learner'
}
