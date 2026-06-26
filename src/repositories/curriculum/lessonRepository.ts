import type { Lesson } from '../../domain'
import { lessons } from '../../data/lessons'
import { db } from '../../config/firebase'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore'

function sortLessonsByOrder(first: Lesson, second: Lesson) {
  return (first.sortOrder ?? Number.MAX_SAFE_INTEGER) -
    (second.sortOrder ?? Number.MAX_SAFE_INTEGER)
}

function getLocalLessons() {
  return [...lessons].sort(sortLessonsByOrder)
}

export async function getAllLessons(): Promise<Lesson[]> {
  if (!db) {
    return getLocalLessons()
  }

  try {
    const snapshot = await getDocs(
      query(collection(db, 'lessons'), orderBy('sortOrder')),
    )
    const firestoreLessons = snapshot.docs.map((item) => item.data() as Lesson)

    return firestoreLessons.length > 0 ? firestoreLessons : getLocalLessons()
  } catch (error) {
    console.warn('Falling back to local lessons.', error)
    return getLocalLessons()
  }
}

export async function getLessonById(lessonId: string): Promise<Lesson | null> {
  if (db) {
    try {
      const snapshot = await getDoc(doc(db, 'lessons', lessonId))

      if (snapshot.exists()) {
        return snapshot.data() as Lesson
      }
    } catch (error) {
      console.warn('Falling back to local lesson lookup.', error)
    }
  }

  return getLocalLessons().find((lesson) => lesson.id === lessonId) ?? null
}

export async function getLessonNavigation(lessonId: string) {
  const availableLessons = await getAllLessons()
  const index = availableLessons.findIndex((lesson) => lesson.id === lessonId)

  if (index === -1) {
    return {
      previousLesson: null,
      nextLesson: null,
    }
  }

  return {
    previousLesson: availableLessons[index - 1] ?? null,
    nextLesson: availableLessons[index + 1] ?? null,
  }
}

export async function saveLesson(lesson: Lesson) {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  await setDoc(doc(db, 'lessons', lesson.id), lesson)
}
