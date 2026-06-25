export type LessonProgress = {
  progressId?: string
  learnerId: string
  lessonId: string
  correctAnswers: number
  totalQuestions: number
  scorePercent: number
  completedAt: string
}
