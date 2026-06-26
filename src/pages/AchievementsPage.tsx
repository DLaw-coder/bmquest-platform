import { useAppData } from '../context/AppStateContext'
import { useLanguage } from '../context/LanguageContext'

const plannedAchievements = [
  {
    code: 'first_lesson',
    titleKey: 'badges.firstLessonTitle',
    descriptionKey: 'badges.firstLessonDescription',
    icon: '🏆',
  },
  {
    code: 'perfect_score',
    titleKey: 'badges.perfectScoreTitle',
    descriptionKey: 'badges.perfectScoreDescription',
    icon: '💯',
  },
  {
    code: 'reading_explorer',
    titleKey: 'badges.readingExplorerTitle',
    descriptionKey: 'badges.readingExplorerDescription',
    icon: '📚',
  },
  {
    code: 'five_day_streak',
    titleKey: 'badges.fiveDayStreakTitle',
    descriptionKey: 'badges.fiveDayStreakDescription',
    icon: '🔥',
  },
] as const

function AchievementsPage() {
  const { achievements } = useAppData()
  const { t } = useLanguage()
  const unlockedCodes = new Set(achievements.map((achievement) => achievement.code))

  return (
    <section className="dashboard">
      <div className="dashboard-hero">
        <div>
          <p className="eyebrow">{t('badges.eyebrow')}</p>
          <h1>{t('badges.title')}</h1>
          <p className="subtitle">{t('badges.subtitle')}</p>
        </div>
        <div className="dashboard-icon">🏆</div>
      </div>

      <div className="dashboard-grid">
        {plannedAchievements.map((achievement) => {
          const unlocked = unlockedCodes.has(achievement.code)

          return (
            <article
              className={`dashboard-card achievement-card ${unlocked ? 'achievement-unlocked' : 'achievement-locked'}`}
              key={achievement.code}
            >
              <div className="achievement-icon">{unlocked ? achievement.icon : '🔒'}</div>
              <span>{unlocked ? t('badges.unlocked') : t('badges.locked')}</span>
              <h2>{t(achievement.titleKey)}</h2>
              <p>{t(achievement.descriptionKey)}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default AchievementsPage
