import type { Lesson } from '../../domain'
import type { LessonProgress } from '../../domain/progress'

export type MasteryStatus = 'Not Started' | 'Learning' | 'Improving' | 'Mastered'

export type LessonMasterySummary = {
  lesson: Lesson
  attempts: LessonProgress[]
  attemptCount: number
  firstScore: number
  latestScore: number
  bestScore: number
  status: MasteryStatus
}

export function getLessonProgressStateFromProgress(
  progress: LessonProgress[],
  lessons: Lesson[],
  currentLessonId: string,
  completedLessonId?: string,
) {
  const completedLessonIds = new Set(progress.map((item) => item.lessonId))
  if (completedLessonId) {
    completedLessonIds.add(completedLessonId)
  }

  const firstIncompleteLesson = lessons.find((lesson) => !completedLessonIds.has(lesson.id))

  return lessons.map((lesson) => ({
    id: lesson.id,
    title: lesson.title,
    completed: completedLessonIds.has(lesson.id),
    current: lesson.id === currentLessonId || lesson.id === firstIncompleteLesson?.id,
  }))
}

export function getNextRecommendedLessonFromProgress(
  completedLessonIds: Set<string>,
  lessons: Lesson[],
) {
  return lessons.find((lesson) => !completedLessonIds.has(lesson.id)) ?? lessons[0]
}

export function getLessonMasterySummaries(
  lessons: Lesson[],
  progress: LessonProgress[],
): LessonMasterySummary[] {
  return lessons.map((lesson) => {
    const attempts = progress
      .filter((item) => item.lessonId === lesson.id)
      .sort((first, second) => first.completedAt.localeCompare(second.completedAt))
    const scores = attempts.map((item) => item.scorePercent)
    const firstScore = scores[0] ?? 0
    const latestScore = scores.at(-1) ?? 0
    const bestScore = scores.length > 0 ? Math.max(...scores) : 0

    return {
      lesson,
      attempts,
      attemptCount: attempts.length,
      firstScore,
      latestScore,
      bestScore,
      status: getMasteryStatus(attempts),
    }
  })
}

export function getMasteryStatus(attempts: LessonProgress[]): MasteryStatus {
  if (attempts.length === 0) {
    return 'Not Started'
  }

  const bestScore = Math.max(...attempts.map((item) => item.scorePercent))
  const hasChallengeAttempt = attempts.some(
    (item) => item.practiceMode === 'challenge' || (item.variantLevel ?? 1) > 1,
  )

  if (bestScore >= 90 && hasChallengeAttempt) {
    return 'Mastered'
  }

  if (attempts.length >= 2 || bestScore >= 70) {
    return 'Improving'
  }

  return 'Learning'
}
