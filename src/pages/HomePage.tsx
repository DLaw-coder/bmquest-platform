import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useAppData } from '../context/AppStateContext'
import { getRecommendedLesson } from '../services/progress/progressService'
import { getLearnerPublicName } from '../domain'

function HomePage() {
  const { user, isGuest } = useAuth()
  const { entitlement, learner, lessons, progress, achievements } = useAppData()
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
  const averageScore = formProgress.length > 0
    ? Math.round(
        formProgress.reduce((total, item) => total + item.scorePercent, 0) /
          formProgress.length,
      )
    : 0
  const weeklyGoal = Math.min(completedLessons, 5)
  const readingRank = completedLessons >= 12
    ? 'Champion'
    : completedLessons >= 6
      ? 'Pathfinder'
      : completedLessons >= 3
        ? 'Explorer'
        : 'Explorer'
  const todayLabel = new Intl.DateTimeFormat('en-MY', {
    weekday: 'long',
  }).format(new Date())

  const missionTitle = recommendedLesson?.title ?? 'Idea Utama'
  const activeForm = learner?.currentForm ?? 1
  const publicName = getLearnerPublicName(learner, user?.displayName)

  return (
    <section className="quest-home">
      <div className="quest-home-heading">
        <div>
          <h1>BM Reading Quest</h1>
          <p>
            {entitlement.label} · Form {activeForm} ·{' '}
            {isGuest ? 'Guest Learner' : publicName}
          </p>
        </div>
      </div>

      <article className="focus-card">
        <p className="focus-eyebrow">Today&apos;s Focus</p>
        <h2>🎯 {recommendedLesson ? missionTitle : 'Mixed + Vocabulary'}</h2>
        <p>
          Core mission: {recommendedLesson?.estimatedMinutes ?? 10} minutes.
          Optional booster if motivated.
        </p>

        {recommendedLesson ? (
          <Link className="focus-action" to={`/lesson/${recommendedLesson.id}`}>
            Start {recommendedLesson.estimatedMinutes}-min Mission
          </Link>
        ) : (
          <div className="focus-action disabled">Mission Coming Soon</div>
        )}

        <Link className="focus-action secondary" to="/student">
          🚗 Car Ride Mode
        </Link>
      </article>

      <div className="quest-stat-grid">
        <article className="quest-stat">
          <span>🔥 Streak</span>
          <strong>{completedLessons} lesson{completedLessons === 1 ? '' : 's'}</strong>
        </article>

        <article className="quest-stat">
          <span>⭐ Average</span>
          <strong>{averageScore}%</strong>
        </article>
      </div>

      <article className="quest-panel">
        <h2>Reading Rank</h2>
        <div className="rank-box">
          <strong>{readingRank}</strong>
          <span>{completedLessons} sessions completed</span>
        </div>
      </article>

      <article className="quest-panel">
        <h2>Weekly Goals</h2>
        <div className="goal-box">
          <div>
            <strong>{todayLabel}</strong>
            <span>{weeklyGoal} / 5 missions completed this week</span>
          </div>
          <div className="goal-meter" aria-label={`${weeklyGoal} of 5 weekly missions completed`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <span className={index < weeklyGoal ? 'active' : ''} key={index} />
            ))}
          </div>
        </div>
      </article>

      <div className="dashboard-grid quest-secondary-grid">
        <article className="dashboard-card">
          <span>Recommendation</span>
          <h2>{recommendation?.title ?? 'Continue Learning'}</h2>
          <p>
            {recommendedLesson
              ? recommendation?.description
              : `Form ${activeForm} lessons are being prepared.`}
          </p>
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
