import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'

export async function signInWithGoogle() {
  if (!auth) {
    throw new Error('Firebase Auth is not configured yet.')
  }

  const provider = new GoogleAuthProvider()
  return signInWithPopup(auth, provider)
}

export async function signOutUser() {
  if (!auth) {
    return
  }

  await signOut(auth)
}
