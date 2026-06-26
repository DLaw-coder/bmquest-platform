import type { Lesson } from '../../domain'

export const komunitiF2Expansion001: Lesson = {
  id: 'komuniti-f2-expansion-001',
  sortOrder: 202,
  title: 'Komuniti Prihatin',
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
    theme: 'Komuniti dan Kesihatan',
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
    textbookReferenceIds: [],
  },
  passageTitle: 'Kempen Kebersihan Taman',
  passage:
    'Penduduk Taman Seri Damai mengadakan kempen kebersihan pada hari Sabtu. Mereka membersihkan longkang, mengutip sampah dan menanam pokok bunga di kawasan lapang. Kempen itu menjadikan taman lebih ceria serta mengeratkan hubungan antara jiran.',
  vocabulary: [
    {
      word: 'longkang',
      meaning: 'saluran air di tepi jalan atau rumah',
      example: 'Penduduk membersihkan longkang supaya air mengalir lancar.',
    },
    {
      word: 'ceria',
      meaning: 'kelihatan gembira atau menyenangkan',
      example: 'Taman itu kelihatan ceria selepas ditanam pokok bunga.',
    },
    {
      word: 'mengeratkan',
      meaning: 'menjadikan hubungan lebih rapat',
      example: 'Aktiviti bersama dapat mengeratkan hubungan jiran.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah tujuan utama kempen itu?',
      options: [
        { id: 'a', text: 'Membersihkan dan menceriakan kawasan taman.' },
        { id: 'b', text: 'Maklumat ini tidak tepat berdasarkan bahan.' },
        { id: 'c', text: 'Jawapan ini tidak berkaitan dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Jawapan ini disokong secara langsung atau munasabah oleh maklumat dalam bahan.',
    },
    {
      id: 'q2',
      prompt: 'Apakah aktiviti yang dilakukan penduduk?',
      options: [
        { id: 'a', text: 'Membersihkan longkang, mengutip sampah dan menanam pokok bunga.' },
        { id: 'b', text: 'Perkara ini tidak disebut dalam bahan.' },
        { id: 'c', text: 'Pilihan ini bercanggah dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Maklumat tersebut boleh dikenal pasti melalui bacaan teliti.',
    },
    {
      id: 'q3',
      prompt: 'Apakah kesan kempen kepada penduduk?',
      options: [
        { id: 'a', text: 'Hubungan antara jiran menjadi lebih erat.' },
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
    'Kata baharu: longkang, ceria, mengeratkan.',
  ],
}
