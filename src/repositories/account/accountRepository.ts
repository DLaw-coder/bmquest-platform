import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import type { Account } from '../../domain/account'
import { getDefaultAccountPlan } from '../../domain'

export async function upsertAccount(account: Account) {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  const accountRef = doc(db, 'accounts', account.uid)
  const existing = await getDoc(accountRef)

  if (existing.exists()) {
    const existingAccount = existing.data() as Account
    const hasProfileChanged =
      existingAccount.displayName !== account.displayName
      || existingAccount.email !== account.email
      || existingAccount.photoURL !== account.photoURL

    if (!hasProfileChanged) {
      return existingAccount
    }

    const updatedAccount = {
      ...existingAccount,
      displayName: account.displayName,
      email: account.email,
      photoURL: account.photoURL,
      updatedAt: account.updatedAt,
    }

    await setDoc(
      accountRef,
      {
        displayName: updatedAccount.displayName,
        email: updatedAccount.email,
        photoURL: updatedAccount.photoURL,
        updatedAt: updatedAccount.updatedAt,
      },
      { merge: true },
    )

    return updatedAccount
  }

  const newAccount = {
    ...account,
    plan: account.plan ?? getDefaultAccountPlan(),
    planUpdatedAt: account.planUpdatedAt ?? account.createdAt,
  }

  await setDoc(accountRef, newAccount)

  return newAccount
}
