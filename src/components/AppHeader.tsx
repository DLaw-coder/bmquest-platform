import { useAuth } from '../hooks/useAuth'

function AppHeader() {
  const { user, signOut } = useAuth()

  return (
    <header className="app-header">
      <div className="app-brand">
        <div className="app-logo">📘</div>
        <div>
          <strong>BM Quest</strong>
          <span>{user ? user.displayName : 'Platform'}</span>
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
