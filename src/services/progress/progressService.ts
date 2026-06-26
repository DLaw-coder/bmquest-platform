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

export type LessonRecommendationReason =
  | 'start'
  | 'review'
  | 'challenge'
  | 'new'
  | 'mastery'

export type LessonRecommendation = {
  lesson: Lesson
  reason: LessonRecommendationReason
  title: string
  description: string
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

export function getRecommendedLesson(
  lessons: Lesson[],
  progress: LessonProgress[],
): LessonRecommendation | null {
  if (lessons.length === 0) {
    return null
  }

  const summaries = getLessonMasterySummaries(lessons, progress)
  const weakLesson = summaries
    .filter((item) => item.attemptCount > 0 && item.bestScore < 70)
    .sort((first, second) => first.bestScore - second.bestScore)[0]

  if (weakLesson) {
    return {
      lesson: weakLesson.lesson,
      reason: 'review',
      title: 'Review weak skill',
      description:
        `Best score ${weakLesson.bestScore}%. Review this lesson before moving on.`,
    }
  }

  const challengeLesson = summaries
    .filter((item) => item.attemptCount > 0 && item.status !== 'Mastered')
    .sort((first, second) => first.latestScore - second.latestScore)[0]

  if (challengeLesson) {
    return {
      lesson: challengeLesson.lesson,
      reason: 'challenge',
      title: 'Try next challenge',
      description:
        `${challengeLesson.status}. Complete another challenge to move toward mastery.`,
    }
  }

  const newLesson = summaries.find((item) => item.attemptCount === 0)

  if (newLesson) {
    return {
      lesson: newLesson.lesson,
      reason: 'new',
      title: 'Start a new lesson',
      description: 'Continue building coverage with the next unread lesson.',
    }
  }

  const masteryRefresh = summaries
    .filter((item) => item.status === 'Mastered')
    .sort((first, second) =>
      first.attempts.at(-1)?.completedAt.localeCompare(
        second.attempts.at(-1)?.completedAt ?? '',
      ) ?? 0,
    )[0] ?? summaries[0]

  return {
    lesson: masteryRefresh.lesson,
    reason: 'mastery',
    title: 'Mastery refresh',
    description: 'All lessons are completed. Keep skills sharp with a fresh challenge.',
  }
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
