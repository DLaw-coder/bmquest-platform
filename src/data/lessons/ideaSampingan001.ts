import type { Lesson } from '../../domain'

export const ideaSampingan001: Lesson = {
  id: 'idea-sampingan-001',
  sortOrder: 3,
  title: 'Idea Sampingan',
  form: 1,
  strand: 'Membaca',
  skill: 'Mengenal pasti idea sampingan',
  learningObjective:
    'Murid dapat mengenal pasti idea sampingan yang menyokong idea utama dalam petikan pendek.',
  readingTip:
    'Idea sampingan memberi contoh, sebab atau maklumat tambahan kepada idea utama. Cari ayat yang menerangkan perkara utama dengan lebih jelas.',
  estimatedMinutes: 10,
  curriculumMeta: {
    subject: 'Bahasa Melayu',
    curriculum: 'KSSM',
    form: 1,
    theme: 'Alam Sekitar dan Kelestarian',
    unit: 'Kemahiran Membaca Asas',
    learningArea: 'Membaca',
    contentStandard: {
      code: '2.3',
      description: 'Membaca untuk memproses maklumat daripada pelbagai bahan.',
    },
    learningStandard: {
      code: '2.3.1',
      description:
        'Membaca untuk menyaring dan mengenal pasti idea utama dan idea sampingan dengan betul dan tepat.',
    },
  },
  curriculumReferences: {
    standardIds: ['kssm-bm-f1-2.3.1'],
    textbookReferenceIds: ['kssm-bm-f1-2016-unit13-p75'],
  },
  passageTitle: 'Kebun Mini Sekolah',
  passage:
    'Kelab Alam Sekitar sekolah telah membina kebun mini di belakang makmal sains. Murid-murid menanam cili, sawi dan serai di dalam batas kecil. Mereka menyiram tanaman pada waktu pagi mengikut jadual yang ditetapkan. Kebun mini itu bukan sahaja mencantikkan kawasan sekolah, malah mengajar murid menghargai usaha menjaga alam sekitar.',
  vocabulary: [
    {
      word: 'batas',
      meaning: 'tempat tanaman yang ditinggikan sedikit daripada tanah sekeliling',
      example: 'Murid menanam sawi di atas batas kecil.',
    },
    {
      word: 'jadual',
      meaning: 'susunan masa atau giliran untuk melakukan sesuatu',
      example: 'Setiap kumpulan menyiram tanaman mengikut jadual.',
    },
    {
      word: 'menghargai',
      meaning: 'menyedari dan mengakui nilai sesuatu',
      example: 'Aktiviti berkebun membantu murid menghargai alam sekitar.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah idea utama petikan ini?',
      options: [
        { id: 'a', text: 'Murid-murid membina makmal sains baharu.' },
        { id: 'b', text: 'Kelab Alam Sekitar membina kebun mini di sekolah.' },
        { id: 'c', text: 'Murid-murid membeli sayur di pasar.' },
      ],
      correctOptionId: 'b',
      explanation:
        'Keseluruhan petikan menerangkan kebun mini yang dibina dan dijaga oleh murid.',
    },
    {
      id: 'q2',
      prompt: 'Yang manakah idea sampingan dalam petikan?',
      options: [
        { id: 'a', text: 'Murid menanam cili, sawi dan serai.' },
        { id: 'b', text: 'Sekolah itu terletak di kawasan bandar.' },
        { id: 'c', text: 'Guru besar merasmikan makmal sains.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Maklumat tentang jenis tanaman menyokong idea utama tentang kebun mini sekolah.',
    },
    {
      id: 'q3',
      prompt: 'Apakah faedah kebun mini itu kepada murid?',
      options: [
        { id: 'a', text: 'Mengajar murid menghargai alam sekitar.' },
        { id: 'b', text: 'Membolehkan murid tidak hadir ke kelas.' },
        { id: 'c', text: 'Menggantikan semua aktiviti kokurikulum.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Petikan menyatakan kebun mini itu mengajar murid menghargai usaha menjaga alam sekitar.',
    },
  ],
  summary: [
    'Idea sampingan menyokong dan menerangkan idea utama.',
    'Contoh, sebab dan maklumat tambahan boleh menjadi idea sampingan.',
    'Kata baharu: batas, jadual, menghargai.',
  ],
}
