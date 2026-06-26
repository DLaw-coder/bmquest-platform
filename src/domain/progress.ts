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
  correctAnswers: number
  totalQuestions: number
  scorePercent: number
  completedAt: string
}
