import type { Lesson } from '../../domain'
import type { ScoreReward } from '../../services/rewards/rewardService'
import { getScoreReward } from '../../services/rewards/rewardService'

export type SessionAnswer = {
  questionId: string
  selectedOptionId: string
}

export type SessionResult = {
  lessonId: string
  totalQuestions: number
  correctAnswers: number
  scorePercent: number
  reward: ScoreReward
  arcadeEligible?: boolean
  arcadePracticeSecondsRemaining?: number
  completedAt: string
}

export function calculateSessionResult(
  lesson: Lesson,
  answers: Record<string, string>,
): SessionResult {
  const correctAnswers = lesson.questions.filter(
    (question) => answers[question.id] === question.correctOptionId,
  ).length

  return {
    lessonId: lesson.id,
    totalQuestions: lesson.questions.length,
    correctAnswers,
    scorePercent: Math.round((correctAnswers / lesson.questions.length) * 100),
    reward: getScoreReward(
      Math.round((correctAnswers / lesson.questions.length) * 100),
    ),
    completedAt: new Date().toISOString(),
  }
}
