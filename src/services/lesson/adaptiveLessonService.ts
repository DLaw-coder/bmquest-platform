import type { Lesson } from '../../domain'
import type { LessonQuestion } from '../../domain/lesson'
import type { LessonProgress } from '../../domain/progress'

export type PracticeMode = 'review' | 'challenge'

type ChallengeTemplate = {
  label: string
  focus: string
}

const CHALLENGE_LADDER: ChallengeTemplate[] = [
  {
    label: 'Vocabulary Builder',
    focus: 'Kosa kata dan maksud perkataan',
  },
  {
    label: 'Comprehension Check',
    focus: 'Pemahaman maklumat penting',
  },
  {
    label: 'Inference & Ulasan',
    focus: 'Inferens, ulasan dan bukti',
  },
  {
    label: 'KBAT Application',
    focus: 'Aplikasi kemahiran pada situasi baharu',
  },
  {
    label: 'Mastery Review',
    focus: 'Pengukuhan menyeluruh',
  },
]

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

export function getChallengeTemplate(variantLevel: number) {
  const challengeIndex = Math.max(0, variantLevel - 2) %
    CHALLENGE_LADDER.length

  return CHALLENGE_LADDER[challengeIndex]
}

export function createPracticeLesson(
  lesson: Lesson,
  mode: PracticeMode,
  variantLevel: number,
): Lesson {
  if (mode === 'review') {
    return lesson
  }

  const template = getChallengeTemplate(variantLevel)

  return {
    ...lesson,
    title: `${lesson.title} · ${template.label}`,
    learningObjective:
      `${lesson.learningObjective} Fokus cabaran: ${template.focus}.`,
    readingTip:
      `${lesson.readingTip} Untuk cabaran ini, jawab berdasarkan bukti dalam bahan.`,
    questions: createChallengeQuestions(lesson, variantLevel, template),
    summary: [
      ...lesson.summary,
      `Cabaran ${variantLevel}: ${template.focus}.`,
    ],
  }
}

function createChallengeQuestions(
  lesson: Lesson,
  variantLevel: number,
  template: ChallengeTemplate,
): LessonQuestion[] {
  switch (template.label) {
    case 'Vocabulary Builder':
      return createVocabularyQuestions(lesson, variantLevel)
    case 'Comprehension Check':
      return createComprehensionQuestions(lesson, variantLevel)
    case 'Inference & Ulasan':
      return createInferenceQuestions(lesson, variantLevel)
    case 'KBAT Application':
      return createKbatQuestions(lesson, variantLevel)
    default:
      return createMasteryQuestions(lesson, variantLevel)
  }
}

function createVocabularyQuestions(
  lesson: Lesson,
  variantLevel: number,
): LessonQuestion[] {
  const vocabularyIndex = (variantLevel - 1) % lesson.vocabulary.length
  const vocabulary = lesson.vocabulary[vocabularyIndex]
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
      prompt: `Ayat manakah yang menggunakan perkataan “${vocabulary.word}” dengan sesuai?`,
      options: [
        { id: 'a', text: vocabulary.example },
        {
          id: 'b',
          text: `Perkataan “${vocabulary.word}” tidak mempunyai maksud dalam petikan.`,
        },
        {
          id: 'c',
          text: `Murid tidak perlu memahami “${vocabulary.word}” semasa membaca.`,
        },
      ],
      correctOptionId: 'a',
      explanation:
        'Ayat contoh menunjukkan penggunaan perkataan tersebut dengan tepat.',
    },
    {
      id: `challenge-${variantLevel}-q3`,
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
  ]
}

