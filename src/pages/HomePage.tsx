import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useAppData } from '../context/AppStateContext'
import { getRecommendedLesson } from '../services/progress/progressService'

function HomePage() {
  const { user, isGuest } = useAuth()
  const { learner, lessons, progress, achievements } = useAppData()
  const lessonIds = new Set(lessons.map((lesson) => lesson.id))
  const formProgress = progress.filter((item) => lessonIds.has(item.lessonId))
  const completedLessonIds = new Set(
    formProgress.map((item) => item.lessonId),
  )
  const completedLessons = completedLessonIds.size
  const readingProgress = lessons.length > 0
    ? Math.round((completedLessons / lessons.length) * 100)
    : 0
  const recommendation = getRecommendedLesson(
    lessons,
    formProgress,
  )
  const recommendedLesson = recommendation?.lesson
  const latestAchievement = achievements.at(-1)
  const latestAchievementLabel = latestAchievement
    ? `${latestAchievement.icon} ${latestAchievement.title}`
    : 'None yet'

  const missionTitle = recommendedLesson?.title ?? 'Idea Utama'
  const activeForm = learner?.currentForm ?? 1

  return (
    <section className="dashboard">
      <div className="dashboard-hero dashboard-welcome-hero">
        <div className="dashboard-welcome-copy">
          <p className="eyebrow">Student Dashboard</p>
          <h1>
            Welcome back,
            <span className="dashboard-user-name">
              {user?.displayName ?? 'Learner'}
            </span>
          </h1>
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
          <span>📖 {recommendation?.title ?? 'Continue Learning'}</span>
          <h2>{recommendedLesson ? missionTitle : 'Coming Soon'}</h2>
          <p>
            {recommendedLesson
              ? recommendation?.description
              : `Form ${activeForm} lessons are being prepared.`}
          </p>
          {recommendedLesson && (
            <p>
              Form {recommendedLesson.form} · Reading Comprehension ·{' '}
              {recommendedLesson.estimatedMinutes} min
            </p>
          )}
          {recommendedLesson ? (
            <Link className="mission-button" to={`/lesson/${recommendedLesson.id}`}>
              {recommendation?.reason === 'review'
                ? 'Review →'
                : recommendation?.reason === 'challenge'
                  ? 'Challenge →'
                  : 'Continue →'}
            </Link>
          ) : (
            <p>No lessons available for this form yet.</p>
          )}
        </article>

        <article className="dashboard-card">
          <span>Current Level</span>
          <h2>Form {activeForm}</h2>
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
