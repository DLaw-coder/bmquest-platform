import { createContext, useMemo, useState } from 'react'
import type { BMQuestUser } from '../types/User'

type AuthContextValue = {
  user: BMQuestUser | null
  isGuest: boolean
  continueAsGuest: () => void
  signInWithGooglePlaceholder: () => void
  signOut: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

type AuthProviderProps = {
  children: React.ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<BMQuestUser | null>(null)

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isGuest: user?.role === 'guest',
      continueAsGuest: () => {
        setUser({
          uid: 'guest',
          displayName: 'Guest Learner',
          role: 'guest',
          createdAt: new Date().toISOString(),
        })
      },
      signInWithGooglePlaceholder: () => {
        alert('Google Sign-In will be enabled in the next sprint.')
      },
      signOut: () => {
        setUser(null)
      },
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
