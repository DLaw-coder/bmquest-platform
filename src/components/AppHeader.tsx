import { useAuth } from '../hooks/useAuth'
import { useAppData } from '../context/AppStateContext'
import { getLearnerPublicName } from '../domain'

function AppHeader() {
  const { user, signOut } = useAuth()
  const { learner } = useAppData()
  const publicName = getLearnerPublicName(learner, user?.displayName)

  return (
    <header className="app-header">
      <div className="app-brand">
        <div className="app-logo">📘</div>
        <div>
          <strong>BM Quest</strong>
          <span>{user ? publicName : 'Platform'}</span>
        </div>
      </div>

      {user ? (
        <button className="app-header-badge" onClick={signOut}>
          Sign Out
        </button>
      ) : (
        <div className="app-header-badge">Alpha</div>
      )}
    </header>
  )
}

export default AppHeader
