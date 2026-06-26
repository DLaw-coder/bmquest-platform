import { useAppData } from '../context/AppStateContext'
import { useLanguage } from '../context/LanguageContext'
import { getLessonMasterySummaries } from '../services/progress/progressService'

function ProgressPage() {
  const { lessons, progress, achievements } = useAppData()
  const { t } = useLanguage()
  const lessonIds = new Set(lessons.map((lesson) => lesson.id))
  const formProgress = progress.filter((item) => lessonIds.has(item.lessonId))
  const masterySummaries = getLessonMasterySummaries(lessons, formProgress)
  const completedLessons = new Set(
    formProgress.map((item) => item.lessonId),
  ).size
  const masteredLessons = masterySummaries.filter(
    (item) => item.status === 'Mastered',
  ).length
  const scores = formProgress.map((item) => item.scorePercent)
  const bestScore = scores.length > 0 ? Math.max(...scores) : 0
  const averageScore =
    scores.length > 0
      ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length)
      : 0
  const recentActivity = [...formProgress]
    .sort((a, b) => b.completedAt.localeCompare(a.completedAt))
    .slice(0, 5)
  const progressPercent = lessons.length > 0
    ? Math.round((completedLessons / lessons.length) * 100)
    : 0

  function getLessonTitle(lessonId: string) {
    return lessons.find((lesson) => lesson.id === lessonId)?.title ?? lessonId
  }

  return (
    <section className="dashboard">
      <div className="dashboard-hero">
        <div>
          <p className="eyebrow">{t('progress.eyebrow')}</p>
          <h1>{t('progress.title')}</h1>
          <p className="subtitle">{t('progress.subtitle')}</p>
        </div>
        <div className="dashboard-icon">📈</div>
      </div>

      <div className="dashboard-grid">
        <article className="dashboard-card primary-card">
          <span>{t('progress.overall')}</span>
          <h2>{progressPercent}%</h2>
          <p>{completedLessons} / {lessons.length} {t('progress.completed')}</p>
        </article>

        <article className="dashboard-card">
          <span>{t('progress.averageScore')}</span>
          <h2>{averageScore}%</h2>
          <p>{t('progress.acrossAttempts')}</p>
        </article>

        <article className="dashboard-card">
          <span>{t('progress.mastered')}</span>
          <h2>{masteredLessons}</h2>
          <p>{t('progress.masteredSubtitle')}</p>
        </article>

        <article className="dashboard-card">
          <span>{t('home.achievements')}</span>
          <h2>{achievements.length}</h2>
          <p>{t('progress.unlockedBadges')}</p>
          <a className="inline-link" href="/achievements">{t('progress.viewGallery')} →</a>
        </article>
      </div>

      <article className="dashboard-card">
        <span>{t('progress.lessonMastery')}</span>
        <div className="lesson-list">
          {masterySummaries.length === 0 ? (
            <p>{t('progress.noLessons')}</p>
          ) : (
            masterySummaries.map((item) => (
              <div className="lesson-row" key={item.lesson.id}>
                <div>
                  <strong>{item.lesson.title}</strong>
                  <small>
                    {item.attemptCount} {item.attemptCount === 1 ? t('progress.attempt') : t('progress.attempts')}
                    {' · '}
                    {t('progress.best')} {item.bestScore}%
                    {' · '}
                    {t('progress.latest')} {item.latestScore}%
                  </small>
                </div>
                <span>{item.status}</span>
              </div>
            ))
          )}
        </div>
      </article>

      <article className="dashboard-card">
        <span>{t('progress.recentActivity')}</span>
        <div className="lesson-list">
          {recentActivity.length === 0 ? (
            <p>{t('progress.noAttempts')}</p>
          ) : (
            recentActivity.map((item) => (
              <div className="lesson-row" key={item.progressId ?? `${item.lessonId}-${item.completedAt}`}>
                <div>
                  <strong>{getLessonTitle(item.lessonId)}</strong>
                  <small>
                    {new Date(item.completedAt).toLocaleString()}
                    {item.rewardLabel
                      ? ` · ${item.rewardIcon} ${item.rewardLabel}`
                      : ''}
                  </small>
                </div>
                <span>{item.scorePercent}%</span>
              </div>
            ))
          )}
        </div>
      </article>

      <article className="dashboard-card">
        <span>{t('progress.bestScore')}</span>
        <h2>{bestScore}%</h2>
        <p>{t('progress.bestScoreSubtitle')}</p>
      </article>

    </section>
  )
}

export default ProgressPage
