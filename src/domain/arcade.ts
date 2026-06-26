export type ArcadeGameMode = 'catch-stars' | 'word-burst' | 'book-dash'

export type ArcadeScore = {
  scoreId?: string
  learnerId: string
  displayName: string
  form: 1 | 2 | 3 | 4 | 5
  gameMode: ArcadeGameMode
  rewardTier: string
  score: number
  playedAt: string
}
