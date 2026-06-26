import type { Lesson } from '../../domain'

export const keselamatanF3Expansion001: Lesson = {
  id: 'keselamatan-f3-expansion-001',
  sortOrder: 303,
  title: 'Ulasan Infografik',
  form: 3,
  strand: 'Membaca',
  skill: 'Membuat ulasan keseluruhan',
  learningObjective:
    'Murid dapat memahami bahan grafik dan membuat ulasan keseluruhan melalui bahan bacaan pendek.',
  readingTip:
    'Baca bahan dengan teliti, kenal pasti kata kunci dan pastikan jawapan disokong oleh maklumat dalam bahan.',
  estimatedMinutes: 10,
  curriculumMeta: {
    subject: 'Bahasa Melayu',
    curriculum: 'KSSM',
    form: 3,
    theme: 'Teknologi dan Keselamatan',
    unit: 'Latihan Membaca Launch Set',
    learningArea: 'Membaca',
    contentStandard: {
      code: '2.2',
      description: 'Membaca untuk memahami makna perkataan, rangkai kata, istilah, serta ungkapan dan ayat dalam pelbagai bahan.',
    },
    learningStandard: {
      code: '2.2.3',
      description:
        'Membaca dan memahami serta membuat ulasan keseluruhan maksud sesuatu bahan grafik.',
    },
  },
  curriculumReferences: {
    standardIds: ['kssm-bm-f3-2.2.3'],
    textbookReferenceIds: [],
  },
  passageTitle: 'Infografik Keselamatan Siber',
  passage:
    'Infografik keselamatan siber menunjukkan tiga langkah melindungi akaun, iaitu menggunakan kata laluan kukuh, tidak berkongsi kod keselamatan dan menyemak pautan sebelum menekan. Bahan grafik itu menegaskan bahawa pengguna perlu berhati-hati semasa berada dalam talian.',
  vocabulary: [
    {
      word: 'siber',
      meaning: 'berkaitan dengan komputer dan internet',
      example: 'Keselamatan siber penting kepada pengguna internet.',
    },
    {
      word: 'pautan',
      meaning: 'sambungan ke laman atau maklumat lain',
      example: 'Semak pautan sebelum menekan.',
    },
    {
      word: 'kukuh',
      meaning: 'kuat atau sukar diteka',
      example: 'Kata laluan yang kukuh melindungi akaun.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah maksud keseluruhan infografik?',
      options: [
        { id: 'a', text: 'Pengguna perlu melindungi akaun dan berhati-hati dalam talian.' },
        { id: 'b', text: 'Maklumat ini tidak tepat berdasarkan bahan.' },
        { id: 'c', text: 'Jawapan ini tidak berkaitan dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Jawapan ini disokong secara langsung atau munasabah oleh maklumat dalam bahan.',
    },
    {
      id: 'q2',
      prompt: 'Yang manakah langkah keselamatan siber?',
      options: [
        { id: 'a', text: 'Menggunakan kata laluan kukuh.' },
        { id: 'b', text: 'Perkara ini tidak disebut dalam bahan.' },
        { id: 'c', text: 'Pilihan ini bercanggah dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Maklumat tersebut boleh dikenal pasti melalui bacaan teliti.',
    },
    {
      id: 'q3',
      prompt: 'Apakah ulasan yang sesuai tentang infografik itu?',
      options: [
        { id: 'a', text: 'Infografik itu berguna kerana memberi panduan keselamatan yang mudah diikuti.' },
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
    'Kata baharu: siber, pautan, kukuh.',
  ],
}
