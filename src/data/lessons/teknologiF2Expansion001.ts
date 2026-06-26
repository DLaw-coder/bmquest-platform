import type { Lesson } from '../../domain'

export const teknologiF2Expansion001: Lesson = {
  id: 'teknologi-f2-expansion-001',
  sortOrder: 203,
  title: 'Teknologi Harian',
  form: 2,
  strand: 'Membaca',
  skill: 'Bacaan luncuran dan imbasan',
  learningObjective:
    'Murid dapat memahami maksud keseluruhan dan maklumat penting melalui bahan bacaan pendek.',
  readingTip:
    'Baca bahan dengan teliti, kenal pasti kata kunci dan pastikan jawapan disokong oleh maklumat dalam bahan.',
  estimatedMinutes: 10,
  curriculumMeta: {
    subject: 'Bahasa Melayu',
    curriculum: 'KSSM',
    form: 2,
    theme: 'Sains, Teknologi dan Inovasi',
    unit: 'Latihan Membaca Launch Set',
    learningArea: 'Membaca',
    contentStandard: {
      code: '2.2',
      description: 'Membaca untuk memahami makna perkataan, rangkai kata, istilah, serta maksud ungkapan dan ayat dalam pelbagai bahan.',
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
  passageTitle: 'Notis Kelas Digital',
  passage:
    'Guru kelas memaklumkan bahawa jadual tugasan mingguan akan dikongsi melalui kumpulan kelas digital. Murid perlu menyemak notis setiap petang supaya tidak terlepas arahan penting. Penggunaan teknologi ini memudahkan komunikasi antara guru dan murid.',
  vocabulary: [
    {
      word: 'notis',
      meaning: 'makluman bertulis atau pesanan rasmi',
      example: 'Murid membaca notis kelas digital setiap petang.',
    },
    {
      word: 'tugasan',
      meaning: 'kerja yang perlu disiapkan',
      example: 'Guru memberikan tugasan mingguan kepada murid.',
    },
    {
      word: 'komunikasi',
      meaning: 'perhubungan atau penyampaian maklumat',
      example: 'Aplikasi kelas memudahkan komunikasi.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah maklumat utama dalam notis itu?',
      options: [
        { id: 'a', text: 'Jadual tugasan mingguan dikongsi melalui kumpulan kelas digital.' },
        { id: 'b', text: 'Maklumat ini tidak tepat berdasarkan bahan.' },
        { id: 'c', text: 'Jawapan ini tidak berkaitan dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Jawapan ini disokong secara langsung atau munasabah oleh maklumat dalam bahan.',
    },
    {
      id: 'q2',
      prompt: 'Bilakah murid perlu menyemak notis?',
      options: [
        { id: 'a', text: 'Setiap petang.' },
        { id: 'b', text: 'Perkara ini tidak disebut dalam bahan.' },
        { id: 'c', text: 'Pilihan ini bercanggah dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Maklumat tersebut boleh dikenal pasti melalui bacaan teliti.',
    },
    {
      id: 'q3',
      prompt: 'Mengapakah teknologi itu digunakan?',
      options: [
        { id: 'a', text: 'Untuk memudahkan komunikasi antara guru dan murid.' },
        { id: 'b', text: 'Kesimpulan ini tidak disokong oleh bahan.' },
        { id: 'c', text: 'Pilihan ini terlalu umum dan tidak tepat.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Jawapan ini paling sesuai kerana selari dengan maksud keseluruhan bahan.',
    },
  ],
  summary: [
    'Jawapan membaca perlu berdasarkan bukti dalam bahan.',
    'Kata kunci membantu murid mencari maklumat penting.',
    'Kata baharu: notis, tugasan, komunikasi.',
  ],
}
