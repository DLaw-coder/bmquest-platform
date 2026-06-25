import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { getAchievementsForLearner } from '../repositories/achievements/achievementRepository'
import { getLearnersForAccount } from '../services/firestore/learnerRepository'
import type { Achievement } from '../domain/achievement'

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
  const { user, isGuest } = useAuth()
  const [unlockedAchievements, setUnlockedAchievements] = useState<Achievement[]>([])

  useEffect(() => {
    async function loadAchievements() {
      if (!user || isGuest) return

      const learners = await getLearnersForAccount(user.uid)
      const activeLearner = learners[0]
      if (!activeLearner) return

      const achievements = await getAchievementsForLearner(activeLearner.learnerId)
      setUnlockedAchievements(achievements)
    }

    loadAchievements()
  }, [user, isGuest])

  const unlockedCodes = new Set(unlockedAchievements.map((achievement) => achievement.code))

  return (
    <section className="dashboard">
      <div className="dashboard-hero">
        <div>
          <p className="eyebrow">Achievement Gallery</p>
          <h1>My Badges</h1>
          <p className="subtitle">Celebrate your BM Quest learning milestones.</p>
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
              <span>{unlocked ? 'Unlocked' : 'Locked'}</span>
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
