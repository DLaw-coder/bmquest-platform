import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
  type Unsubscribe,
} from 'firebase/firestore'
import { db } from '../../config/firebase'
import type { LessonProgress } from '../../domain/progress'

export async function saveLessonProgress(progress: LessonProgress) {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  await addDoc(collection(db, 'progress'), progress)
}

export async function getProgressForLearner(learnerId: string) {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  const progressQuery = query(
    collection(db, 'progress'),
    where('learnerId', '==', learnerId),
  )

  const snapshot = await getDocs(progressQuery)

  return snapshot.docs.map((doc) => ({
    progressId: doc.id,
    ...(doc.data() as LessonProgress),
  }))
}

export function subscribeToProgressForLearner(
  learnerId: string,
  onChange: (progress: LessonProgress[]) => void,
): Unsubscribe {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  const progressQuery = query(
    collection(db, 'progress'),
    where('learnerId', '==', learnerId),
  )

  return onSnapshot(progressQuery, (snapshot) => {
    onChange(
      snapshot.docs.map((doc) => ({
        progressId: doc.id,
        ...(doc.data() as LessonProgress),
      })),
    )
  })
}
