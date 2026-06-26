import type { Lesson } from '../../domain'

export const warisanF4Expansion001: Lesson = {
  id: 'warisan-f4-expansion-001',
  sortOrder: 403,
  title: 'Ulasan Pandangan',
  form: 4,
  strand: 'Membaca',
  skill: 'Mengulas pandangan penulis',
  learningObjective:
    'Murid dapat mengulas pandangan penulis secara rasional melalui bahan bacaan pendek.',
  readingTip:
    'Baca bahan dengan teliti, kenal pasti kata kunci dan pastikan jawapan disokong oleh maklumat dalam bahan.',
  estimatedMinutes: 10,
  curriculumMeta: {
    subject: 'Bahasa Melayu',
    curriculum: 'KSSM',
    form: 4,
    theme: 'Warisan dan Identiti',
    unit: 'Latihan Membaca Launch Set',
    learningArea: 'Membaca',
    contentStandard: {
      code: '2.3',
      description: 'Membaca untuk memproses maklumat daripada pelbagai bahan.',
    },
    learningStandard: {
      code: '2.3.5',
      description:
        'Membaca dan mengulas pandangan penulis secara rasional.',
    },
  },
  curriculumReferences: {
    standardIds: ['kssm-bm-f4-2.3.5'],
    textbookReferenceIds: ['kssm-bm-f4-textbook-source'],
  },
  passageTitle: 'Warisan Bahasa dan Budaya',
  passage:
    'Penulis menyatakan bahawa bahasa dan budaya perlu dipelihara kerana kedua-duanya membentuk identiti masyarakat. Aktiviti seperti pertandingan pantun, persembahan teater dan pameran budaya boleh menarik minat remaja. Penulis percaya bahawa warisan akan terus hidup jika generasi muda diberi ruang untuk terlibat.',
  vocabulary: [
    {
      word: 'warisan',
      meaning: 'sesuatu yang diwarisi daripada generasi terdahulu',
      example: 'Pantun ialah warisan budaya Melayu.',
    },
    {
      word: 'identiti',
      meaning: 'ciri yang melambangkan diri atau masyarakat',
      example: 'Bahasa membentuk identiti bangsa.',
    },
    {
      word: 'terlibat',
      meaning: 'mengambil bahagian',
      example: 'Remaja perlu terlibat dalam aktiviti budaya.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah pandangan penulis tentang warisan?',
      options: [
        { id: 'a', text: 'Bahasa dan budaya perlu dipelihara kerana membentuk identiti masyarakat.' },
        { id: 'b', text: 'Maklumat ini tidak tepat berdasarkan bahan.' },
        { id: 'c', text: 'Jawapan ini tidak berkaitan dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Jawapan ini disokong secara langsung atau munasabah oleh maklumat dalam bahan.',
    },
    {
      id: 'q2',
      prompt: 'Apakah contoh aktiviti yang disebut?',
      options: [
        { id: 'a', text: 'Pertandingan pantun, persembahan teater dan pameran budaya.' },
        { id: 'b', text: 'Perkara ini tidak disebut dalam bahan.' },
        { id: 'c', text: 'Pilihan ini bercanggah dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Maklumat tersebut boleh dikenal pasti melalui bacaan teliti.',
    },
    {
      id: 'q3',
      prompt: 'Apakah ulasan yang sesuai?',
      options: [
        { id: 'a', text: 'Pandangan penulis rasional kerana penglibatan remaja membantu warisan terus hidup.' },
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
    'Kata baharu: warisan, identiti, terlibat.',
  ],
}
