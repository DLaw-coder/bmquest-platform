export type LessonProgress = {
  progressId?: string
  learnerId: string
  lessonId: string
  attemptNumber?: number
  practiceMode?: 'review' | 'challenge'
  variantLevel?: number
  correctAnswers: number
  totalQuestions: number
  scorePercent: number
  completedAt: string
}
