import { useAuth } from '../hooks/useAuth'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'

function WelcomePage() {
  const { continueAsGuest, signInWithGoogle } = useAuth()
  const { t } = useLanguage()

  return (
    <section className="hero-card">
      <div className="brand-icon">📘</div>

      <h1>{t('welcome.title')}</h1>

      <p className="subtitle">
        {t('welcome.subtitle')}
      </p>

      <div className="menu-grid">
        <button className="menu-button student" onClick={signInWithGoogle}>
          🔐 {t('welcome.google')}
        </button>

        <button className="menu-button progress" onClick={continueAsGuest}>
          🌱 {t('welcome.guest')}
        </button>
      </div>

      <Link className="inline-link privacy-link" to="/privacy">
        {t('privacy.link')}
      </Link>
    </section>
  )
}

export default WelcomePage
