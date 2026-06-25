import { appInfo } from '../config/appInfo'
import { useAppData } from '../context/AppStateContext'
import { lessons } from '../data/lessons'
import { useAuth } from '../hooks/useAuth'

function DeveloperPage() {
  const { user, isGuest } = useAuth()
  const { learner, progress, achievements } = useAppData()
  const lessonCount = isGuest ? 0 : lessons.length
  const progressCount = isGuest ? 0 : progress.length
  const achievementCount = isGuest ? 0 : achievements.length

  return (
    <section className="hero-card">
      <div className="brand-icon">🛠️</div>

      <h1>Developer</h1>

      <p className="subtitle">
        Internal diagnostics for BM Quest development.
      </p>

      <div className="version-card">
        <span>Version</span>
        <strong>{appInfo.version}</strong>
      </div>

      <div className="version-card">
        <span>Google Account</span>
        <strong>{user?.displayName ?? '-'}</strong>
      </div>

      <div className="version-card">
        <span>Learner</span>
        <strong>{learner?.displayName ?? '-'}</strong>
      </div>

      <div className="version-card">
        <span>Lessons</span>
        <strong>{lessonCount}</strong>
      </div>

      <div className="version-card">
        <span>Progress Records</span>
        <strong>{progressCount}</strong>
      </div>

      <div className="version-card">
        <span>Achievements</span>
        <strong>{achievementCount}</strong>
      </div>

      <div className="version-card">
        <span>Firebase</span>
        <strong>Connected</strong>
      </div>

      <p className="footer-text">
        Developer Mode • Future tools coming soon
      </p>
    </section>
  )
}

export default DeveloperPage
