import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const GAME_SECONDS = 180

type Star = {
  id: number
  icon: string
  left: number
  top: number
}

function ArcadeRewardPage() {
  const [searchParams] = useSearchParams()
  const rewardTier = searchParams.get('tier') ?? 'bronze'
  const rewardIcon = rewardTier === 'gold' ? '🌟' : '⭐'
  const rewardLabel = rewardTier === 'gold' ? 'Mastery Star' : 'BM Star'
  const [timeLeft, setTimeLeft] = useState(GAME_SECONDS)
  const [score, setScore] = useState(0)
  const [starIndex, setStarIndex] = useState(0)
  const isGameOver = timeLeft <= 0
  const star = useMemo<Star>(() => {
    const left = 10 + ((starIndex * 37) % 78)
    const top = 12 + ((starIndex * 53) % 62)

    return {
      id: starIndex,
      icon: starIndex % 5 === 0 ? '📘' : rewardIcon,
      left,
      top,
    }
  }, [rewardIcon, starIndex])

  useEffect(() => {
    if (isGameOver) {
      return
    }

    const timer = window.setInterval(() => {
      setTimeLeft((current) => Math.max(0, current - 1))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [isGameOver])

  function handleCatchStar() {
    if (isGameOver) {
      return
    }

    setScore((current) => current + (star.icon === '📘' ? 5 : 1))
    setStarIndex((current) => current + 1)
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = String(timeLeft % 60).padStart(2, '0')

  return (
    <section className="arcade-page">
      <div className="dashboard-hero">
        <div>
          <p className="eyebrow">Reward Arcade</p>
          <h1>{rewardLabel} Sprint</h1>
          <p className="subtitle">
            You earned a 3-minute arcade break. Catch the BM stars!
          </p>
        </div>
        <div className="dashboard-icon">{rewardIcon}</div>
      </div>

      <div className="dashboard-grid">
        <article className="dashboard-card">
          <span>Time Left</span>
          <h2>{minutes}:{seconds}</h2>
          <p>Reward play ends automatically after 3 minutes.</p>
        </article>

        <article className="dashboard-card">
          <span>Arcade Score</span>
          <h2>{score}</h2>
          <p>Blue books are worth 5 points.</p>
        </article>
      </div>

      <article className="arcade-board" aria-label="BM Quest reward arcade">
        {isGameOver ? (
          <div className="arcade-finished">
            <strong>⏱️ Time!</strong>
            <p>You caught {score} points. Great effort — back to learning?</p>
            <Link className="mission-button" to="/">
              Return Dashboard
            </Link>
          </div>
        ) : (
          <button
            className="arcade-star"
            onClick={handleCatchStar}
            style={{ left: `${star.left}%`, top: `${star.top}%` }}
            type="button"
          >
            {star.icon}
          </button>
        )}
      </article>
    </section>
  )
}

export default ArcadeRewardPage
