import { lessons } from '../../data/lessons'
import { getAchievementsForLearner } from '../../repositories/achievements/achievementRepository'
import { getProgressForLearner } from '../../repositories/progress/progressRepository'

export async function getDeveloperStats(learnerId?: string) {
  if (!learnerId) {
    return {
      lessonCount: lessons.length,
      progressCount: 0,
      achievementCount: 0,
    }
  }

  const progress = await getProgressForLearner(learnerId)
  const achievements = await getAchievementsForLearner(learnerId)

  return {
    lessonCount: lessons.length,
    progressCount: progress.length,
    achievementCount: achievements.length,
  }
}
