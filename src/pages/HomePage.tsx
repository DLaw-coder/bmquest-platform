import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useAppData } from '../context/AppStateContext'
import { useLanguage } from '../context/LanguageContext'
import { getRecommendedLesson } from '../services/progress/progressService'
import { getLearnerPublicName } from '../domain'

function HomePage() {
  const { user, isGuest } = useAuth()
  const { entitlement, learner, lessons, progress, achievements } = useAppData()
  const { language, t } = useLanguage()
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
  const localizedTodayLabel = new Intl.DateTimeFormat(language === 'ms' ? 'ms-MY' : 'en-MY', {
    weekday: 'long',
  }).format(new Date())

  const missionTitle = recommendedLesson?.title ?? 'Idea Utama'
  const activeForm = learner?.currentForm ?? 1
  const publicName = getLearnerPublicName(learner, user?.displayName)

  return (
    <section className="quest-home">
      <div className="quest-home-heading">
        <div>
          <h1>{t('home.title')}</h1>
          <p>
            {entitlement.label} · Form {activeForm} ·{' '}
            {isGuest ? t('home.guestLearner') : publicName}
          </p>
        </div>
      </div>

      <article className="focus-card">
        <p className="focus-eyebrow">{t('home.todayFocus')}</p>
        <h2>🎯 {recommendedLesson ? missionTitle : t('home.defaultFocus')}</h2>
        <p>
          {t('home.coreMission')}: {recommendedLesson?.estimatedMinutes ?? 10} minutes.
          {' '}{t('home.optionalBooster')}
        </p>

        {recommendedLesson ? (
          <Link className="focus-action" to={`/lesson/${recommendedLesson.id}`}>
            {t('home.startMission')} {recommendedLesson.estimatedMinutes}-min Mission
          </Link>
        ) : (
          <div className="focus-action disabled">{t('home.missionComingSoon')}</div>
        )}

        <Link className="focus-action secondary" to="/student">
          🚗 {t('home.carRideMode')}
        </Link>
      </article>

      <div className="quest-stat-grid">
        <article className="quest-stat">
          <span>🔥 {t('home.streak')}</span>
          <strong>{completedLessons} {completedLessons === 1 ? t('home.lesson') : t('home.lessons')}</strong>
        </article>

        <article className="quest-stat">
          <span>⭐ {t('home.average')}</span>
          <strong>{averageScore}%</strong>
        </article>
      </div>

      <article className="quest-panel">
        <h2>{t('home.readingRank')}</h2>
        <div className="rank-box">
          <strong>{readingRank}</strong>
          <span>{completedLessons} {t('home.sessionsCompleted')}</span>
        </div>
      </article>

      <article className="quest-panel">
        <h2>{t('home.weeklyGoals')}</h2>
        <div className="goal-box">
          <div>
            <strong>{localizedTodayLabel}</strong>
            <span>{weeklyGoal} / 5 {t('home.weeklyMissionsCompleted')}</span>
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
          <span>{t('home.recommendation')}</span>
          <h2>{recommendation?.title ?? t('home.continueLearning')}</h2>
          <p>
            {recommendedLesson
              ? recommendation?.description
              : `Form ${activeForm} ${t('home.lessonsPreparing')}`}
          </p>
        </article>

        <article className="dashboard-card">
          <span>{t('home.currentLevel')}</span>
          <h2>Form {activeForm}</h2>
          <p>KSSM Bahasa Melayu</p>
        </article>

        <article className="dashboard-card">
          <span>{t('home.readingProgress')}</span>
          <h2>{readingProgress}%</h2>
          <p>{completedLessons} / {lessons.length} {t('progress.completed')}</p>
        </article>

        <article className="dashboard-card">
          <span>{t('home.achievements')}</span>
          <h2>{achievements.length}</h2>
          <p>{latestAchievementLabel}</p>
        </article>
      </div>
    </section>
  )
}

export default HomePage
