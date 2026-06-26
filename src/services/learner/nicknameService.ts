import type { Learner } from '../../domain'
import { validateNickname } from '../../domain'

const NICKNAME_COOLDOWN_MS = 24 * 60 * 60 * 1000

export function prepareNewLearnerNickname(value: string, now: string) {
  const nickname = validateNickname(value)

  return {
    ...nickname,
    nicknameChangeCount: 0,
    nicknameUpdatedAt: now,
  }
}

export function prepareLearnerNicknameUpdate(
  learner: Learner,
  value: string,
  now: string,
) {
  const nickname = validateNickname(value)

  if (learner.nicknameKey === nickname.nicknameKey) {
    return {
      ...nickname,
      updatedAt: now,
    }
  }

  assertNicknameCanBeChanged(learner, now)

  return {
    ...nickname,
    nicknameChangeCount: (learner.nicknameChangeCount ?? 0) + 1,
    nicknameUpdatedAt: now,
    updatedAt: now,
  }
}

function assertNicknameCanBeChanged(learner: Learner, now: string) {
  if (!learner.nicknameUpdatedAt || (learner.nicknameChangeCount ?? 0) === 0) {
    return
  }

  const lastUpdatedAt = new Date(learner.nicknameUpdatedAt).getTime()
  const nextAllowedAt = lastUpdatedAt + NICKNAME_COOLDOWN_MS

  if (Number.isNaN(lastUpdatedAt) || Date.parse(now) >= nextAllowedAt) {
    return
  }

  throw new Error('Nickname can be changed once every 24 hours.')
}
