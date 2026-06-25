import { collection, getDocs, query, setDoc, where, doc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import type { Learner } from '../../domain'

export async function getLearnersForAccount(accountId: string) {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  const learnersRef = collection(db, 'learners')
  const learnersQuery = query(learnersRef, where('accountId', '==', accountId))
  const snapshot = await getDocs(learnersQuery)

  return snapshot.docs.map((doc) => doc.data() as Learner)
}

export async function createLearner(learner: Learner) {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  await setDoc(doc(db, 'learners', learner.learnerId), learner)
}
