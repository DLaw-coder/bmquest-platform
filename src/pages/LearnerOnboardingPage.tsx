import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { createLearner } from '../repositories/learner/learnerRepository'
import type { FormLevel } from '../domain'
import { prepareNewLearnerNickname } from '../services/learner/nicknameService'
import { useLanguage } from '../context/LanguageContext'

type LearnerOnboardingPageProps = {
  onCreated: () => void
}

function LearnerOnboardingPage({ onCreated }: LearnerOnboardingPageProps) {
  const { user } = useAuth()
  const { language, t } = useLanguage()
  const [nickname, setNickname] = useState('')
  const [currentForm, setCurrentForm] = useState<FormLevel>(1)
  const [preferredLanguage, setPreferredLanguage] = useState<'en' | 'ms'>(language)
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!user) return

    const now = new Date().toISOString()

    setIsSaving(true)
    setSaveMessage('')

    try {
      const nicknameProfile = await prepareNewLearnerNickname(nickname, now)

      await createLearner({
        learnerId: crypto.randomUUID(),
        accountId: user.uid,
        displayName: nicknameProfile.nickname || user.displayName,
        ...nicknameProfile,
        currentForm,
        preferredLanguage,
        createdAt: now,
        updatedAt: now,
      })

      onCreated()
    } catch (error) {
      setSaveMessage(error instanceof Error
        ? error.message
        : 'Learner profile could not be created. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <section className="hero-card">
      <div className="brand-icon">🌱</div>

      <h1>{t('onboarding.title')}</h1>

      <p className="subtitle">
        {t('onboarding.subtitle')}
      </p>

      <form className="form-stack" onSubmit={handleSubmit}>
        <label>
          {t('onboarding.nickname')}
          <input
            maxLength={32}
            minLength={3}
            required
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
            placeholder="e.g. BM Hero"
          />
          <small>{t('onboarding.nicknameHelp')}</small>
        </label>

        <label>
          {t('onboarding.currentForm')}
          <select
            value={currentForm}
            onChange={(event) => setCurrentForm(Number(event.target.value) as FormLevel)}
          >
            <option value={1}>Form 1</option>
            <option value={2}>Form 2</option>
            <option value={3}>Form 3</option>
            <option value={4}>Form 4</option>
            <option value={5}>Form 5</option>
          </select>
        </label>

        <label>
          {t('onboarding.preferredLanguage')}
          <select
            value={preferredLanguage}
            onChange={(event) => setPreferredLanguage(event.target.value as 'en' | 'ms')}
          >
            <option value="en">{t('onboarding.englishInterface')}</option>
            <option value="ms">{t('onboarding.malayInterface')}</option>
          </select>
        </label>

        <button className="menu-button student" disabled={isSaving}>
          {isSaving ? t('onboarding.saving') : t('onboarding.create')}
        </button>
      </form>

      {saveMessage && <p className="settings-message">{saveMessage}</p>}

    </section>
  )
}

export default LearnerOnboardingPage
