import type { Lesson } from '../../domain'

export const ekonomiF5Expansion001: Lesson = {
  id: 'ekonomi-f5-expansion-001',
  sortOrder: 503,
  title: 'Membuat Inferens',
  form: 5,
  strand: 'Membaca',
  skill: 'Membuat inferens',
  learningObjective:
    'Murid dapat membuat inferens berdasarkan bukti dalam bahan melalui bahan bacaan pendek.',
  readingTip:
    'Baca bahan dengan teliti, kenal pasti kata kunci dan pastikan jawapan disokong oleh maklumat dalam bahan.',
  estimatedMinutes: 10,
  curriculumMeta: {
    subject: 'Bahasa Melayu',
    curriculum: 'KSSM',
    form: 5,
    theme: 'Kewangan dan Kehidupan',
    unit: 'Latihan Membaca Launch Set',
    learningArea: 'Membaca',
    contentStandard: {
      code: '2.3',
      description: 'Membaca untuk memproses maklumat daripada pelbagai bahan.',
    },
    learningStandard: {
      code: '2.3.3',
      description:
        'Membaca untuk membuat inferens daripada pelbagai bahan dengan betul menggunakan teknik bacaan yang sesuai.',
    },
  },
  curriculumReferences: {
    standardIds: ['kssm-bm-f5-2.3.3'],
    textbookReferenceIds: ['kssm-bm-f5-textbook-source'],
  },
  passageTitle: 'Tabiat Menabung Remaja',
  passage:
    'Nabil menyimpan sebahagian wang sakunya setiap minggu. Dia mencatat perbelanjaan harian dan mengelakkan pembelian yang tidak perlu. Selepas beberapa bulan, Nabil berjaya membeli buku rujukan menggunakan wang simpanannya sendiri.',
  vocabulary: [
    {
      word: 'menabung',
      meaning: 'menyimpan wang sedikit demi sedikit',
      example: 'Nabil menabung setiap minggu.',
    },
    {
      word: 'perbelanjaan',
      meaning: 'wang yang digunakan untuk membeli sesuatu',
      example: 'Dia mencatat perbelanjaan harian.',
    },
    {
      word: 'matlamat',
      meaning: 'tujuan atau sasaran yang ingin dicapai',
      example: 'Menabung membantu mencapai matlamat.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah inferens tentang sikap Nabil?',
      options: [
        { id: 'a', text: 'Nabil seorang yang berdisiplin dalam mengurus wang.' },
        { id: 'b', text: 'Maklumat ini tidak tepat berdasarkan bahan.' },
        { id: 'c', text: 'Jawapan ini tidak berkaitan dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Jawapan ini disokong secara langsung atau munasabah oleh maklumat dalam bahan.',
    },
    {
      id: 'q2',
      prompt: 'Apakah bukti yang menyokong inferens itu?',
      options: [
        { id: 'a', text: 'Dia menyimpan wang dan mencatat perbelanjaan harian.' },
        { id: 'b', text: 'Perkara ini tidak disebut dalam bahan.' },
        { id: 'c', text: 'Pilihan ini bercanggah dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Maklumat tersebut boleh dikenal pasti melalui bacaan teliti.',
    },
    {
      id: 'q3',
      prompt: 'Apakah pengajaran daripada petikan?',
      options: [
        { id: 'a', text: 'Amalan menabung membantu remaja mencapai matlamat kewangan.' },
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
    'Kata baharu: menabung, perbelanjaan, matlamat.',
  ],
}
