import type { Lesson } from '../../domain'
import { evaluateLessonAchievements } from '../../engine/achievements/achievementEngine'
import { calculateSessionResult } from '../../engine/session/sessionEngine'
import { saveNewAchievements } from '../../repositories/achievements/achievementRepository'
import { saveLessonProgress } from '../../repositories/progress/progressRepository'
import type { PracticeMode } from './adaptiveLessonService'

export async function completeLessonSession({
  learnerId,
  isGuest,
  lesson,
  answers,
  attemptNumber,
  practiceMode = 'review',
  variantLevel = 1,
}: {
  learnerId?: string
  isGuest: boolean
  lesson: Lesson
  answers: Record<string, string>
  attemptNumber?: number
  practiceMode?: PracticeMode
  variantLevel?: number
}) {
  const result = calculateSessionResult(lesson, answers)

  if (isGuest) {
    return {
      result,
      saveMessage: 'Guest mode: progress is not saved.',
      achievementMessage: '',
    }
  }

  if (!learnerId) {
    return {
      result,
      saveMessage: 'No learner profile found.',
      achievementMessage: '',
    }
  }

  await saveLessonProgress({
    learnerId,
    lessonId: lesson.id,
    attemptNumber,
    practiceMode,
    variantLevel,
    correctAnswers: result.correctAnswers,
    totalQuestions: result.totalQuestions,
    scorePercent: result.scorePercent,
    completedAt: result.completedAt,
  })

  const achievements = evaluateLessonAchievements(learnerId, result)
  await saveNewAchievements(achievements)

  return {
    result,
    saveMessage: 'Progress saved.',
    achievementMessage: achievements.map((item) => `${item.icon} ${item.title}`).join(', '),
  }
}