function createComprehensionQuestions(
  lesson: Lesson,
  variantLevel: number,
): LessonQuestion[] {
  const originalQuestion = lesson.questions[(variantLevel - 1) % lesson.questions.length]
  const correctOption = originalQuestion.options.find(
    (option) => option.id === originalQuestion.correctOptionId,
  )
  const firstVocabulary = lesson.vocabulary[0]

  return [
    {
      id: `challenge-${variantLevel}-q1`,
      prompt: 'Maklumat manakah yang paling tepat berdasarkan bahan?',
      options: [
        {
          id: 'a',
          text: correctOption?.text ?? lesson.summary[0],
        },
        { id: 'b', text: 'Maklumat ini bercanggah dengan bahan.' },
        { id: 'c', text: 'Maklumat ini tidak dinyatakan dalam bahan.' },
      ],
      correctOptionId: 'a',
      explanation: originalQuestion.explanation,
    },
    {
      id: `challenge-${variantLevel}-q2`,
      prompt: 'Apakah tindakan membaca yang paling sesuai untuk mencari jawapan?',
      options: [
        { id: 'a', text: 'Rujuk semula ayat yang berkaitan dalam bahan.' },
        { id: 'b', text: 'Pilih jawapan paling panjang tanpa membaca.' },
        { id: 'c', text: 'Abaikan kata kunci dalam soalan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Jawapan pemahaman perlu disokong oleh maklumat dalam bahan.',
    },
    {
      id: `challenge-${variantLevel}-q3`,
      prompt: `Perkataan “${firstVocabulary.word}” membantu pembaca memahami bahagian mana?`,
      options: [
        { id: 'a', text: firstVocabulary.example },
        { id: 'b', text: 'Bahagian yang tiada kaitan dengan bahan.' },
        { id: 'c', text: 'Arahan untuk meninggalkan soalan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Kosa kata penting membantu pembaca memahami maklumat dalam bahan.',
    },
  ]
}

function createInferenceQuestions(
  lesson: Lesson,
  variantLevel: number,
): LessonQuestion[] {
  const summary = lesson.summary[(variantLevel - 1) % lesson.summary.length]

  return [
    {
      id: `challenge-${variantLevel}-q1`,
      prompt: 'Apakah kesimpulan paling munasabah berdasarkan bahan?',
      options: [
        { id: 'a', text: summary },
        { id: 'b', text: 'Bahan ini tidak mempunyai sebarang maklumat penting.' },
        { id: 'c', text: 'Pembaca boleh membuat kesimpulan tanpa membaca bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Kesimpulan perlu disokong oleh maklumat yang terdapat dalam bahan.',
    },
    {
      id: `challenge-${variantLevel}-q2`,
      prompt: 'Apakah bukti yang perlu dicari sebelum membuat ulasan?',
      options: [
        { id: 'a', text: 'Maklumat atau contoh yang terdapat dalam bahan.' },
        { id: 'b', text: 'Pendapat yang tidak berkaitan dengan bahan.' },
        { id: 'c', text: 'Jawapan daripada soalan lain sahaja.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Ulasan yang baik perlu berdasarkan bukti daripada bahan.',
    },
    {
      id: `challenge-${variantLevel}-q3`,
      prompt: 'Mengapakah inferens perlu dibuat secara berhati-hati?',
      options: [
        { id: 'a', text: 'Supaya kesimpulan tidak bercanggah dengan bahan.' },
        { id: 'b', text: 'Supaya pembaca tidak perlu memahami teks.' },
        { id: 'c', text: 'Supaya jawapan menjadi lebih panjang sahaja.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Inferens mesti munasabah dan selari dengan maklumat yang dibaca.',
    },
  ]
}

function createKbatQuestions(
  lesson: Lesson,
  variantLevel: number,
): LessonQuestion[] {
  return [
    {
      id: `challenge-${variantLevel}-q1`,
      prompt: `Bagaimanakah kemahiran “${lesson.skill}” boleh digunakan dalam situasi baharu?`,
      options: [
        { id: 'a', text: 'Gunakan bukti dalam bahan sebelum membuat jawapan.' },
        { id: 'b', text: 'Jawab berdasarkan tajuk sahaja.' },
        { id: 'c', text: 'Abaikan semua maklumat sokongan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Kemahiran membaca boleh dipindahkan kepada bahan baharu jika pembaca mencari bukti dahulu.',
    },
    {
      id: `challenge-${variantLevel}-q2`,
      prompt: 'Apakah strategi terbaik jika bahan lebih panjang atau mencabar?',
      options: [
        { id: 'a', text: 'Kenal pasti kata kunci, idea utama dan bukti sokongan.' },
        { id: 'b', text: 'Berhenti membaca selepas ayat pertama.' },
        { id: 'c', text: 'Pilih jawapan secara rawak.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Strategi membaca membantu pembaca mengurus bahan yang lebih mencabar.',
    },
    {
      id: `challenge-${variantLevel}-q3`,
      prompt: 'Apakah ciri jawapan KBAT yang baik?',
      options: [
        { id: 'a', text: 'Ada alasan yang rasional dan disokong maklumat bahan.' },
        { id: 'b', text: 'Panjang tetapi tiada kaitan dengan bahan.' },
        { id: 'c', text: 'Hanya mengulang pilihan jawapan tanpa sebab.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Jawapan KBAT perlu rasional dan mempunyai sokongan daripada bahan.',
    },
  ]
}

function createMasteryQuestions(
  lesson: Lesson,
  variantLevel: number,
): LessonQuestion[] {
  const summaryIndex = (variantLevel - 1) % lesson.summary.length
  const vocabularyIndex = (variantLevel - 1) % lesson.vocabulary.length
  const summary = lesson.summary[summaryIndex]
  const vocabulary = lesson.vocabulary[vocabularyIndex]

  return [
    {
      id: `challenge-${variantLevel}-q1`,
      prompt: `Apakah maksud perkataan “${vocabulary.word}”?`,
      options: [
        { id: 'a', text: vocabulary.meaning },
        { id: 'b', text: 'Maksud yang tidak berkaitan dengan bahan.' },
        { id: 'c', text: 'Nama tempat yang tidak disebut.' },
      ],
      correctOptionId: 'a',
      explanation:
        `Perkataan “${vocabulary.word}” bermaksud ${vocabulary.meaning}.`,
    },
    {
      id: `challenge-${variantLevel}-q2`,
      prompt: `Apakah fokus utama kemahiran “${lesson.skill}”?`,
      options: [
        { id: 'a', text: lesson.learningObjective },
        { id: 'b', text: 'Menjawab tanpa membaca bahan.' },
        { id: 'c', text: 'Menghafal semua perkataan tanpa memahami maksud.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Objektif pembelajaran menerangkan fokus kemahiran dalam latihan ini.',
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
