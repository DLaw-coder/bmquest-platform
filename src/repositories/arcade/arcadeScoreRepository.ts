import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore'
import { db } from '../../config/firebase'
import type { ArcadeScore } from '../../domain/arcade'

export async function saveArcadeScore(score: ArcadeScore) {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  await addDoc(collection(db, 'arcadeScores'), score)
}

export async function getTopArcadeScores(limitCount = 5) {
  if (!db) {
    return []
  }

  const scoreQuery = query(
    collection(db, 'arcadeScores'),
    orderBy('score', 'desc'),
    limit(limitCount),
  )
  const snapshot = await getDocs(scoreQuery)

  return snapshot.docs.map((doc) => ({
    scoreId: doc.id,
    ...(doc.data() as ArcadeScore),
  }))
}
