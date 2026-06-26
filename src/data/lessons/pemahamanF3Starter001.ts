import type { Lesson } from '../../domain'

export const pemahamanF3Starter001: Lesson = {
  id: 'pemahaman-f3-starter-001',
  sortOrder: 301,
  title: 'Pemahaman Petikan',
  form: 3,
  strand: 'Membaca',
  skill: 'Membuat ulasan keseluruhan',
  learningObjective:
    'Murid dapat mengenal pasti idea keseluruhan dan membuat ulasan ringkas berdasarkan bahan.',
  readingTip:
    'Perhatikan hubungan antara peristiwa, sebab dan kesan supaya maksud keseluruhan petikan lebih jelas.',
  estimatedMinutes: 10,
  curriculumMeta: {
    subject: 'Bahasa Melayu',
    curriculum: 'KSSM',
    form: 3,
    theme: 'Sains, Teknologi dan Inovasi',
    unit: 'Latihan Pemahaman Starter',
    learningArea: 'Membaca',
    contentStandard: {
      code: '2.2',
      description:
        'Membaca untuk memahami makna perkataan, rangkai kata, istilah, serta ungkapan dan ayat dalam pelbagai bahan.',
    },
    learningStandard: {
      code: '2.2.3',
      description:
        'Membaca dan memahami serta membuat ulasan keseluruhan maksud sesuatu bahan grafik.',
    },
  },
  curriculumReferences: {
    standardIds: ['kssm-bm-f3-2.2.3'],
    textbookReferenceIds: ['kssm-bm-f3-textbook-source'],
  },
  passageTitle: 'Infografik Aplikasi Perpustakaan',
  passage:
    'Infografik perpustakaan sekolah memaparkan tiga fungsi utama aplikasi mudah alih, iaitu menyemak ketersediaan buku, membuat tempahan dan membaca ringkasan buku. Pada bahagian bawah infografik, terdapat mesej “Cari buku dengan cepat, baca dengan lebih bijak”. Secara keseluruhannya, bahan grafik ini menunjukkan bahawa teknologi dapat memudahkan murid mengurus bahan bacaan.',
  vocabulary: [
    {
      word: 'aplikasi',
      meaning: 'program yang digunakan pada telefon atau komputer',
      example: 'Aplikasi perpustakaan memudahkan murid mencari buku.',
    },
    {
      word: 'ketersediaan',
      meaning: 'keadaan sesuatu yang boleh diperoleh atau digunakan',
      example: 'Murid menyemak ketersediaan buku sebelum membuat tempahan.',
    },
    {
      word: 'teratur',
      meaning: 'tersusun dengan baik',
      example: 'Proses pencarian buku menjadi lebih teratur.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah idea keseluruhan petikan ini?',
      options: [
        { id: 'a', text: 'Infografik menunjukkan aplikasi perpustakaan memudahkan murid mengurus bahan bacaan.' },
        { id: 'b', text: 'Murid dilarang meminjam buku di perpustakaan.' },
        { id: 'c', text: 'Perpustakaan sekolah ditutup sepanjang minggu.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Bahan grafik itu menerangkan fungsi aplikasi perpustakaan dan manfaatnya kepada murid.',
    },
    {
      id: 'q2',
      prompt: 'Apakah yang boleh dibuat melalui aplikasi itu?',
      options: [
        { id: 'a', text: 'Menyemak buku, membuat tempahan dan membaca ringkasan.' },
        { id: 'b', text: 'Membeli pakaian sekolah.' },
        { id: 'c', text: 'Menukar jadual peperiksaan.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Petikan menyatakan tiga fungsi aplikasi tersebut secara jelas.',
    },
    {
      id: 'q3',
      prompt: 'Apakah ulasan keseluruhan yang sesuai tentang bahan grafik itu?',
      options: [
        { id: 'a', text: 'Teknologi membantu murid mencari dan mengurus bahan bacaan dengan lebih mudah.' },
        { id: 'b', text: 'Aplikasi itu hanya sesuai digunakan oleh guru perpustakaan.' },
        { id: 'c', text: 'Murid tidak lagi perlu membaca buku.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Ulasan ini merumuskan maksud keseluruhan infografik secara tepat.',
    },
  ],
  summary: [
    'Idea keseluruhan petikan ialah aplikasi memudahkan urusan perpustakaan.',
    'Kesimpulan boleh dibuat dengan melihat sebab dan kesan.',
    'Kata baharu: aplikasi, ketersediaan, teratur.',
  ],
}
