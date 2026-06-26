import type { Lesson } from '../../domain'

export const mediaF4Expansion001: Lesson = {
  id: 'media-f4-expansion-001',
  sortOrder: 402,
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
    theme: 'Teknologi dan Masyarakat',
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
    textbookReferenceIds: [],
  },
  passageTitle: 'Media Sosial Secara Bijak',
  passage:
    'Penulis berpendapat bahawa media sosial boleh menjadi ruang pembelajaran jika digunakan secara bijak. Menurut penulis, remaja dapat berkongsi nota, mengikuti bahan pendidikan dan bertukar pendapat dengan rakan. Namun, pengguna perlu mengawal masa supaya tidak mengabaikan tanggungjawab lain.',
  vocabulary: [
    {
      word: 'bijak',
      meaning: 'pandai membuat pertimbangan',
      example: 'Media sosial perlu digunakan secara bijak.',
    },
    {
      word: 'mengabaikan',
      meaning: 'tidak memberi perhatian kepada sesuatu tanggungjawab',
      example: 'Remaja tidak harus mengabaikan pelajaran.',
    },
    {
      word: 'munasabah',
      meaning: 'dapat diterima akal',
      example: 'Pandangan penulis itu munasabah.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah pandangan utama penulis?',
      options: [
        { id: 'a', text: 'Media sosial boleh menjadi ruang pembelajaran jika digunakan secara bijak.' },
        { id: 'b', text: 'Maklumat ini tidak tepat berdasarkan bahan.' },
        { id: 'c', text: 'Jawapan ini tidak berkaitan dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Jawapan ini disokong secara langsung atau munasabah oleh maklumat dalam bahan.',
    },
    {
      id: 'q2',
      prompt: 'Apakah alasan yang menyokong pandangan penulis?',
      options: [
        { id: 'a', text: 'Remaja boleh berkongsi nota dan mengikuti bahan pendidikan.' },
        { id: 'b', text: 'Perkara ini tidak disebut dalam bahan.' },
        { id: 'c', text: 'Pilihan ini bercanggah dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Maklumat tersebut boleh dikenal pasti melalui bacaan teliti.',
    },
    {
      id: 'q3',
      prompt: 'Apakah ulasan rasional tentang pandangan itu?',
      options: [
        { id: 'a', text: 'Pandangan itu munasabah kerana manfaat media sosial bergantung pada cara penggunaannya.' },
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
    'Kata baharu: bijak, mengabaikan, munasabah.',
  ],
}
