import type { Lesson } from '../../domain'

export const pemahamanF5Starter001: Lesson = {
  id: 'pemahaman-f5-starter-001',
  sortOrder: 501,
  title: 'Pemahaman Petikan',
  form: 5,
  strand: 'Membaca',
  skill: 'Membuat inferens',
  learningObjective:
    'Murid dapat memahami maklumat penting dan membuat inferens berdasarkan petikan.',
  readingTip:
    'Baca secara kritis dengan membezakan fakta, pendapat dan kesan sesuatu isu yang dibincangkan.',
  estimatedMinutes: 10,
  curriculumMeta: {
    subject: 'Bahasa Melayu',
    curriculum: 'KSSM',
    form: 5,
    theme: 'Masyarakat dan Negara',
    unit: 'Latihan Pemahaman Starter',
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
  passageTitle: 'Sukarelawan Komuniti',
  passage:
    'Kegiatan sukarelawan komuniti semakin penting dalam membentuk masyarakat yang prihatin. Remaja yang terlibat dalam aktiviti ini dapat membantu warga emas, membersihkan kawasan awam dan mengumpulkan bantuan untuk keluarga yang memerlukan. Pengalaman tersebut mendidik remaja supaya peka terhadap masalah sekeliling serta berani mengambil tanggungjawab sosial.',
  vocabulary: [
    {
      word: 'sukarelawan',
      meaning: 'orang yang melakukan kerja secara sukarela',
      example: 'Sukarelawan membantu membersihkan kawasan awam.',
    },
    {
      word: 'prihatin',
      meaning: 'mengambil berat terhadap sesuatu keadaan',
      example: 'Masyarakat prihatin membantu keluarga yang memerlukan.',
    },
    {
      word: 'tanggungjawab sosial',
      meaning: 'peranan seseorang terhadap kesejahteraan masyarakat',
      example: 'Remaja belajar tentang tanggungjawab sosial melalui aktiviti komuniti.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah idea keseluruhan petikan ini?',
      options: [
        { id: 'a', text: 'Aktiviti sukarelawan membentuk masyarakat yang prihatin.' },
        { id: 'b', text: 'Remaja tidak perlu terlibat dalam komuniti.' },
        { id: 'c', text: 'Kawasan awam hanya perlu dibersihkan oleh pekerja.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Keseluruhan petikan menerangkan kepentingan sukarelawan komuniti.',
    },
    {
      id: 'q2',
      prompt: 'Yang manakah contoh aktiviti sukarelawan dalam petikan?',
      options: [
        { id: 'a', text: 'Membantu warga emas dan membersihkan kawasan awam.' },
        { id: 'b', text: 'Menonton rancangan hiburan sepanjang hari.' },
        { id: 'c', text: 'Membeli barangan untuk diri sendiri sahaja.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Petikan menyebut bantuan kepada warga emas dan kerja membersihkan kawasan awam.',
    },
    {
      id: 'q3',
      prompt: 'Apakah inferens yang boleh dibuat tentang pengalaman sukarelawan kepada remaja?',
      options: [
        { id: 'a', text: 'Mereka lebih peka dan berani mengambil tanggungjawab sosial.' },
        { id: 'b', text: 'Mereka mengabaikan masalah masyarakat.' },
        { id: 'c', text: 'Mereka tidak mahu bekerjasama dengan orang lain.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Ayat terakhir menyatakan pengalaman itu mendidik remaja supaya peka dan bertanggungjawab.',
    },
  ],
  summary: [
    'Membaca secara kritis membantu murid menilai fakta dan kesan.',
    'Sukarelawan komuniti membina keprihatinan dan tanggungjawab sosial.',
    'Kata baharu: sukarelawan, prihatin, tanggungjawab sosial.',
  ],
}
