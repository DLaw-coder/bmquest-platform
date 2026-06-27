export type LessonProgress = {
  progressId?: string
  learnerId: string
  lessonId: string
  attemptNumber?: number
  practiceMode?: 'review' | 'challenge'
  variantLevel?: number
  rewardTier?: 'none' | 'bronze' | 'gold'
  rewardLabel?: string
  rewardIcon?: string
  activePracticeSeconds?: number
  arcadeEligible?: boolean
  correctAnswers: number
  totalQuestions: number
  scorePercent: number
  completedAt: string
}
