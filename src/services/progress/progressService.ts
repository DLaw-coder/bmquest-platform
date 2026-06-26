import type { Lesson } from '../../domain'
import type { LessonProgress } from '../../domain/progress'

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
