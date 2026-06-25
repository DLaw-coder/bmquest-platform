import { appInfo } from '../config/appInfo'
import { useAppData } from '../context/AppStateContext'
import { lessons } from '../data/lessons'
import { useAuth } from '../hooks/useAuth'
import { getCurriculumReferenceDiagnostics } from '../services/curriculum/curriculumReferenceService'

function DeveloperPage() {
  const { user, isGuest } = useAuth()
  const { learner, progress, achievements } = useAppData()
  const lessonCount = isGuest ? 0 : lessons.length
  const progressCount = isGuest ? 0 : progress.length
  const achievementCount = isGuest ? 0 : achievements.length
  const referenceDiagnostics = getCurriculumReferenceDiagnostics()

  return (
    <section className="hero-card">
      <div className="brand-icon">🛠️</div>

      <h1>Developer</h1>

      <p className="subtitle">
        Internal diagnostics for BM Quest development.
      </p>

      <div className="version-card">
        <span>Version</span>
        <strong>{appInfo.version}</strong>
      </div>

      <div className="version-card">
        <span>Google Account</span>
        <strong>{user?.displayName ?? '-'}</strong>
      </div>

      <div className="version-card">
        <span>Learner</span>
        <strong>{learner?.displayName ?? '-'}</strong>
      </div>

      <div className="version-card">
        <span>Lessons</span>
        <strong>{lessonCount}</strong>
      </div>

      <div className="version-card">
        <span>Progress Records</span>
        <strong>{progressCount}</strong>
      </div>

      <div className="version-card">
        <span>Achievements</span>
        <strong>{achievementCount}</strong>
      </div>

      <div className="version-card">
        <span>Curriculum Standards</span>
        <strong>{referenceDiagnostics.standardCount}</strong>
      </div>

      <div className="version-card">
        <span>Textbook References</span>
        <strong>{referenceDiagnostics.textbookReferenceCount}</strong>
      </div>

      <div className="version-card">
        <span>Missing Reference Links</span>
        <strong>{referenceDiagnostics.missingLinkCount}</strong>
      </div>

      <div className="version-card">
        <span>Standard Metadata Mismatches</span>
        <strong>{referenceDiagnostics.standardMetadataMismatchCount}</strong>
      </div>

      <div className="version-card">
        <span>References Needing Review</span>
        <strong>{referenceDiagnostics.referencesNeedingReview}</strong>
      </div>

      <div className="version-card">
        <span>Lessons Without Textbook Links</span>
        <strong>{referenceDiagnostics.lessonsWithoutTextbookReferences}</strong>
      </div>

      <div className="version-card">
        <span>Firebase</span>
        <strong>Connected</strong>
      </div>

      <p className="footer-text">
        Developer Mode • Future tools coming soon
      </p>
    </section>
  )
}

export default DeveloperPage
