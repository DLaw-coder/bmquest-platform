import { useAppData } from '../context/AppStateContext'
import { useLanguage } from '../context/LanguageContext'

const plannedAchievements = [
  {
    code: 'first_lesson',
    title: 'First Lesson',
    description: 'Completed your first BM Quest lesson.',
    icon: '🏆',
  },
  {
    code: 'perfect_score',
    title: 'Perfect Score',
    description: 'Answered every question correctly.',
    icon: '💯',
  },
  {
    code: 'reading_explorer',
    title: 'Reading Explorer',
    description: 'Complete 3 reading lessons.',
    icon: '📚',
  },
  {
    code: 'five_day_streak',
    title: '5-Day Streak',
    description: 'Learn for 5 days in a row.',
    icon: '🔥',
  },
]

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
              <h2>{achievement.title}</h2>
              <p>{achievement.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default AchievementsPage
