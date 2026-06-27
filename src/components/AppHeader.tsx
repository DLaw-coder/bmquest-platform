import { useAuth } from '../hooks/useAuth'
import { useAppData } from '../context/AppStateContext'
import { appInfo } from '../config/appInfo'
import { useLanguage } from '../context/LanguageContext'
import { getLearnerPublicName } from '../domain'

type AppHeaderProps = {
  theme: 'light' | 'dark'
  onThemeToggle: () => void
}

function AppHeader({ theme, onThemeToggle }: AppHeaderProps) {
  const { user, isGuest, signOut } = useAuth()
  const { learner } = useAppData()
  const { language, toggleLanguage, t } = useLanguage()
  const publicName = getLearnerPublicName(learner, user?.displayName)
  const headerName = isGuest ? t('home.guestLearner') : publicName

  return (
    <header className="app-header">
      <div className="app-brand">
        <div className="app-logo">📘</div>
        <div>
          <strong>{appInfo.name}</strong>
          <span>{user ? headerName : t('app.platform')}</span>
        </div>
      </div>

      <div className="app-header-actions">
        <button
          aria-label={language === 'en' ? t('language.switchToMalay') : t('language.switchToEnglish')}
          className="language-toggle"
          onClick={toggleLanguage}
          type="button"
        >
          {language === 'en' ? 'BM' : 'EN'}
        </button>

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
            {t('auth.signOut')}
          </button>
        ) : (
          <div className="app-header-badge">{appInfo.version}</div>
        )}
      </div>
    </header>
  )
}

export default AppHeader
