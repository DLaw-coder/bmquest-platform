import type { Lesson } from '../../domain'
import { evaluateLessonAchievements } from '../../engine/achievements/achievementEngine'
import { calculateSessionResult } from '../../engine/session/sessionEngine'
import { saveNewAchievements } from '../../repositories/achievements/achievementRepository'
import { saveLessonProgress } from '../../repositories/progress/progressRepository'
import { getLearnersForAccount } from '../firestore/learnerRepository'

export async function completeLessonSession({
  userId,
  isGuest,
  lesson,
  answers,
}: {
  userId?: string
  isGuest: boolean
  lesson: Lesson
  answers: Record<string, string>
}) {
  const result = calculateSessionResult(lesson, answers)

  if (!userId || isGuest) {
    return {
      result,
      saveMessage: 'Guest mode: progress is not saved.',
      achievementMessage: '',
    }
  }

  const learners = await getLearnersForAccount(userId)
  const activeLearner = learners[0]

  if (!activeLearner) {
    return {
      result,
      saveMessage: 'No learner profile found.',
      achievementMessage: '',
    }
  }

  await saveLessonProgress({
    learnerId: activeLearner.learnerId,
    lessonId: lesson.id,
    correctAnswers: result.correctAnswers,
    totalQuestions: result.totalQuestions,
    scorePercent: result.scorePercent,
    completedAt: result.completedAt,
  })

  const achievements = evaluateLessonAchievements(activeLearner.learnerId, result)
  await saveNewAchievements(achievements)

  return {
    result,
    saveMessage: 'Progress saved.',
    achievementMessage: achievements.map((item) => `${item.icon} ${item.title}`).join(', '),
  }
}
