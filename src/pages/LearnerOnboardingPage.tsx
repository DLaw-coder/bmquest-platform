import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { createLearner } from '../repositories/learner/learnerRepository'
import type { FormLevel } from '../domain'

type LearnerOnboardingPageProps = {
  onCreated: () => void
}

function LearnerOnboardingPage({ onCreated }: LearnerOnboardingPageProps) {
  const { user } = useAuth()
  const [displayName, setDisplayName] = useState('')
  const [currentForm, setCurrentForm] = useState<FormLevel>(1)
  const [preferredLanguage, setPreferredLanguage] = useState<'en' | 'ms'>('en')
  const [isSaving, setIsSaving] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!user) return

    const now = new Date().toISOString()

    setIsSaving(true)

    await createLearner({
      learnerId: crypto.randomUUID(),
      accountId: user.uid,
      displayName: displayName.trim() || user.displayName,
      currentForm,
      preferredLanguage,
      createdAt: now,
      updatedAt: now,
    })

    setIsSaving(false)
    onCreated()
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
          Display name
          <input
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            placeholder="e.g. Daniel"
          />
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

      <p className="footer-text">Sprint 2.3 · Learner Onboarding</p>
    </section>
  )
}

export default LearnerOnboardingPage
