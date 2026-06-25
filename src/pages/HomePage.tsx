import { useAuth } from '../hooks/useAuth'

function HomePage() {
  const { user, isGuest } = useAuth()

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
          <h2>Reading Practice</h2>
          <p>Form 1 · Kemahiran Membaca</p>
          <button>Start Mission</button>
        </article>

        <article className="dashboard-card">
          <span>Current Level</span>
          <h2>Form 1</h2>
          <p>KSSM Bahasa Melayu</p>
        </article>

        <article className="dashboard-card">
          <span>Reading Progress</span>
          <h2>0%</h2>
          <p>Progress tracking begins soon.</p>
        </article>

        <article className="dashboard-card">
          <span>Learning Streak</span>
          <h2>0 days</h2>
          <p>Complete missions to build consistency.</p>
        </article>
      </div>

      <p className="footer-text">Sprint 3.0 · Student Dashboard</p>
    </section>
  )
}

export default HomePage
