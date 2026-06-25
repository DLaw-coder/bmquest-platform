import type { Lesson } from '../../domain'

export const ideaUtama001: Lesson = {
  id: 'idea-utama-001',
  title: 'Idea Utama',
  form: 1,
  strand: 'Membaca',
  skill: 'Mengenal pasti idea utama',
  estimatedMinutes: 10,
  curriculumMeta: {
    subject: 'Bahasa Melayu',
    curriculum: 'KSSM',
    form: 1,
    theme: 'Amalan Baik Dalam Kehidupan',
    unit: 'Kemahiran Membaca Foundation',
    learningArea: 'Membaca',
    contentStandard: {
      code: '2.1',
      description: 'Membaca secara mekanis pelbagai bahan prosa dan puisi.',
    },
    learningStandard: {
      code: '2.1.1',
      description: 'Membaca untuk memahami maksud perkataan, rangkai kata, istilah, ungkapan dan ayat dalam pelbagai bahan.',
    },
  },
  passageTitle: 'Amalan Membaca',
  passage:
    'Membaca ialah amalan yang sangat bermanfaat kepada murid. Melalui membaca, murid dapat menambah ilmu pengetahuan, memperluas kosa kata dan memperbaik kemahiran berbahasa. Amalan ini juga membantu murid memahami pelbagai perkara yang berlaku di sekeliling mereka. Oleh itu, murid digalakkan membaca sekurang-kurangnya beberapa minit setiap hari.',
  vocabulary: [
    { word: 'bermanfaat', meaning: 'memberi faedah atau kebaikan' },
    { word: 'kosa kata', meaning: 'perbendaharaan kata' },
    { word: 'digalakkan', meaning: 'dianjurkan atau disarankan' },
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
      explanation: 'Ayat terakhir menyebut bahawa murid digalakkan membaca beberapa minit setiap hari.',
    },
  ],
}
