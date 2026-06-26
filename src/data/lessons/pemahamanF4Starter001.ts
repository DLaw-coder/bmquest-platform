import type { Lesson } from '../../domain'

export const pemahamanF4Starter001: Lesson = {
  id: 'pemahaman-f4-starter-001',
  sortOrder: 401,
  title: 'Pemahaman Petikan',
  form: 4,
  strand: 'Membaca',
  skill: 'Mengulas pandangan penulis',
  learningObjective:
    'Murid dapat memahami idea keseluruhan dan mengenal pasti hujah utama dalam petikan.',
  readingTip:
    'Untuk petikan berbentuk pendapat, kenal pasti isu, pendirian penulis dan alasan yang menyokong pendirian tersebut.',
  estimatedMinutes: 10,
  curriculumMeta: {
    subject: 'Bahasa Melayu',
    curriculum: 'KSSM',
    form: 4,
    theme: 'Ekonomi, Keusahawanan dan Pengurusan Kewangan',
    unit: 'Latihan Pemahaman Starter',
    learningArea: 'Membaca',
    contentStandard: {
      code: '2.3',
      description: 'Membaca untuk memproses maklumat daripada pelbagai bahan.',
    },
    learningStandard: {
      code: '2.3.5',
      description: 'Membaca dan mengulas pandangan penulis secara rasional.',
    },
  },
  curriculumReferences: {
    standardIds: ['kssm-bm-f4-2.3.5'],
    textbookReferenceIds: ['kssm-bm-f4-textbook-source'],
  },
  passageTitle: 'Usahawan Muda di Sekolah',
  passage:
    'Program usahawan muda memberi peluang kepada murid mempelajari asas perniagaan secara praktikal. Murid perlu merancang produk, mengira kos dan mempromosikan jualan mereka kepada warga sekolah. Aktiviti ini bukan sekadar mencari keuntungan, tetapi membina kemahiran komunikasi, tanggungjawab dan keyakinan diri.',
  vocabulary: [
    {
      word: 'praktikal',
      meaning: 'berkaitan dengan pengalaman atau amalan sebenar',
      example: 'Murid belajar asas perniagaan secara praktikal.',
    },
    {
      word: 'mempromosikan',
      meaning: 'memperkenalkan atau mengiklankan sesuatu',
      example: 'Murid mempromosikan produk kepada warga sekolah.',
    },
    {
      word: 'keuntungan',
      meaning: 'lebihan hasil selepas ditolak kos',
      example: 'Mereka mengira kos untuk mengetahui keuntungan jualan.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah tujuan utama program usahawan muda?',
      options: [
        { id: 'a', text: 'Memberi pengalaman asas perniagaan kepada murid.' },
        { id: 'b', text: 'Menghentikan aktiviti pembelajaran di sekolah.' },
        { id: 'c', text: 'Menjadikan murid pekerja sepenuh masa.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Petikan menyatakan program itu memberi peluang mempelajari asas perniagaan secara praktikal.',
    },
    {
      id: 'q2',
      prompt: 'Yang manakah tugas murid dalam program itu?',
      options: [
        { id: 'a', text: 'Merancang produk, mengira kos dan mempromosikan jualan.' },
        { id: 'b', text: 'Menulis jadual peperiksaan sekolah.' },
        { id: 'c', text: 'Mengurus semua akaun guru.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Tiga tugas tersebut disebut secara langsung dalam petikan.',
    },
    {
      id: 'q3',
      prompt: 'Apakah hujah penulis tentang manfaat program ini?',
      options: [
        { id: 'a', text: 'Program ini membina kemahiran dan keyakinan murid.' },
        { id: 'b', text: 'Program ini hanya penting untuk mencari keuntungan.' },
        { id: 'c', text: 'Program ini tidak sesuai dijalankan di sekolah.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Penulis menegaskan aktiviti ini membina komunikasi, tanggungjawab dan keyakinan diri.',
    },
  ],
  summary: [
    'Petikan pendapat mengandungi isu, pendirian dan alasan.',
    'Program usahawan muda dikaitkan dengan kemahiran kehidupan.',
    'Kata baharu: praktikal, mempromosikan, keuntungan.',
  ],
}
