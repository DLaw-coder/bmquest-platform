import type { Lesson } from '../../domain'

export const alamF3Expansion001: Lesson = {
  id: 'alam-f3-expansion-001',
  sortOrder: 302,
  title: 'Ulasan Bahan Grafik',
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
    theme: 'Alam Sekitar dan Kelestarian',
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
  passageTitle: 'Poster Kitar Semula',
  passage:
    'Poster kitar semula memaparkan tiga tong berwarna biru, coklat dan jingga. Setiap tong dilabelkan untuk kertas, kaca dan plastik. Slogan pada poster itu berbunyi “Asingkan Sisa, Selamatkan Bumi”. Secara keseluruhannya, poster mengajak masyarakat mengurus sisa dengan lebih bertanggungjawab.',
  vocabulary: [
    {
      word: 'kitar semula',
      meaning: 'menggunakan semula bahan buangan yang boleh diproses',
      example: 'Kertas lama boleh dihantar untuk kitar semula.',
    },
    {
      word: 'sisa',
      meaning: 'bahan buangan',
      example: 'Sisa perlu diasingkan mengikut jenis.',
    },
    {
      word: 'bertanggungjawab',
      meaning: 'melakukan sesuatu dengan kesedaran terhadap tugas',
      example: 'Kita perlu bertanggungjawab menjaga alam sekitar.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah maksud keseluruhan poster itu?',
      options: [
        { id: 'a', text: 'Poster mengajak masyarakat mengurus sisa secara bertanggungjawab.' },
        { id: 'b', text: 'Maklumat ini tidak tepat berdasarkan bahan.' },
        { id: 'c', text: 'Jawapan ini tidak berkaitan dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Jawapan ini disokong secara langsung atau munasabah oleh maklumat dalam bahan.',
    },
    {
      id: 'q2',
      prompt: 'Apakah fungsi tiga tong dalam poster?',
      options: [
        { id: 'a', text: 'Untuk mengasingkan kertas, kaca dan plastik.' },
        { id: 'b', text: 'Perkara ini tidak disebut dalam bahan.' },
        { id: 'c', text: 'Pilihan ini bercanggah dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Maklumat tersebut boleh dikenal pasti melalui bacaan teliti.',
    },
    {
      id: 'q3',
      prompt: 'Apakah ulasan yang sesuai tentang slogan poster?',
      options: [
        { id: 'a', text: 'Slogan itu menggalakkan amalan kitar semula demi alam sekitar.' },
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
    'Kata baharu: kitar semula, sisa, bertanggungjawab.',
  ],
}
