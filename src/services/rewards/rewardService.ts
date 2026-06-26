export type RewardTier = 'none' | 'bronze' | 'gold'

export type ScoreReward = {
  tier: RewardTier
  label: string
  icon: string
  message: string
}

export function getScoreReward(scorePercent: number): ScoreReward {
  if (scorePercent >= 90) {
    return {
      tier: 'gold',
      label: 'Mastery Star',
      icon: '🌟',
      message: 'Excellent! You earned a Mastery Star.',
    }
  }

  if (scorePercent >= 70) {
    return {
      tier: 'bronze',
      label: 'BM Star',
      icon: '⭐',
      message: 'Bagus! You earned a BM Star.',
    }
  }

  return {
    tier: 'none',
    label: 'Keep Going',
    icon: '🌱',
    message: 'Keep going — try the next challenge to improve.',
  }
}
