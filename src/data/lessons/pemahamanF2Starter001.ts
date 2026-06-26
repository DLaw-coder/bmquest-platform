import type { Lesson } from '../../domain'

export const pemahamanF2Starter001: Lesson = {
  id: 'pemahaman-f2-starter-001',
  sortOrder: 201,
  title: 'Pemahaman Petikan',
  form: 2,
  strand: 'Membaca',
  skill: 'Memahami idea keseluruhan',
  learningObjective:
    'Murid dapat memahami idea keseluruhan dan maklumat penting dalam petikan pendek.',
  readingTip:
    'Baca petikan sekali untuk gambaran umum, kemudian baca semula untuk mengenal pasti maklumat penting.',
  estimatedMinutes: 10,
  curriculumMeta: {
    subject: 'Bahasa Melayu',
    curriculum: 'KSSM',
    form: 2,
    theme: 'Jati Diri dan Sahsiah',
    unit: 'Latihan Pemahaman Starter',
    learningArea: 'Membaca',
    contentStandard: {
      code: '2.2',
      description:
        'Membaca untuk memahami makna perkataan, rangkai kata, istilah, serta maksud ungkapan dan ayat dalam pelbagai bahan.',
    },
    learningStandard: {
      code: '2.2.3',
      description:
        'Membaca secara luncuran dan imbasan untuk memahami serta meneroka maksud keseluruhan daripada pelbagai bahan.',
    },
  },
  curriculumReferences: {
    standardIds: ['kssm-bm-f2-2.2.3'],
    textbookReferenceIds: ['kssm-bm-f2-textbook-source'],
  },
  passageTitle: 'Program Mentor Rakan Sebaya',
  passage:
    'Sekolah Menengah Seri Murni memperkenalkan program mentor rakan sebaya untuk membantu murid baharu menyesuaikan diri. Setiap mentor membimbing dua orang murid Tingkatan Dua dalam hal jadual kelas, aktiviti kokurikulum dan peraturan sekolah. Program ini menjadikan murid lebih yakin untuk bertanya dan bekerjasama dengan rakan.',
  vocabulary: [
    {
      word: 'mentor',
      meaning: 'pembimbing atau penasihat',
      example: 'Mentor membantu murid baharu memahami peraturan sekolah.',
    },
    {
      word: 'menyesuaikan diri',
      meaning: 'membiasakan diri dengan keadaan baharu',
      example: 'Murid baharu perlu menyesuaikan diri dengan suasana sekolah.',
    },
    {
      word: 'kokurikulum',
      meaning: 'aktiviti pembelajaran di luar bilik darjah',
      example: 'Kelab dan persatuan ialah aktiviti kokurikulum.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah tujuan program mentor rakan sebaya?',
      options: [
        { id: 'a', text: 'Membantu murid baharu menyesuaikan diri.' },
        { id: 'b', text: 'Menggantikan semua kelas harian.' },
        { id: 'c', text: 'Memilih murid untuk pertandingan sukan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Petikan menyatakan program itu membantu murid baharu menyesuaikan diri.',
    },
    {
      id: 'q2',
      prompt: 'Apakah perkara yang dibimbing oleh mentor?',
      options: [
        { id: 'a', text: 'Jadual kelas, kokurikulum dan peraturan sekolah.' },
        { id: 'b', text: 'Harga makanan di kantin sahaja.' },
        { id: 'c', text: 'Cara membaiki komputer sekolah.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Mentor membimbing murid tentang jadual kelas, aktiviti kokurikulum dan peraturan sekolah.',
    },
    {
      id: 'q3',
      prompt: 'Apakah kesan program itu kepada murid?',
      options: [
        { id: 'a', text: 'Murid lebih yakin untuk bertanya dan bekerjasama.' },
        { id: 'b', text: 'Murid tidak perlu hadir ke sekolah.' },
        { id: 'c', text: 'Murid hanya belajar secara bersendirian.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Ayat terakhir menyatakan murid menjadi lebih yakin untuk bertanya dan bekerjasama.',
    },
  ],
  summary: [
    'Idea keseluruhan petikan ialah program mentor membantu murid baharu.',
    'Maklumat penting boleh dikenal pasti melalui bacaan kedua.',
    'Kata baharu: mentor, menyesuaikan diri, kokurikulum.',
  ],
}
