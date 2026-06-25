import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Achievement } from '../domain/achievement'
import type { LessonProgress } from '../domain/progress'
import type { Learner } from '../domain'
import { useAuth } from '../hooks/useAuth'
import { getLearnersForAccount } from '../services/firestore/learnerRepository'
import { subscribeToProgressForLearner } from '../repositories/progress/progressRepository'
import { subscribeToAchievementsForLearner } from '../repositories/achievements/achievementRepository'

type AppData = {
  learner: Learner | null
  progress: LessonProgress[]
  achievements: Achievement[]
  isAppDataLoading: boolean
}

const AppDataContext = createContext<AppData | null>(null)

export function AppStateProvider({ children }: { children: ReactNode }) {
  const { user, isGuest } = useAuth()
  const [learner, setLearner] = useState<Learner | null>(null)
  const [progress, setProgress] = useState<LessonProgress[]>([])
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [isAppDataLoading, setIsAppDataLoading] = useState(false)

  useEffect(() => {
    if (!user || isGuest) {
      setLearner(null)
      setProgress([])
      setAchievements([])
      return
    }

    let unsubscribeProgress: (() => void) | undefined
    let unsubscribeAchievements: (() => void) | undefined

    async function loadAppData() {
      setIsAppDataLoading(true)

      const learners = await getLearnersForAccount(user.uid)
      const activeLearner = learners[0] ?? null
      setLearner(activeLearner)

      if (activeLearner) {
        unsubscribeProgress = subscribeToProgressForLearner(
          activeLearner.learnerId,
          setProgress,
        )

        unsubscribeAchievements = subscribeToAchievementsForLearner(
          activeLearner.learnerId,
          setAchievements,
        )
      }

      setIsAppDataLoading(false)
    }

    loadAppData()

    return () => {
      unsubscribeProgress?.()
      unsubscribeAchievements?.()
    }
  }, [user, isGuest])

  const value = useMemo(
    () => ({
      learner,
      progress,
      achievements,
      isAppDataLoading,
    }),
    [learner, progress, achievements, isAppDataLoading],
  )

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
}

export function useAppData() {
  const context = useContext(AppDataContext)

  if (!context) {
    throw new Error('useAppData must be used inside AppStateProvider')
  }

  return context
}
