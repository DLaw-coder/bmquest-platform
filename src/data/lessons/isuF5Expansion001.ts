import type { Lesson } from '../../domain'

export const isuF5Expansion001: Lesson = {
  id: 'isu-f5-expansion-001',
  sortOrder: 502,
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
    theme: 'Teknologi dan Masyarakat',
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
  passageTitle: 'Belia dan Tanggungjawab Digital',
  passage:
    'Belia kini banyak menggunakan platform digital untuk belajar, berniaga dan berkomunikasi. Walau bagaimanapun, mereka juga terdedah kepada maklumat palsu dan komen negatif. Oleh itu, belia perlu menyemak sumber maklumat serta berfikir sebelum berkongsi sesuatu hantaran.',
  vocabulary: [
    {
      word: 'platform',
      meaning: 'ruang atau sistem untuk sesuatu aktiviti',
      example: 'Platform digital digunakan untuk belajar dan berniaga.',
    },
    {
      word: 'terdedah',
      meaning: 'berada dalam keadaan mudah terkena sesuatu risiko',
      example: 'Belia terdedah kepada maklumat palsu.',
    },
    {
      word: 'hantaran',
      meaning: 'kandungan yang dikongsi dalam talian',
      example: 'Fikir dahulu sebelum berkongsi hantaran.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah inferens tentang penggunaan platform digital?',
      options: [
        { id: 'a', text: 'Platform digital bermanfaat tetapi perlu digunakan secara bertanggungjawab.' },
        { id: 'b', text: 'Maklumat ini tidak tepat berdasarkan bahan.' },
        { id: 'c', text: 'Jawapan ini tidak berkaitan dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Jawapan ini disokong secara langsung atau munasabah oleh maklumat dalam bahan.',
    },
    {
      id: 'q2',
      prompt: 'Mengapakah sumber maklumat perlu disemak?',
      options: [
        { id: 'a', text: 'Untuk mengelakkan penyebaran maklumat palsu.' },
        { id: 'b', text: 'Perkara ini tidak disebut dalam bahan.' },
        { id: 'c', text: 'Pilihan ini bercanggah dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Maklumat tersebut boleh dikenal pasti melalui bacaan teliti.',
    },
    {
      id: 'q3',
      prompt: 'Apakah kesimpulan yang munasabah?',
      options: [
        { id: 'a', text: 'Belia perlu bijak menilai maklumat sebelum berkongsi hantaran.' },
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
    'Kata baharu: platform, terdedah, hantaran.',
  ],
}
