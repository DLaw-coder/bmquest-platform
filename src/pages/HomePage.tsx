import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { lessons } from '../data/lessons'
import { appInfo } from '../config/appInfo'
import type { Lesson } from '../domain'
import { useAuth } from '../hooks/useAuth'
import { getAchievementsForLearner } from '../repositories/achievements/achievementRepository'
import { getProgressForLearner } from '../repositories/progress/progressRepository'
import { getLearnersForAccount } from '../services/firestore/learnerRepository'
import { getNextRecommendedLesson } from '../services/progress/progressService'

function HomePage() {
  const { user, isGuest } = useAuth()
  const [readingProgress, setReadingProgress] = useState(0)
  const [completedLessons, setCompletedLessons] = useState(0)
  const [achievementCount, setAchievementCount] = useState(0)
  const [latestAchievement, setLatestAchievement] = useState('None yet')
  const [recommendedLesson, setRecommendedLesson] = useState<Lesson | null>(lessons[0])

  useEffect(() => {
    async function loadProgress() {
      if (!user || isGuest) return

      const learners = await getLearnersForAccount(user.uid)
      const activeLearner = learners[0]
      if (!activeLearner) return

      const progress = await getProgressForLearner(activeLearner.learnerId)
      const achievements = await getAchievementsForLearner(activeLearner.learnerId)
      const nextLesson = await getNextRecommendedLesson(activeLearner.learnerId)
      const uniqueCompletedLessons = new Set(progress.map((item) => item.lessonId))

      setCompletedLessons(uniqueCompletedLessons.size)
      setReadingProgress(Math.round((uniqueCompletedLessons.size / lessons.length) * 100))
      setAchievementCount(achievements.length)
      setRecommendedLesson(nextLesson)

      if (achievements.length > 0) {
        const latest = achievements[achievements.length - 1]
        setLatestAchievement(`${latest.icon} ${latest.title}`)
      }
    }

    loadProgress()
  }, [user, isGuest])

  const missionTitle = recommendedLesson?.title ?? 'Idea Utama'
  const missionLink = recommendedLesson ? `/lesson/${recommendedLesson.id}` : '/lesson/idea-utama-001'

  return (
    <section className="dashboard">
      <div className="dashboard-hero">
        <div>
          <p className="eyebrow">Student Dashboard</p>
          <h1>Welcome back, {user?.displayName ?? 'Learner'}</h1>
          <p className="subtitle">
            {isGuest
              ? 'Guest mode is active. Sign in later to sync progress.'
              : 'Your BM Quest learning space is ready.'}
          </p>
        </div>
        <div className="dashboard-icon">📘</div>
      </div>

      <div className="dashboard-grid">
        <article className="dashboard-card primary-card">
          <span>Continue Learning</span>
          <h2>{missionTitle}</h2>
          <p>Next recommended lesson</p>
          <Link className="mission-button" to={missionLink}>
            Continue
          </Link>
        </article>

        <article className="dashboard-card">
          <span>Current Level</span>
          <h2>Form 1</h2>
          <p>KSSM Bahasa Melayu</p>
        </article>

        <article className="dashboard-card">
          <span>Reading Progress</span>
          <h2>{readingProgress}%</h2>
          <p>{completedLessons} / {lessons.length} lesson completed.</p>
        </article>

        <article className="dashboard-card">
          <span>Achievements</span>
          <h2>{achievementCount}</h2>
          <p>{latestAchievement}</p>
        </article>
      </div>

    </section>
  )
}

export default HomePage
