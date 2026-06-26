import type { Lesson } from '../../domain'

export const kerjayaF3Expansion001: Lesson = {
  id: 'kerjaya-f3-expansion-001',
  sortOrder: 304,
  title: 'Ulasan Carta',
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
    theme: 'Kerjaya dan Masa Depan',
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
  passageTitle: 'Carta Minat Kerjaya Murid',
  passage:
    'Carta palang menunjukkan minat kerjaya murid Tingkatan Tiga. Kerjaya doktor mendapat pilihan tertinggi, diikuti jurutera dan guru. Carta itu menunjukkan bahawa murid mempunyai minat yang pelbagai dan mula memikirkan hala tuju masa depan.',
  vocabulary: [
    {
      word: 'carta',
      meaning: 'rajah yang menunjukkan maklumat atau data',
      example: 'Carta palang menunjukkan pilihan kerjaya murid.',
    },
    {
      word: 'kerjaya',
      meaning: 'pekerjaan atau bidang kerja',
      example: 'Murid mula memikirkan kerjaya masa depan.',
    },
    {
      word: 'hala tuju',
      meaning: 'arah atau matlamat yang ingin dicapai',
      example: 'Pendidikan membantu murid menentukan hala tuju.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah maklumat utama carta itu?',
      options: [
        { id: 'a', text: 'Carta menunjukkan minat kerjaya murid Tingkatan Tiga.' },
        { id: 'b', text: 'Maklumat ini tidak tepat berdasarkan bahan.' },
        { id: 'c', text: 'Jawapan ini tidak berkaitan dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Jawapan ini disokong secara langsung atau munasabah oleh maklumat dalam bahan.',
    },
    {
      id: 'q2',
      prompt: 'Kerjaya manakah mendapat pilihan tertinggi?',
      options: [
        { id: 'a', text: 'Doktor.' },
        { id: 'b', text: 'Perkara ini tidak disebut dalam bahan.' },
        { id: 'c', text: 'Pilihan ini bercanggah dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Maklumat tersebut boleh dikenal pasti melalui bacaan teliti.',
    },
    {
      id: 'q3',
      prompt: 'Apakah ulasan keseluruhan yang sesuai?',
      options: [
        { id: 'a', text: 'Murid mempunyai minat kerjaya yang pelbagai untuk masa depan.' },
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
    'Kata baharu: carta, kerjaya, hala tuju.',
  ],
}
