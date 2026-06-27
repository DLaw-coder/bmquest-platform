export type EngagementEventName =
  | 'app_opened'
  | 'return_visit'
  | 'guest_session_started'
  | 'sign_in_completed'
  | 'pwa_installed'
  | 'lesson_started'
  | 'lesson_completed'
  | 'arcade_unlocked'
  | 'arcade_played'

export type EngagementAudience = 'visitor' | 'guest' | 'authenticated'

export type EngagementPlatform = 'web' | 'pwa'

export type EngagementEvent = {
  eventName: EngagementEventName
  audience: EngagementAudience
  accountId?: string
  learnerId?: string
  form?: 1 | 2 | 3 | 4 | 5
  lessonId?: string
  attemptNumber?: number
  scorePercent?: number
}
