import type { Lesson } from '../../domain'

export type SessionAnswer = {
  questionId: string
  selectedOptionId: string
}

export type SessionResult = {
  lessonId: string
  totalQuestions: number
  correctAnswers: number
  scorePercent: number
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
    completedAt: new Date().toISOString(),
  }
}
