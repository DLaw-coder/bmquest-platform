import { lessons } from '../../data/lessons'
import { getProgressForLearner } from '../../repositories/progress/progressRepository'

export async function getLessonProgressState(learnerId: string, currentLessonId: string) {
  const progress = await getProgressForLearner(learnerId)
  const completedLessonIds = new Set(progress.map((item) => item.lessonId))

  const firstIncompleteLesson = lessons.find((lesson) => !completedLessonIds.has(lesson.id))

  return lessons.map((lesson) => ({
    id: lesson.id,
    title: lesson.title,
    completed: completedLessonIds.has(lesson.id),
    current: lesson.id === currentLessonId || lesson.id === firstIncompleteLesson?.id,
  }))
}
