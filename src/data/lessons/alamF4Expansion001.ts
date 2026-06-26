import type { Lesson } from '../../domain'

export const alamF4Expansion001: Lesson = {
  id: 'alam-f4-expansion-001',
  sortOrder: 404,
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
    theme: 'Alam Sekitar dan Teknologi',
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
  passageTitle: 'Pengangkutan Awam dan Alam Sekitar',
  passage:
    'Penulis berpandangan bahawa penggunaan pengangkutan awam dapat mengurangkan kesesakan jalan raya dan pencemaran udara. Selain menjimatkan kos, pengangkutan awam juga menggalakkan masyarakat merancang perjalanan dengan lebih teratur. Penulis menyarankan kemudahan awam ditambah baik supaya lebih ramai pengguna berminat.',
  vocabulary: [
    {
      word: 'kesesakan',
      meaning: 'keadaan terlalu padat atau sesak',
      example: 'Kesesakan jalan raya berlaku pada waktu puncak.',
    },
    {
      word: 'pencemaran',
      meaning: 'keadaan alam sekitar menjadi kotor atau tercemar',
      example: 'Asap kenderaan menyebabkan pencemaran udara.',
    },
    {
      word: 'menyarankan',
      meaning: 'mencadangkan sesuatu',
      example: 'Penulis menyarankan kemudahan awam ditambah baik.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah pandangan utama penulis?',
      options: [
        { id: 'a', text: 'Pengangkutan awam dapat mengurangkan kesesakan dan pencemaran udara.' },
        { id: 'b', text: 'Maklumat ini tidak tepat berdasarkan bahan.' },
        { id: 'c', text: 'Jawapan ini tidak berkaitan dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Jawapan ini disokong secara langsung atau munasabah oleh maklumat dalam bahan.',
    },
    {
      id: 'q2',
      prompt: 'Apakah manfaat lain yang dinyatakan?',
      options: [
        { id: 'a', text: 'Menjimatkan kos dan membantu perjalanan lebih teratur.' },
        { id: 'b', text: 'Perkara ini tidak disebut dalam bahan.' },
        { id: 'c', text: 'Pilihan ini bercanggah dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Maklumat tersebut boleh dikenal pasti melalui bacaan teliti.',
    },
    {
      id: 'q3',
      prompt: 'Apakah ulasan rasional tentang saranan penulis?',
      options: [
        { id: 'a', text: 'Saranan itu wajar kerana kemudahan yang baik boleh menarik lebih ramai pengguna.' },
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
    'Kata baharu: kesesakan, pencemaran, menyarankan.',
  ],
}
