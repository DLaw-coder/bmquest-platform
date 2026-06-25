import { Link } from 'react-router-dom'
import { lessons } from '../data/lessons'
import { useAuth } from '../hooks/useAuth'
import { useAppData } from '../context/AppStateContext'
import { getNextRecommendedLessonFromProgress } from '../services/progress/progressService'

function HomePage() {
  const { user, isGuest } = useAuth()
  const { progress, achievements } = useAppData()
  const completedLessonIds = new Set(progress.map((item) => item.lessonId))
  const completedLessons = completedLessonIds.size
  const readingProgress = Math.round((completedLessons / lessons.length) * 100)
  const recommendedLesson = getNextRecommendedLessonFromProgress(completedLessonIds)
  const latestAchievement = achievements.at(-1)
  const latestAchievementLabel = latestAchievement
    ? `${latestAchievement.icon} ${latestAchievement.title}`
    : 'None yet'

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
          <span>📖 Continue Learning</span>
          <h2>{missionTitle}</h2>
          <p>Form 1 · Reading Comprehension · 10 min</p>
          <Link className="mission-button" to={missionLink}>
            Continue →
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
          <h2>{achievements.length}</h2>
          <p>{latestAchievementLabel}</p>
        </article>
      </div>

    </section>
  )
}

export default HomePage
