import type { SessionResult } from '../session/sessionEngine'
import type { Achievement } from '../../domain/achievement'

export function evaluateLessonAchievements(
  learnerId: string,
  result: SessionResult,
): Achievement[] {
  const unlockedAt = new Date().toISOString()
  const achievements: Achievement[] = [
    {
      learnerId,
      code: 'first_lesson',
      title: 'First Lesson',
      description: 'Completed your first BM Quest KSSM lesson.',
      icon: '🏆',
      unlockedAt,
    },
  ]

  if (result.scorePercent === 100) {
    achievements.push({
      learnerId,
      code: 'perfect_score',
      title: 'Perfect Score',
      description: 'Answered every question correctly.',
      icon: '💯',
      unlockedAt,
    })
  }

  return achievements
}
