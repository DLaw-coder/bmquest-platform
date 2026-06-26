import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function StudentPage() {
  const { t } = useLanguage()

  return (
    <section className="hero-card">
      <div className="brand-icon">📖</div>
      <h1>{t('student.title')}</h1>
      <p className="subtitle">
        {t('student.subtitle')}
      </p>

      <Link className="menu-button student" to="/curriculum">
        📚 {t('student.browseCurriculum')}
      </Link>
    </section>
  )
}

export default StudentPage
