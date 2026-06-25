import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/firebase'
import type { Achievement } from '../../domain/achievement'

export async function getAchievementsForLearner(learnerId: string) {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  const achievementsQuery = query(
    collection(db, 'achievements'),
    where('learnerId', '==', learnerId),
  )

  const snapshot = await getDocs(achievementsQuery)

  return snapshot.docs.map((doc) => ({
    achievementId: doc.id,
    ...(doc.data() as Achievement),
  }))
}

export async function saveNewAchievements(achievements: Achievement[]) {
  if (!db || achievements.length === 0) {
    return
  }

  for (const achievement of achievements) {
    const existingQuery = query(
      collection(db, 'achievements'),
      where('learnerId', '==', achievement.learnerId),
      where('code', '==', achievement.code),
    )

    const existing = await getDocs(existingQuery)

    if (existing.empty) {
      await addDoc(collection(db, 'achievements'), achievement)
    }
  }
}
