import type { Lesson } from '../../domain'

export const masyarakatF5Expansion001: Lesson = {
  id: 'masyarakat-f5-expansion-001',
  sortOrder: 504,
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
    theme: 'Masyarakat dan Kepimpinan',
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
    textbookReferenceIds: [],
  },
  passageTitle: 'Kepimpinan dalam Komuniti',
  passage:
    'Ketua belia kampung mengajak remaja menyertai projek membaiki balai raya. Dia membahagikan tugas mengikut kebolehan ahli kumpulan dan mendengar cadangan semua pihak. Projek itu siap lebih awal kerana setiap ahli berasa dihargai dan bekerjasama dengan baik.',
  vocabulary: [
    {
      word: 'kepimpinan',
      meaning: 'keupayaan memimpin orang lain',
      example: 'Kepimpinan yang baik mendorong kerjasama.',
    },
    {
      word: 'cadangan',
      meaning: 'idea atau saranan',
      example: 'Ketua belia mendengar cadangan ahli.',
    },
    {
      word: 'dihargai',
      meaning: 'dirasakan bernilai atau diberi pengiktirafan',
      example: 'Ahli kumpulan berasa dihargai.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah inferens tentang gaya kepimpinan ketua belia?',
      options: [
        { id: 'a', text: 'Beliau mengamalkan kepimpinan yang terbuka dan menghargai ahli.' },
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
        { id: 'a', text: 'Dia membahagikan tugas dan mendengar cadangan semua pihak.' },
        { id: 'b', text: 'Perkara ini tidak disebut dalam bahan.' },
        { id: 'c', text: 'Pilihan ini bercanggah dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Maklumat tersebut boleh dikenal pasti melalui bacaan teliti.',
    },
    {
      id: 'q3',
      prompt: 'Mengapakah projek itu siap lebih awal?',
      options: [
        { id: 'a', text: 'Setiap ahli bekerjasama dengan baik kerana berasa dihargai.' },
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
    'Kata baharu: kepimpinan, cadangan, dihargai.',
  ],
}
