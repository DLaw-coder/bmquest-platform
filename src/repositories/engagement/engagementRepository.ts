import {
  addDoc,
  collection,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore'
import { appInfo } from '../../config/appInfo'
import { db } from '../../config/firebase'
import type {
  EngagementEvent,
  EngagementPlatform,
} from '../../domain/engagement'

const SESSION_ID_KEY = 'bmquest:engagement-session'
const EVENT_KEY_PREFIX = 'bmquest:engagement-event:'
const RETENTION_DAYS = 90

export async function logEngagementEvent(event: EngagementEvent) {
  if (!db) {
    return
  }

  const definedEventFields = Object.fromEntries(
    Object.entries(event).filter(([, value]) => value !== undefined),
  )

  await addDoc(collection(db, 'engagementEvents'), {
    ...definedEventFields,
    sessionId: getSessionId(),
    platform: getPlatform(),
    appVersion: appInfo.version,
    occurredAt: serverTimestamp(),
    expiresAt: Timestamp.fromDate(
      new Date(Date.now() + RETENTION_DAYS * 24 * 60 * 60 * 1000),
    ),
  })
}

export async function logEngagementEventOnce(
  key: string,
  event: EngagementEvent,
) {
  const storageKey = `${EVENT_KEY_PREFIX}${key}`

  try {
    if (sessionStorage.getItem(storageKey)) {
      return
    }

    sessionStorage.setItem(storageKey, 'pending')
    await logEngagementEvent(event)
    sessionStorage.setItem(storageKey, 'logged')
  } catch (error) {
    sessionStorage.removeItem(storageKey)
    console.warn('BM Quest engagement event was not recorded.', error)
  }
}

function getSessionId() {
  const existingSessionId = sessionStorage.getItem(SESSION_ID_KEY)

  if (existingSessionId) {
    return existingSessionId
  }

  const sessionId = crypto.randomUUID()
  sessionStorage.setItem(SESSION_ID_KEY, sessionId)

  return sessionId
}

function getPlatform(): EngagementPlatform {
  return window.matchMedia('(display-mode: standalone)').matches
    ? 'pwa'
    : 'web'
}
