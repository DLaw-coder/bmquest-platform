import { withDefaultLessonAccess, type Lesson } from '../../domain'
import type { FormLevel } from '../../domain/learner'
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
  where,
} from 'firebase/firestore'

function sortLessonsByOrder(first: Lesson, second: Lesson) {
  return (first.sortOrder ?? Number.MAX_SAFE_INTEGER) -
    (second.sortOrder ?? Number.MAX_SAFE_INTEGER)
}

function getLocalLessons() {
  return lessons.map(withDefaultLessonAccess).sort(sortLessonsByOrder)
}

export async function getAllLessons(): Promise<Lesson[]> {
  if (!db) {
    return getLocalLessons()
  }

  try {
    const snapshot = await getDocs(
      query(collection(db, 'lessons'), orderBy('sortOrder')),
    )
    const firestoreLessons = snapshot.docs.map((item) =>
      withDefaultLessonAccess(item.data() as Lesson),
    )

    return firestoreLessons.length > 0 ? firestoreLessons : getLocalLessons()
  } catch (error) {
    console.warn('Falling back to local lessons.', error)
    return getLocalLessons()
  }
}

export async function getLessonsForForm(form: FormLevel): Promise<Lesson[]> {
  const localLessonsForForm = getLocalLessons().filter(
    (lesson) => lesson.form === form,
  )

  if (!db) {
    return localLessonsForForm
  }

  try {
    const snapshot = await getDocs(
      query(collection(db, 'lessons'), where('form', '==', form)),
    )
    const firestoreLessons = snapshot.docs
      .map((item) => withDefaultLessonAccess(item.data() as Lesson))
      .sort(sortLessonsByOrder)
    const mergedLessons = new Map(
      localLessonsForForm.map((lesson) => [lesson.id, lesson]),
    )

    firestoreLessons.forEach((lesson) => {
      mergedLessons.set(lesson.id, lesson)
    })

    return [...mergedLessons.values()].sort(sortLessonsByOrder)
  } catch (error) {
    console.warn(`Falling back to local Form ${form} lessons.`, error)
    return localLessonsForForm
  }
}

export async function getLessonById(lessonId: string): Promise<Lesson | null> {
  if (db) {
    try {
      const snapshot = await getDoc(doc(db, 'lessons', lessonId))

      if (snapshot.exists()) {
        return withDefaultLessonAccess(snapshot.data() as Lesson)
      }
    } catch (error) {
      console.warn('Falling back to local lesson lookup.', error)
    }
  }

  return getLocalLessons().find((lesson) => lesson.id === lessonId) ?? null
}

export async function saveLesson(lesson: Lesson) {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  await setDoc(doc(db, 'lessons', lesson.id), lesson)
}
