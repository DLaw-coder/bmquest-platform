import {
  useCallback,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Achievement } from '../domain/achievement'
import type { LessonProgress } from '../domain/progress'
import type { Learner, Lesson } from '../domain'
import { useAuth } from '../hooks/useAuth'
import { getLearnersForAccount } from '../repositories/learner/learnerRepository'
import { subscribeToProgressForLearner } from '../repositories/progress/progressRepository'
import { subscribeToAchievementsForLearner } from '../repositories/achievements/achievementRepository'
import { getAllLessons } from '../repositories/curriculum/lessonRepository'

type AppData = {
  learner: Learner | null
  lessons: Lesson[]
  progress: LessonProgress[]
  achievements: Achievement[]
  isAppDataLoading: boolean
  refreshAppData: () => void
}

const AppDataContext = createContext<AppData | null>(null)

export function AppStateProvider({ children }: { children: ReactNode }) {
  const { user, isGuest } = useAuth()
  const [learner, setLearner] = useState<Learner | null>(null)
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [progress, setProgress] = useState<LessonProgress[]>([])
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [isAppDataLoading, setIsAppDataLoading] = useState(false)
  const [refreshVersion, setRefreshVersion] = useState(0)
  const refreshAppData = useCallback(() => {
    setRefreshVersion((current) => current + 1)
  }, [])

  useEffect(() => {
    if (!user || isGuest) {
      setLearner(null)
      setProgress([])
      setAchievements([])
      getAllLessons().then(setLessons)
      return
    }

    let unsubscribeProgress: (() => void) | undefined
    let unsubscribeAchievements: (() => void) | undefined
    const accountId = user.uid

    async function loadAppData() {
      setIsAppDataLoading(true)

      const availableLessons = await getAllLessons()
      setLessons(availableLessons)

      const learners = await getLearnersForAccount(accountId)
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
  }, [user, isGuest, refreshVersion])

  const value = useMemo(
    () => ({
      learner,
      lessons,
      progress,
      achievements,
      isAppDataLoading,
      refreshAppData,
    }),
    [learner, lessons, progress, achievements, isAppDataLoading, refreshAppData],
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
