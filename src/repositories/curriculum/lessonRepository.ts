import type { Lesson } from '../../domain'
import { lessons } from '../../data/lessons'

export async function getAllLessons(): Promise<Lesson[]> {
  return lessons
}

export async function getLessonById(lessonId: string): Promise<Lesson | null> {
  return lessons.find((lesson) => lesson.id === lessonId) ?? null
}

export async function getLessonNavigation(lessonId: string) {
  const index = lessons.findIndex((lesson) => lesson.id === lessonId)

  if (index === -1) {
    return {
      previousLesson: null,
      nextLesson: null,
    }
  }

  return {
    previousLesson: lessons[index - 1] ?? null,
    nextLesson: lessons[index + 1] ?? null,
  }
}
