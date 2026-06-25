import { appInfo } from '../config/appInfo'
import { useAuth } from '../hooks/useAuth'

function SettingsPage() {
  const { user, isGuest, signOut } = useAuth()

  return (
    <section className="dashboard">
      <div className="dashboard-hero">
        <div>
          <p className="eyebrow">Profile & Settings</p>
          <h1>Settings</h1>
          <p className="subtitle">Manage your BM Quest account and app preferences.</p>
        </div>
        <div className="dashboard-icon">⚙️</div>
      </div>

      <div className="dashboard-grid">
        <article className="dashboard-card">
          <span>Account</span>
          <h2>{user?.displayName ?? 'Guest Learner'}</h2>
          <p>{isGuest ? 'Guest mode' : user?.email}</p>
        </article>

        <article className="dashboard-card">
          <span>Learning Profile</span>
          <h2>Form 1</h2>
          <p>KSSM Bahasa Melayu</p>
        </article>

        <article className="dashboard-card">
          <span>Appearance</span>
          <h2>System</h2>
          <p>Theme controls coming soon.</p>
        </article>

        <article className="dashboard-card">
          <span>Language</span>
          <h2>Malay + English</h2>
          <p>Malay first, English as a learning aid.</p>
        </article>
      </div>

      <article className="dashboard-card">
        <span>About BM Quest</span>
        <h2>{appInfo.name}</h2>
        <p>{appInfo.version}</p>
        <p>{appInfo.copyright}</p>
        <p>Built with React, TypeScript and Firebase.</p>
      </article>

      <button className="lesson-submit" onClick={signOut}>
        Sign Out
      </button>

      <p className="footer-text">Sprint 10.0 · Settings & Profile</p>
    </section>
  )
}

export default SettingsPage
