import type { RewardTier } from './rewardService'

const ARCADE_GRANT_PREFIX = 'bmquest:arcade-grant:'

export type ArcadeGrant = {
  token: string
  rewardTier: Exclude<RewardTier, 'none'>
  issuedAt: string
}

export function issueArcadeGrant(
  rewardTier: Exclude<RewardTier, 'none'>,
): ArcadeGrant {
  const grant = {
    token: crypto.randomUUID(),
    rewardTier,
    issuedAt: new Date().toISOString(),
  }

  sessionStorage.setItem(
    `${ARCADE_GRANT_PREFIX}${grant.token}`,
    JSON.stringify(grant),
  )

  return grant
}

export function consumeArcadeGrant(token: string | null): ArcadeGrant | null {
  if (!token) {
    return null
  }

  const storageKey = `${ARCADE_GRANT_PREFIX}${token}`
  const storedGrant = sessionStorage.getItem(storageKey)
  sessionStorage.removeItem(storageKey)

  if (!storedGrant) {
    return null
  }

  try {
    const grant = JSON.parse(storedGrant) as ArcadeGrant
    const issuedAt = new Date(grant.issuedAt).getTime()
    const isRecent = Date.now() - issuedAt <= 10 * 60 * 1000

    return grant.token === token && isRecent ? grant : null
  } catch {
    return null
  }
}
