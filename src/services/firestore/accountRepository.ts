import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import type { Account } from '../../types/Account'

export async function upsertAccount(account: Account) {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  const accountRef = doc(db, 'accounts', account.uid)
  const existing = await getDoc(accountRef)

  if (existing.exists()) {
    await setDoc(
      accountRef,
      {
        displayName: account.displayName,
        email: account.email,
        photoURL: account.photoURL,
        updatedAt: account.updatedAt,
      },
      { merge: true },
    )

    return
  }

  await setDoc(accountRef, account)
}
