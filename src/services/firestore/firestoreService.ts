import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import type { BMQuestUser } from '../../types/User'

export async function saveUserProfile(user: BMQuestUser) {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  await setDoc(doc(db, 'users', user.uid), user, { merge: true })
}

export async function getUserProfile(uid: string) {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  const snapshot = await getDoc(doc(db, 'users', uid))
  return snapshot.exists() ? (snapshot.data() as BMQuestUser) : null
}
