import type { Lesson } from '../../domain'
import type { LessonQuestion } from '../../domain/lesson'
import type { LessonProgress } from '../../domain/progress'

export type PracticeMode = 'review' | 'challenge'

export function getLessonAttempts(
  progress: LessonProgress[],
  lessonId: string,
) {
  return progress
    .filter((item) => item.lessonId === lessonId)
    .sort((first, second) => first.completedAt.localeCompare(second.completedAt))
}

export function getNextAttemptNumber(attempts: LessonProgress[]) {
  return attempts.length + 1
}

export function getNextVariantLevel(attempts: LessonProgress[]) {
  const highestVariantLevel = Math.max(
    0,
    ...attempts.map((item) => item.variantLevel ?? 1),
  )

  return highestVariantLevel + 1
}

export function createPracticeLesson(
  lesson: Lesson,
  mode: PracticeMode,
  variantLevel: number,
): Lesson {
  if (mode === 'review') {
    return lesson
  }

  return {
    ...lesson,
    title: `${lesson.title} · Cabaran ${variantLevel}`,
    learningObjective:
      `${lesson.learningObjective} Cabaran ini menggunakan soalan baharu untuk mengukuhkan kemahiran yang sama.`,
    readingTip:
      `${lesson.readingTip} Untuk cabaran ini, baca semula bahan dan fokus pada bukti dalam teks.`,
    questions: createChallengeQuestions(lesson, variantLevel),
    summary: [
      ...lesson.summary,
      `Cabaran ${variantLevel}: gunakan kemahiran yang sama pada soalan latihan baharu.`,
    ],
  }
}

function createChallengeQuestions(
  lesson: Lesson,
  variantLevel: number,
): LessonQuestion[] {
  const vocabularyIndex = (variantLevel - 1) % lesson.vocabulary.length
  const summaryIndex = (variantLevel - 1) % lesson.summary.length
  const vocabulary = lesson.vocabulary[vocabularyIndex]
  const summary = lesson.summary[summaryIndex]
  const otherVocabulary = lesson.vocabulary.filter(
    (item) => item.word !== vocabulary.word,
  )

  return [
    {
      id: `challenge-${variantLevel}-q1`,
      prompt: `Apakah maksud perkataan “${vocabulary.word}” dalam bahan ini?`,
      options: [
        { id: 'a', text: vocabulary.meaning },
        {
          id: 'b',
          text: otherVocabulary[0]?.meaning ?? 'maklumat yang tidak berkaitan',
        },
        {
          id: 'c',
          text: otherVocabulary[1]?.meaning ?? 'peristiwa yang berlaku pada masa depan',
        },
      ],
      correctOptionId: 'a',
      explanation:
        `Perkataan “${vocabulary.word}” bermaksud ${vocabulary.meaning}.`,
    },
    {
      id: `challenge-${variantLevel}-q2`,
      prompt: `Kemahiran manakah yang paling sesuai digunakan dalam latihan ini?`,
      options: [
        { id: 'a', text: lesson.skill },
        { id: 'b', text: 'Menyalin semua ayat tanpa memahami maksud.' },
        { id: 'c', text: 'Meneka jawapan tanpa merujuk bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        `Latihan ini masih menguji kemahiran “${lesson.skill}”.`,
    },
    {
      id: `challenge-${variantLevel}-q3`,
      prompt: 'Pilih rumusan yang paling sesuai berdasarkan latihan ini.',
      options: [
        { id: 'a', text: summary },
        { id: 'b', text: 'Semua maklumat dalam bahan boleh diabaikan.' },
        { id: 'c', text: 'Jawapan tidak perlu berdasarkan bukti dalam bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Rumusan yang tepat perlu sepadan dengan maklumat dan kemahiran dalam bahan.',
    },
  ]
}
