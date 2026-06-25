import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Achievement } from '../domain/achievement'
import type { LessonProgress } from '../domain/progress'
import type { Learner } from '../domain'

type AppData = {
  learner: Learner | null
  progress: LessonProgress[]
  achievements: Achievement[]
  isAppDataLoading: boolean
  setLearner: (learner: Learner | null) => void
  setProgress: (progress: LessonProgress[]) => void
  setAchievements: (achievements: Achievement[]) => void
  setIsAppDataLoading: (loading: boolean) => void
}

const AppDataContext = createContext<AppData | null>(null)

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [learner, setLearner] = useState<Learner | null>(null)
  const [progress, setProgress] = useState<LessonProgress[]>([])
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [isAppDataLoading, setIsAppDataLoading] = useState(false)

  const value = useMemo(
    () => ({
      learner,
      progress,
      achievements,
      isAppDataLoading,
      setLearner,
      setProgress,
      setAchievements,
      setIsAppDataLoading,
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
