import { useEffect, useState } from 'react'
import { lessons } from '../data/lessons'
import { useAuth } from '../hooks/useAuth'
import { getAchievementsForLearner } from '../repositories/achievements/achievementRepository'
import { getProgressForLearner } from '../repositories/progress/progressRepository'
import { getLearnersForAccount } from '../services/firestore/learnerRepository'

function ProgressPage() {
  const { user, isGuest } = useAuth()

  const [completedLessons, setCompletedLessons] = useState(0)
  const [averageScore, setAverageScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [achievementCount, setAchievementCount] = useState(0)

  useEffect(() => {
    async function loadProgress() {
      if (!user || isGuest) return

      const learners = await getLearnersForAccount(user.uid)
      const activeLearner = learners[0]
      if (!activeLearner) return

      const progress = await getProgressForLearner(activeLearner.learnerId)
      const achievements = await getAchievementsForLearner(activeLearner.learnerId)

      const completedLessonIds = new Set(progress.map((item) => item.lessonId))
      const scores = progress.map((item) => item.scorePercent)

      setCompletedLessons(completedLessonIds.size)
      setAchievementCount(achievements.length)
      setBestScore(scores.length > 0 ? Math.max(...scores) : 0)
      setAverageScore(
        scores.length > 0
          ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length)
          : 0,
      )
    }

    loadProgress()
  }, [user, isGuest])

  const progressPercent = Math.round((completedLessons / lessons.length) * 100)

  return (
    <section className="dashboard">
      <div className="dashboard-hero">
        <div>
          <p className="eyebrow">Learning Passport</p>
          <h1>My Progress</h1>
          <p className="subtitle">
            Track your Bahasa Melayu learning journey.
          </p>
        </div>
        <div className="dashboard-icon">📈</div>
      </div>

      <div className="dashboard-grid">
        <article className="dashboard-card primary-card">
          <span>Overall Progress</span>
          <h2>{progressPercent}%</h2>
          <p>{completedLessons} / {lessons.length} lessons completed</p>
        </article>

        <article className="dashboard-card">
          <span>Average Score</span>
          <h2>{averageScore}%</h2>
          <p>Across completed attempts.</p>
        </article>

        <article className="dashboard-card">
          <span>Best Score</span>
          <h2>{bestScore}%</h2>
          <p>Your highest lesson score.</p>
        </article>

        <article className="dashboard-card">
          <span>Achievements</span>
          <h2>{achievementCount}</h2>
          <p>Unlocked learning badges.</p>
        </article>

        <article className="dashboard-card">
          <span>Current Level</span>
          <h2>Form 1</h2>
          <p>KSSM Bahasa Melayu</p>
        </article>

        <article className="dashboard-card">
          <span>Learning Streak</span>
          <h2>{completedLessons > 0 ? '1 day' : '0 days'}</h2>
          <p>Streak logic will expand later.</p>
        </article>
      </div>

      <p className="footer-text">BM Quest v0.9.0-alpha</p>
    </section>
  )
}

export default ProgressPage
