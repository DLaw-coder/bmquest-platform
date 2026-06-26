import { useEffect, useState } from 'react'
import { appInfo } from '../config/appInfo'
import { getLearnerPublicName } from '../domain'
import { useAppData } from '../context/AppStateContext'
import { useAuth } from '../hooks/useAuth'
import { updateLearnerProfile } from '../repositories/learner/learnerRepository'

function SettingsPage() {
  const { user, isGuest, signOut } = useAuth()
  const { learner, refreshAppData } = useAppData()
  const [nickname, setNickname] = useState('')
  const [saveMessage, setSaveMessage] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const publicName = getLearnerPublicName(learner, user?.displayName)

  useEffect(() => {
    setNickname(learner?.nickname ?? '')
  }, [learner?.nickname])

  async function handleNicknameSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!learner) {
      setSaveMessage('Create a learner profile before setting a nickname.')
      return
    }

    setIsSaving(true)
    setSaveMessage('')

    try {
      await updateLearnerProfile(learner.learnerId, {
        nickname: nickname.trim(),
        updatedAt: new Date().toISOString(),
      })

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
          <p className="eyebrow">Profile & Settings</p>
          <h1>Settings</h1>
          <p className="subtitle">Manage your BM Quest account and app preferences.</p>
        </div>
        <div className="dashboard-icon">⚙️</div>
      </div>

      <div className="dashboard-grid">
        <article className="dashboard-card">
          <span>BM Quest Name</span>
          <h2>{isGuest ? 'Guest Learner' : publicName}</h2>
          <p>{isGuest ? 'Guest mode' : 'Google sign-in active.'}</p>
        </article>

        <article className="dashboard-card">
          <span>Learning Profile</span>
          <h2>Form {learner?.currentForm ?? 1}</h2>
          <p>KSSM Bahasa Melayu</p>
        </article>

        <article className="dashboard-card">
          <span>Appearance</span>
          <h2>System</h2>
          <p>Theme controls coming soon.</p>
        </article>

        <article className="dashboard-card">
          <span>Language</span>
          <h2>Malay + English</h2>
          <p>Malay first, English as a learning aid.</p>
        </article>
      </div>

      {!isGuest && (
        <article className="dashboard-card">
          <span>Student Nickname</span>
          <h2>{publicName}</h2>
          <p>
            This is the name shown in BM Quest and on arcade high scores instead
            of your Google account name.
          </p>

          <form className="form-stack settings-form" onSubmit={handleNicknameSubmit}>
            <label>
              Nickname
              <input
                maxLength={32}
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
                placeholder="e.g. BM Hero"
              />
            </label>

            <button className="lesson-submit" disabled={isSaving}>
              {isSaving ? 'Saving...' : 'Save Nickname'}
            </button>
          </form>

          {saveMessage && <p className="settings-message">{saveMessage}</p>}
        </article>
      )}

      <article className="dashboard-card">
        <span>About BM Quest</span>
        <h2>{appInfo.name}</h2>
        <p>{appInfo.version}</p>
        <p>{appInfo.copyright}</p>
        <p>Built with React, TypeScript and Firebase.</p>
      </article>

      <button className="lesson-submit" onClick={signOut}>
        Sign Out
      </button>

      <p className="footer-text">Sprint · Student Nicknames</p>
    </section>
  )
}

export default SettingsPage
