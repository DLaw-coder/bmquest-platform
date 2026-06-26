import type { Lesson } from '../../domain'

export const kesihatanF2Expansion001: Lesson = {
  id: 'kesihatan-f2-expansion-001',
  sortOrder: 204,
  title: 'Gaya Hidup Sihat',
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
    theme: 'Kesihatan dan Kebersihan',
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
  passageTitle: 'Sarapan Sebelum Sekolah',
  passage:
    'Aina sentiasa bersarapan sebelum pergi ke sekolah. Ibunya menyediakan makanan ringkas seperti roti, telur dan buah-buahan. Sarapan membantu Aina lebih bertenaga semasa belajar dan tidak mudah mengantuk di dalam kelas.',
  vocabulary: [
    {
      word: 'bersarapan',
      meaning: 'makan pada waktu pagi',
      example: 'Aina bersarapan sebelum ke sekolah.',
    },
    {
      word: 'bertenaga',
      meaning: 'mempunyai tenaga',
      example: 'Sarapan membuatkan murid lebih bertenaga.',
    },
    {
      word: 'ringkas',
      meaning: 'mudah atau tidak rumit',
      example: 'Ibu menyediakan makanan ringkas pada waktu pagi.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah amalan Aina sebelum ke sekolah?',
      options: [
        { id: 'a', text: 'Aina bersarapan sebelum pergi ke sekolah.' },
        { id: 'b', text: 'Maklumat ini tidak tepat berdasarkan bahan.' },
        { id: 'c', text: 'Jawapan ini tidak berkaitan dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Jawapan ini disokong secara langsung atau munasabah oleh maklumat dalam bahan.',
    },
    {
      id: 'q2',
      prompt: 'Apakah contoh makanan sarapan Aina?',
      options: [
        { id: 'a', text: 'Roti, telur dan buah-buahan.' },
        { id: 'b', text: 'Perkara ini tidak disebut dalam bahan.' },
        { id: 'c', text: 'Pilihan ini bercanggah dengan bahan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Maklumat tersebut boleh dikenal pasti melalui bacaan teliti.',
    },
    {
      id: 'q3',
      prompt: 'Apakah manfaat sarapan kepada Aina?',
      options: [
        { id: 'a', text: 'Aina lebih bertenaga dan tidak mudah mengantuk.' },
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
    'Kata baharu: bersarapan, bertenaga, ringkas.',
  ],
}
