import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { createLearner } from '../repositories/learner/learnerRepository'
import type { FormLevel } from '../domain'
import { prepareNewLearnerNickname } from '../services/learner/nicknameService'

type LearnerOnboardingPageProps = {
  onCreated: () => void
}

function LearnerOnboardingPage({ onCreated }: LearnerOnboardingPageProps) {
  const { user } = useAuth()
  const [nickname, setNickname] = useState('')
  const [currentForm, setCurrentForm] = useState<FormLevel>(1)
  const [preferredLanguage, setPreferredLanguage] = useState<'en' | 'ms'>('en')
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

      <h1>Create Learner</h1>

      <p className="subtitle">
        Set up the learner profile BM Quest will follow from Form 1 to Form 5.
      </p>

      <form className="form-stack" onSubmit={handleSubmit}>
        <label>
          BM Quest nickname
          <input
            maxLength={32}
            minLength={3}
            required
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
            placeholder="e.g. BM Hero"
          />
          <small>Use 3–32 characters. Nicknames must be unique and classroom-safe.</small>
        </label>

        <label>
          Current Form
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
          Preferred language
          <select
            value={preferredLanguage}
            onChange={(event) => setPreferredLanguage(event.target.value as 'en' | 'ms')}
          >
            <option value="en">English interface</option>
            <option value="ms">Bahasa Melayu interface</option>
          </select>
        </label>

        <button className="menu-button student" disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Create Learner'}
        </button>
      </form>

      {saveMessage && <p className="settings-message">{saveMessage}</p>}

      <p className="footer-text">Sprint 2.3 · Learner Onboarding</p>
    </section>
  )
}

export default LearnerOnboardingPage
