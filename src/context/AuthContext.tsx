import { createContext, useEffect, useMemo, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase'
import {
  signInWithGoogle as firebaseSignInWithGoogle,
  signOutUser,
} from '../services/auth/authService'
import { upsertAccount } from '../repositories/account/accountRepository'
import type { BMQuestUser } from '../types/User'

type AuthContextValue = {
  user: BMQuestUser | null
  isGuest: boolean
  isLoading: boolean
  continueAsGuest: () => void
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextValue | null>(null)

type AuthProviderProps = {
  children: React.ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<BMQuestUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!auth) {
      setIsLoading(false)
      return
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const now = new Date().toISOString()

        await upsertAccount({
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName ?? 'BM Quest User',
          email: firebaseUser.email ?? undefined,
          photoURL: firebaseUser.photoURL ?? undefined,
          role: 'parent',
          provider: 'google',
          createdAt: now,
          updatedAt: now,
        })

        setUser({
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName ?? 'BM Quest User',
          email: firebaseUser.email ?? undefined,
          role: 'parent',
          createdAt: now,
        })
      } else {
        setUser(null)
      }

      setIsLoading(false)
    })

    return unsubscribe
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isGuest: user?.role === 'guest',
      isLoading,
      continueAsGuest: () => {
        setUser({
          uid: 'guest',
          displayName: 'Guest Learner',
          role: 'guest',
          createdAt: new Date().toISOString(),
        })
      },
      signInWithGoogle: async () => {
        await firebaseSignInWithGoogle()
      },
      signOut: async () => {
        await signOutUser()
        setUser(null)
      },
    }),
    [user, isLoading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
