import type { Lesson } from '../../domain'

export const pemahamanF3Starter001: Lesson = {
  id: 'pemahaman-f3-starter-001',
  sortOrder: 301,
  title: 'Pemahaman Petikan',
  form: 3,
  strand: 'Membaca',
  skill: 'Memahami idea keseluruhan',
  learningObjective:
    'Murid dapat mengenal pasti idea keseluruhan dan membuat kesimpulan ringkas berdasarkan petikan.',
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
        'Membaca untuk memahami makna perkataan, rangkai kata, istilah, ungkapan, ayat, maklumat dan maksud keseluruhan daripada pelbagai bahan.',
    },
    learningStandard: {
      code: '2.2.3',
      description:
        'Membaca untuk memahami idea keseluruhan dalam pelbagai bahan prosa dengan betul dan tepat.',
    },
  },
  curriculumReferences: {
    standardIds: ['kssm-bm-f3-2.2.3'],
    textbookReferenceIds: [],
  },
  passageTitle: 'Kempen Penggunaan Aplikasi Perpustakaan',
  passage:
    'Perpustakaan sekolah melancarkan aplikasi mudah alih untuk memudahkan murid mencari bahan bacaan. Melalui aplikasi itu, murid boleh menyemak ketersediaan buku, membuat tempahan dan membaca ringkasan buku. Kempen ini berjaya meningkatkan minat murid untuk meminjam buku kerana proses pencarian menjadi lebih cepat dan teratur.',
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
        { id: 'a', text: 'Aplikasi perpustakaan memudahkan murid mencari bahan bacaan.' },
        { id: 'b', text: 'Murid dilarang meminjam buku di perpustakaan.' },
        { id: 'c', text: 'Perpustakaan sekolah ditutup sepanjang minggu.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Petikan menerangkan fungsi aplikasi perpustakaan dan kesannya terhadap minat membaca.',
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
      prompt: 'Mengapakah minat murid untuk meminjam buku meningkat?',
      options: [
        { id: 'a', text: 'Proses pencarian menjadi lebih cepat dan teratur.' },
        { id: 'b', text: 'Semua buku diberikan secara percuma.' },
        { id: 'c', text: 'Murid tidak perlu membaca ringkasan buku.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Ayat terakhir menjelaskan sebab minat murid meningkat.',
    },
  ],
  summary: [
    'Idea keseluruhan petikan ialah aplikasi memudahkan urusan perpustakaan.',
    'Kesimpulan boleh dibuat dengan melihat sebab dan kesan.',
    'Kata baharu: aplikasi, ketersediaan, teratur.',
  ],
}
