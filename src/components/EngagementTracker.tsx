import { useEffect, useRef } from 'react'
import { useAppData } from '../context/AppStateContext'
import { useAuth } from '../hooks/useAuth'
import type { EngagementAudience } from '../domain/engagement'
import {
  logEngagementEventOnce,
} from '../repositories/engagement/engagementRepository'

const LAST_VISIT_DATE_KEY = 'bmquest:last-visit-date'

function EngagementTracker() {
  const { user, isGuest, isLoading } = useAuth()
  const { learner } = useAppData()
  const hasResolvedInitialAuth = useRef(false)
  const previousUserId = useRef<string | null>(null)

  useEffect(() => {
    if (isLoading) {
      return
    }

    const audience = getAudience(Boolean(user), isGuest)
    const eventIdentity = getEventIdentity(user?.uid, learner?.learnerId)
    const currentUserId = user?.uid ?? null

    logEngagementEventOnce('app-opened', {
      eventName: 'app_opened',
      audience,
      ...eventIdentity,
      form: learner?.currentForm,
    })

    logReturnVisit(audience, eventIdentity, learner?.currentForm)

    if (
      hasResolvedInitialAuth.current
      && currentUserId
      && currentUserId !== 'guest'
      && previousUserId.current !== currentUserId
    ) {
      logEngagementEventOnce(`sign-in:${currentUserId}`, {
        eventName: 'sign_in_completed',
        audience: 'authenticated',
        ...eventIdentity,
        form: learner?.currentForm,
      })
    }

    if (
      currentUserId === 'guest'
      && previousUserId.current !== 'guest'
    ) {
      logEngagementEventOnce('guest-session', {
        eventName: 'guest_session_started',
        audience: 'guest',
      })
    }

    hasResolvedInitialAuth.current = true
    previousUserId.current = currentUserId
  }, [isGuest, isLoading, learner?.currentForm, learner?.learnerId, user])

  useEffect(() => {
    const handleInstall = () => {
      const audience = getAudience(Boolean(user), isGuest)

      logEngagementEventOnce('pwa-installed', {
        eventName: 'pwa_installed',
        audience,
        ...getEventIdentity(user?.uid, learner?.learnerId),
        form: learner?.currentForm,
      })
    }

    window.addEventListener('appinstalled', handleInstall)

    return () => window.removeEventListener('appinstalled', handleInstall)
  }, [isGuest, learner?.currentForm, learner?.learnerId, user])

  return null
}

function getAudience(
  hasUser: boolean,
  isGuest: boolean,
): EngagementAudience {
  if (isGuest) {
    return 'guest'
  }

  return hasUser ? 'authenticated' : 'visitor'
}

function getEventIdentity(
  accountId?: string,
  learnerId?: string,
) {
  if (!accountId || accountId === 'guest') {
    return {}
  }

  return {
    accountId,
    ...(learnerId ? { learnerId } : {}),
  }
}

function logReturnVisit(
  audience: EngagementAudience,
  identity: ReturnType<typeof getEventIdentity>,
  form?: 1 | 2 | 3 | 4 | 5,
) {
  const today = new Date().toISOString().slice(0, 10)

  try {
    const lastVisitDate = localStorage.getItem(LAST_VISIT_DATE_KEY)

    if (lastVisitDate && lastVisitDate !== today) {
      logEngagementEventOnce(`return-visit:${today}`, {
        eventName: 'return_visit',
        audience,
        ...identity,
        form,
      })
    }

    localStorage.setItem(LAST_VISIT_DATE_KEY, today)
  } catch {
    // Engagement tracking must never interrupt learning.
  }
}

export default EngagementTracker
