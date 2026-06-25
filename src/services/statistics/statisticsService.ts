import { lessons } from '../../data/lessons'
import { getAchievementsForLearner } from '../../repositories/achievements/achievementRepository'
import { getProgressForLearner } from '../../repositories/progress/progressRepository'

export async function getLearnerStatistics(learnerId: string) {
  const progress = await getProgressForLearner(learnerId)
  const achievements = await getAchievementsForLearner(learnerId)

  const completedLessonIds = new Set(progress.map((item) => item.lessonId))
  const completedLessons = completedLessonIds.size
  const readingProgress = Math.round((completedLessons / lessons.length) * 100)

  const bestScore =
    progress.length > 0 ? Math.max(...progress.map((item) => item.scorePercent)) : 0

  const averageScore =
    progress.length > 0
      ? Math.round(progress.reduce((sum, item) => sum + item.scorePercent, 0) / progress.length)
      : 0

  return {
    completedLessons,
    readingProgress,
    achievementCount: achievements.length,
    bestScore,
    averageScore,
    streakDays: completedLessons > 0 ? 1 : 0,
  }
}
