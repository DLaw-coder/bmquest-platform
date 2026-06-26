import { useAppData } from '../context/AppStateContext'
import { getLessonMasterySummaries } from '../services/progress/progressService'

function ProgressPage() {
  const { lessons, progress, achievements } = useAppData()
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
          <span>Mastered</span>
          <h2>{masteredLessons}</h2>
          <p>Lessons mastered through challenge practice.</p>
        </article>

        <article className="dashboard-card">
          <span>Achievements</span>
          <h2>{achievements.length}</h2>
          <p>Unlocked learning badges.</p>
          <a className="inline-link" href="/achievements">View Gallery →</a>
        </article>
      </div>

      <article className="dashboard-card">
        <span>Lesson Mastery</span>
        <div className="lesson-list">
          {masterySummaries.length === 0 ? (
            <p>No lessons available for this form yet.</p>
          ) : (
            masterySummaries.map((item) => (
              <div className="lesson-row" key={item.lesson.id}>
                <div>
                  <strong>{item.lesson.title}</strong>
                  <small>
                    {item.attemptCount} attempt{item.attemptCount === 1 ? '' : 's'}
                    {' · '}
                    Best {item.bestScore}%
                    {' · '}
                    Latest {item.latestScore}%
                  </small>
                </div>
                <span>{item.status}</span>
              </div>
            ))
          )}
        </div>
      </article>

      <article className="dashboard-card">
        <span>Recent Activity</span>
        <div className="lesson-list">
          {recentActivity.length === 0 ? (
            <p>No lesson attempts for this form yet.</p>
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
        <span>Best Score</span>
        <h2>{bestScore}%</h2>
        <p>Your highest attempt score for this form.</p>
      </article>

    </section>
  )
}

export default ProgressPage
