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
import type { Entitlement, Learner, Lesson } from '../domain'
import { canAccessLesson, getEntitlement } from '../domain'
import { useAuth } from '../hooks/useAuth'
import { getLearnersForAccount } from '../repositories/learner/learnerRepository'
import { subscribeToProgressForLearner } from '../repositories/progress/progressRepository'
import { subscribeToAchievementsForLearner } from '../repositories/achievements/achievementRepository'
import { getLessonsForForm } from '../repositories/curriculum/lessonRepository'

type AppData = {
  learner: Learner | null
  lessons: Lesson[]
  progress: LessonProgress[]
  achievements: Achievement[]
  entitlement: Entitlement
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
      getLessonsForForm(1).then((availableLessons) => {
        setLessons(availableLessons.filter((lesson) => canAccessLesson(user?.plan, lesson)))
      })
      return
    }

    let unsubscribeProgress: (() => void) | undefined
    let unsubscribeAchievements: (() => void) | undefined
    const accountId = user.uid

    async function loadAppData() {
      setIsAppDataLoading(true)

      const learners = await getLearnersForAccount(accountId)
      const activeLearner = learners[0] ?? null
      setLearner(activeLearner)

      const availableLessons = activeLearner
        ? await getLessonsForForm(activeLearner.currentForm)
        : []
      setLessons(availableLessons.filter((lesson) => canAccessLesson(user?.plan, lesson)))

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
      entitlement: getEntitlement(user?.plan),
      isAppDataLoading,
      refreshAppData,
    }),
    [
      learner,
      lessons,
      progress,
      achievements,
      user?.plan,
      isAppDataLoading,
      refreshAppData,
    ],
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
