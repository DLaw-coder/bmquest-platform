import type { Lesson } from '../../domain'
import { lessons } from '../../data/lessons'

export async function getAllLessons(): Promise<Lesson[]> {
  return lessons
}

export async function getLessonById(lessonId: string): Promise<Lesson | null> {
  return lessons.find((lesson) => lesson.id === lessonId) ?? null
}
