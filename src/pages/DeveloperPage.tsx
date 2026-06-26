import { appInfo } from '../config/appInfo'
import { useAppData } from '../context/AppStateContext'
import { getLearnerPublicName } from '../domain'
import { useAuth } from '../hooks/useAuth'
import { getCurriculumReferenceDiagnostics } from '../services/curriculum/curriculumReferenceService'
import { getRecommendedLesson } from '../services/progress/progressService'

function DeveloperPage() {
  const { user, isGuest } = useAuth()
  const { entitlement, learner, lessons, progress, achievements } = useAppData()
  const lessonCount = isGuest ? 0 : lessons.length
  const progressCount = isGuest ? 0 : progress.length
  const achievementCount = isGuest ? 0 : achievements.length
  const referenceDiagnostics = getCurriculumReferenceDiagnostics(lessons)
  const lessonIds = new Set(lessons.map((lesson) => lesson.id))
  const formProgress = progress.filter((item) => lessonIds.has(item.lessonId))
  const recommendation = getRecommendedLesson(lessons, formProgress)
  const publicName = getLearnerPublicName(learner, user?.displayName)

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
        <strong>{learner ? publicName : '-'}</strong>
      </div>

      <div className="version-card">
        <span>Nickname</span>
        <strong>{learner?.nickname || '-'}</strong>
      </div>

      <div className="version-card">
        <span>Plan</span>
        <strong>{entitlement.label}</strong>
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
        <span>Recommendation</span>
        <strong>
          {recommendation
            ? `${recommendation.reason}: ${recommendation.lesson.id}`
            : '-'}
        </strong>
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
        <span>Verified Standards</span>
        <strong>{referenceDiagnostics.verifiedStandardCount}</strong>
      </div>

      <div className="version-card">
        <span>Textbook References</span>
        <strong>{referenceDiagnostics.textbookReferenceCount}</strong>
      </div>

      <div className="version-card">
        <span>Lessons Per Form</span>
        <strong>
          {referenceDiagnostics.lessonsPerForm
            .map((item) => `F${item.form}:${item.count}`)
            .join(' · ')}
        </strong>
      </div>

      <div className="version-card">
        <span>Standard Coverage</span>
        <strong>
          {referenceDiagnostics.lessonsPerStandard
            .map((item) => `${item.standardId}:${item.count}`)
            .join(' · ')}
        </strong>
      </div>

      <div className="version-card">
        <span>Missing Reference Links</span>
        <strong>{referenceDiagnostics.missingLinkCount}</strong>
      </div>

      <div className="version-card">
        <span>Duplicate Lesson IDs</span>
        <strong>{referenceDiagnostics.duplicateLessonIdCount}</strong>
      </div>

      <div className="version-card">
        <span>Duplicate Lesson Sort Orders</span>
        <strong>{referenceDiagnostics.duplicateLessonSortOrderCount}</strong>
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
        <span>Lessons Without Standards</span>
        <strong>{referenceDiagnostics.lessonsWithoutCurriculumStandards}</strong>
      </div>

      <div className="version-card">
        <span>Lessons Without Textbook Links</span>
        <strong>{referenceDiagnostics.lessonsWithoutTextbookReferences}</strong>
      </div>

      <div className="version-card">
        <span>Lessons Without Sort Order</span>
        <strong>{referenceDiagnostics.lessonsWithoutSortOrder}</strong>
      </div>

      <div className="version-card">
        <span>Lessons Without Questions</span>
        <strong>{referenceDiagnostics.lessonsWithoutQuestions}</strong>
      </div>

      <div className="version-card">
        <span>Weak Vocabulary Coverage</span>
        <strong>{referenceDiagnostics.lessonsWithWeakVocabulary}</strong>
      </div>

      <div className="version-card">
        <span>Repeated Question Patterns</span>
        <strong>{referenceDiagnostics.lessonsWithRepeatedQuestionCount}</strong>
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
