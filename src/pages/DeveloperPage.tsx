import { useEffect, useState } from 'react'
import { appInfo } from '../config/appInfo'
import { useAuth } from '../hooks/useAuth'
import { getLearnersForAccount } from '../services/firestore/learnerRepository'
import { getDeveloperStats } from '../services/developer/developerService'

function DeveloperPage() {
  const { user, isGuest } = useAuth()

  const [learnerName, setLearnerName] = useState('-')
  const [stats, setStats] = useState({
    lessonCount: 0,
    progressCount: 0,
    achievementCount: 0,
  })

  useEffect(() => {
    async function load() {
      if (!user || isGuest) {
        return
      }

      const learners = await getLearnersForAccount(user.uid)

      if (learners.length > 0) {
        setLearnerName(learners[0].displayName)

        const developerStats = await getDeveloperStats(
          learners[0].learnerId,
        )

        setStats(developerStats)
      }
    }

    load()
  }, [user, isGuest])

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
        <strong>{learnerName}</strong>
      </div>

      <div className="version-card">
        <span>Lessons</span>
        <strong>{stats.lessonCount}</strong>
      </div>

      <div className="version-card">
        <span>Progress Records</span>
        <strong>{stats.progressCount}</strong>
      </div>

      <div className="version-card">
        <span>Achievements</span>
        <strong>{stats.achievementCount}</strong>
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
