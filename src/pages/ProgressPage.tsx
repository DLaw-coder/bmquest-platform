import { useEffect, useState } from 'react'
import { lessons } from '../data/lessons'
import { useAuth } from '../hooks/useAuth'
import { getAchievementsForLearner } from '../repositories/achievements/achievementRepository'
import { getProgressForLearner } from '../repositories/progress/progressRepository'
import { getLearnersForAccount } from '../services/firestore/learnerRepository'
import type { LessonProgress } from '../domain/progress'

function ProgressPage() {
  const { user, isGuest } = useAuth()

  const [completedLessons, setCompletedLessons] = useState(0)
  const [averageScore, setAverageScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [achievementCount, setAchievementCount] = useState(0)
  const [recentActivity, setRecentActivity] = useState<LessonProgress[]>([])

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

      setRecentActivity(
        [...progress]
          .sort((a, b) => b.completedAt.localeCompare(a.completedAt))
          .slice(0, 5),
      )
    }

    loadProgress()
  }, [user, isGuest])

  const progressPercent = Math.round((completedLessons / lessons.length) * 100)

  function getLessonTitle(lessonId: string) {
    return lessons.find((lesson) => lesson.id === lessonId)?.title ?? lessonId
  }

  return (
    <section className="dashboard">
      <div className="dashboard-hero">
        <div>
          <p className="eyebrow">Learning Passport</p>
          <h1>My Progress</h1>
          <p className="subtitle">Track your Bahasa Melayu learning journey.</p>
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
      </div>

      <article className="dashboard-card">
        <span>Recent Activity</span>
        <div className="lesson-list">
          {recentActivity.length === 0 ? (
            <p>No lesson attempts yet.</p>
          ) : (
            recentActivity.map((item) => (
              <div className="lesson-row" key={item.progressId ?? `${item.lessonId}-${item.completedAt}`}>
                <div>
                  <strong>{getLessonTitle(item.lessonId)}</strong>
                  <small>{new Date(item.completedAt).toLocaleString()}</small>
                </div>
                <span>{item.scorePercent}%</span>
              </div>
            ))
          )}
        </div>
      </article>

    </section>
  )
}

export default ProgressPage
