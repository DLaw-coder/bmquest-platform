import {
  collection,
  doc,
  getDocs,
  query,
  runTransaction,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore'
import { db } from '../../config/firebase'
import type { Learner } from '../../domain'

type LearnerProfileUpdates = Pick<Learner, 'updatedAt'> &
  Partial<Pick<
    Learner,
    'nickname' | 'nicknameKey' | 'nicknameUpdatedAt' | 'nicknameChangeCount'
  >>

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

  const firestore = db

  if (learner.nicknameKey) {
    await runTransaction(firestore, async (transaction) => {
      const learnerRef = doc(firestore, 'learners', learner.learnerId)
      const nicknameRef = doc(firestore, 'nicknames', learner.nicknameKey!)
      const nicknameSnapshot = await transaction.get(nicknameRef)

      if (nicknameSnapshot.exists()) {
        throw new Error('That nickname is already taken. Please choose another one.')
      }

      transaction.set(learnerRef, learner)
      transaction.set(nicknameRef, {
        learnerId: learner.learnerId,
        nickname: learner.nickname,
        createdAt: learner.createdAt,
        updatedAt: learner.updatedAt,
      })
    })
    return
  }

  await setDoc(doc(firestore, 'learners', learner.learnerId), learner)
}

export async function updateLearnerProfile(
  learnerId: string,
  updates: LearnerProfileUpdates,
) {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  const firestore = db

  if (updates.nicknameKey) {
    await runTransaction(firestore, async (transaction) => {
      const learnerRef = doc(firestore, 'learners', learnerId)
      const learnerSnapshot = await transaction.get(learnerRef)

      if (!learnerSnapshot.exists()) {
        throw new Error('Learner profile was not found.')
      }

      const currentLearner = learnerSnapshot.data() as Learner
      const nextNicknameRef = doc(firestore, 'nicknames', updates.nicknameKey!)
      const nextNicknameSnapshot = await transaction.get(nextNicknameRef)
      const previousNicknameRef = currentLearner.nicknameKey
        ? doc(firestore, 'nicknames', currentLearner.nicknameKey)
        : null
      const previousNicknameSnapshot = previousNicknameRef
        ? await transaction.get(previousNicknameRef)
        : null

      if (
        nextNicknameSnapshot.exists()
        && nextNicknameSnapshot.data().learnerId !== learnerId
      ) {
        throw new Error('That nickname is already taken. Please choose another one.')
      }

      if (
        previousNicknameRef
        && previousNicknameSnapshot?.exists()
        && currentLearner.nicknameKey !== updates.nicknameKey
        && previousNicknameSnapshot.data().learnerId === learnerId
      ) {
        transaction.delete(previousNicknameRef)
      }

      transaction.update(learnerRef, updates)
      transaction.set(nextNicknameRef, {
        learnerId,
        nickname: updates.nickname,
        updatedAt: updates.updatedAt,
      }, { merge: true })
    })
    return
  }

  await updateDoc(doc(firestore, 'learners', learnerId), updates)
}
