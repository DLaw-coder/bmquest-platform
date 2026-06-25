import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { lessons } from '../data/lessons'
import { useAuth } from '../hooks/useAuth'
import { getLearnersForAccount } from '../services/firestore/learnerRepository'
import { getProgressForLearner } from '../repositories/progress/progressRepository'

function HomePage() {
  const { user, isGuest } = useAuth()
  const [readingProgress, setReadingProgress] = useState(0)
  const [completedLessons, setCompletedLessons] = useState(0)

  useEffect(() => {
    async function loadProgress() {
      if (!user || isGuest) {
        setReadingProgress(0)
        setCompletedLessons(0)
        return
      }

      const learners = await getLearnersForAccount(user.uid)
      const activeLearner = learners[0]

      if (!activeLearner) return

      const progress = await getProgressForLearner(activeLearner.learnerId)
      const uniqueCompletedLessons = new Set(progress.map((item) => item.lessonId))

      setCompletedLessons(uniqueCompletedLessons.size)
      setReadingProgress(Math.round((uniqueCompletedLessons.size / lessons.length) * 100))
    }

    loadProgress()
  }, [user, isGuest])

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
          <span>Today&apos;s Mission</span>
          <h2>Idea Utama</h2>
          <p>Form 1 · Kemahiran Membaca · 10 min</p>
          <Link className="mission-button" to="/lesson/idea-utama-001">
            Start Mission
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
          <p>{completedLessons} lesson completed.</p>
        </article>

        <article className="dashboard-card">
          <span>Learning Streak</span>
          <h2>{completedLessons > 0 ? '1 day' : '0 days'}</h2>
          <p>Complete missions to build consistency.</p>
        </article>
      </div>

      <p className="footer-text">Sprint 4.3 · Progress Engine</p>
    </section>
  )
}

export default HomePage
