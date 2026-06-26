import { useAuth } from '../hooks/useAuth'
import { useAppData } from '../context/AppStateContext'
import { appInfo } from '../config/appInfo'
import { getLearnerPublicName } from '../domain'

type AppHeaderProps = {
  theme: 'light' | 'dark'
  onThemeToggle: () => void
}

function AppHeader({ theme, onThemeToggle }: AppHeaderProps) {
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

      <div className="app-header-actions">
        <button
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          className="theme-toggle"
          onClick={onThemeToggle}
          type="button"
        >
          <span>{theme === 'dark' ? '☀️' : '◐'}</span>
        </button>

        {user ? (
          <button className="app-header-badge" onClick={signOut}>
            Sign Out
          </button>
        ) : (
          <div className="app-header-badge">{appInfo.version}</div>
        )}
      </div>
    </header>
  )
}

export default AppHeader
