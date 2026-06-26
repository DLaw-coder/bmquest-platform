import type { Lesson } from '../../domain'

export const ideaUtama001: Lesson = {
  id: 'idea-utama-001',
  sortOrder: 1,
  title: 'Idea Utama',
  form: 1,
  strand: 'Membaca',
  skill: 'Mengenal pasti idea utama',
  learningObjective:
    'Murid dapat mengenal pasti idea utama dalam petikan pendek.',
  readingTip:
    'Semasa membaca, cari perkara utama yang dibincangkan dalam keseluruhan petikan, bukan hanya satu ayat.',
  estimatedMinutes: 10,
  curriculumMeta: {
    subject: 'Bahasa Melayu',
    curriculum: 'KSSM',
    form: 1,
    theme: 'Amalan Baik Dalam Kehidupan',
    unit: 'Kemahiran Membaca Foundation',
    learningArea: 'Membaca',
    contentStandard: {
      code: '2.3',
      description: 'Membaca untuk memproses maklumat daripada pelbagai bahan.',
    },
    learningStandard: {
      code: '2.3.1',
      description:
        'Membaca untuk menyaring dan mengenal pasti idea utama dan idea sampingan dengan betul dan tepat.',
    },
  },
  curriculumReferences: {
    standardIds: ['kssm-bm-f1-2.3.1'],
    textbookReferenceIds: ['kssm-bm-f1-2016-unit13-p75'],
  },
  passageTitle: 'Amalan Membaca',
  passage:
    'Membaca ialah amalan yang sangat bermanfaat kepada murid. Melalui membaca, murid dapat menambah ilmu pengetahuan, memperluas kosa kata dan memperbaik kemahiran berbahasa. Amalan ini juga membantu murid memahami pelbagai perkara yang berlaku di sekeliling mereka. Oleh itu, murid digalakkan membaca sekurang-kurangnya beberapa minit setiap hari.',
  vocabulary: [
    {
      word: 'bermanfaat',
      meaning: 'memberi faedah atau kebaikan',
      example: 'Membaca buku sangat bermanfaat kepada murid.',
    },
    {
      word: 'kosa kata',
      meaning: 'perbendaharaan kata',
      example: 'Murid dapat memperluas kosa kata melalui pembacaan.',
    },
    {
      word: 'digalakkan',
      meaning: 'dianjurkan atau disarankan',
      example: 'Murid digalakkan membaca setiap hari.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah idea utama petikan ini?',
      options: [
        { id: 'a', text: 'Murid perlu membaca buku cerita sahaja.' },
        { id: 'b', text: 'Membaca memberikan banyak manfaat kepada murid.' },
        { id: 'c', text: 'Murid perlu membaca sepanjang hari.' },
      ],
      correctOptionId: 'b',
      explanation: 'Seluruh petikan menerangkan manfaat membaca kepada murid.',
    },
    {
      id: 'q2',
      prompt: 'Apakah satu manfaat membaca yang disebut dalam petikan?',
      options: [
        { id: 'a', text: 'Menambah ilmu pengetahuan.' },
        { id: 'b', text: 'Mengurangkan kerja sekolah.' },
        { id: 'c', text: 'Menggantikan waktu rehat.' },
      ],
      correctOptionId: 'a',
      explanation: 'Petikan menyatakan bahawa membaca dapat menambah ilmu pengetahuan.',
    },
    {
      id: 'q3',
      prompt: 'Berapa kerap murid digalakkan membaca?',
      options: [
        { id: 'a', text: 'Sekurang-kurangnya beberapa minit setiap hari.' },
        { id: 'b', text: 'Hanya pada hujung minggu.' },
        { id: 'c', text: 'Hanya sebelum peperiksaan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Ayat terakhir menyebut bahawa murid digalakkan membaca beberapa minit setiap hari.',
    },
  ],
  summary: [
    'Idea utama ialah perkara paling penting dalam petikan.',
    'Petikan ini menerangkan manfaat membaca kepada murid.',
    'Kata baharu: bermanfaat, kosa kata, digalakkan.',
  ],
}
