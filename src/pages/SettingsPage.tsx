import { useState } from 'react'
import { appInfo } from '../config/appInfo'
import { getLearnerPublicName } from '../domain'
import { useAppData } from '../context/AppStateContext'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../hooks/useAuth'
import { updateLearnerProfile } from '../repositories/learner/learnerRepository'
import { prepareLearnerNicknameUpdate } from '../services/learner/nicknameService'
import { Link } from 'react-router-dom'

function SettingsPage() {
  const { user, isGuest, signOut } = useAuth()
  const { entitlement, learner, refreshAppData } = useAppData()
  const { t } = useLanguage()
  const [saveMessage, setSaveMessage] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const publicName = getLearnerPublicName(learner, user?.displayName)
  const planLabel = entitlement.isPremium
    ? t('settings.premiumPlan')
    : t('settings.freePlan')

  async function handleNicknameSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!learner) {
      setSaveMessage('Create a learner profile before setting a nickname.')
      return
    }

    setIsSaving(true)
    setSaveMessage('')

    try {
      const now = new Date().toISOString()
      const formData = new FormData(event.currentTarget)
      const nextNickname = String(formData.get('nickname') ?? '')
      const nicknameUpdates = await prepareLearnerNicknameUpdate(learner, nextNickname, now)

      await updateLearnerProfile(learner.learnerId, nicknameUpdates)

      refreshAppData()
      setSaveMessage('Nickname saved.')
    } catch {
      setSaveMessage('Nickname could not be saved. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <section className="dashboard">
      <div className="dashboard-hero">
        <div>
          <p className="eyebrow">{t('settings.eyebrow')}</p>
          <h1>{t('settings.title')}</h1>
          <p className="subtitle">{t('settings.subtitle')}</p>
        </div>
        <div className="dashboard-icon">⚙️</div>
      </div>

      <div className="dashboard-grid">
        <article className="dashboard-card">
          <span>{t('settings.bmQuestName')}</span>
          <h2>{isGuest ? t('home.guestLearner') : publicName}</h2>
          <p>{isGuest ? t('settings.guestMode') : t('settings.googleActive')}</p>
        </article>

        <article className="dashboard-card">
          <span>{t('settings.learningProfile')}</span>
          <h2>{t('common.form')} {learner?.currentForm ?? 1}</h2>
          <p>KSSM Bahasa Melayu</p>
        </article>

        <article className="dashboard-card">
          <span>{t('settings.plan')}</span>
          <h2>{planLabel}</h2>
          <p>
            {entitlement.isPremium
              ? t('settings.premiumActive')
              : t('settings.premiumLater')}
          </p>
        </article>

        <article className="dashboard-card">
          <span>{t('settings.appearance')}</span>
          <h2>{t('settings.system')}</h2>
          <p>{t('settings.themeAvailable')}</p>
        </article>

        <article className="dashboard-card">
          <span>{t('settings.language')}</span>
          <h2>{t('settings.languageValue')}</h2>
          <p>{t('settings.languageSubtitle')}</p>
        </article>
      </div>

      {!isGuest && (
        <article className="dashboard-card">
          <span>{t('settings.studentNickname')}</span>
          <h2>{publicName}</h2>
          <p>{t('settings.nicknameSubtitle')}</p>

          <form className="form-stack settings-form" onSubmit={handleNicknameSubmit}>
            <label>
              {t('settings.nickname')}
              <input
                key={learner?.learnerId}
                name="nickname"
                defaultValue={learner?.nickname ?? ''}
                maxLength={32}
                minLength={3}
                required
                placeholder="e.g. BM Hero"
              />
              <small>
                {t('settings.nicknameHelp')}
              </small>
            </label>

            <button className="lesson-submit" disabled={isSaving}>
              {isSaving ? t('lesson.saving') : t('settings.saveNickname')}
            </button>
          </form>

          {saveMessage && <p className="settings-message">{saveMessage}</p>}
        </article>
      )}

      <article className="dashboard-card">
        <span>{t('settings.about')}</span>
        <h2>{appInfo.name}</h2>
        <p>{appInfo.version}</p>
        <p>{appInfo.copyright}</p>
        <p>{t('settings.builtWith')}</p>
        <Link className="inline-link" to="/privacy">
          {t('privacy.link')}
        </Link>
      </article>

      <button className="lesson-submit" onClick={signOut}>
        {t('auth.signOut')}
      </button>
    </section>
  )
}

export default SettingsPage
