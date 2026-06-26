import type { Lesson } from '../../domain'

export const luncuranImbasan001: Lesson = {
  id: 'luncuran-imbasan-001',
  sortOrder: 4,
  title: 'Luncuran dan Imbasan',
  form: 1,
  strand: 'Membaca',
  skill: 'Memahami idea keseluruhan secara luncuran dan imbasan',
  learningObjective:
    'Murid dapat menggunakan bacaan luncuran dan imbasan untuk memahami idea keseluruhan petikan.',
  readingTip:
    'Gunakan luncuran untuk mendapat gambaran umum. Gunakan imbasan untuk mencari maklumat khusus seperti nama, masa atau tempat.',
  estimatedMinutes: 10,
  curriculumMeta: {
    subject: 'Bahasa Melayu',
    curriculum: 'KSSM',
    form: 1,
    theme: 'Kesihatan dan Kebersihan',
    unit: 'Kemahiran Membaca Asas',
    learningArea: 'Membaca',
    contentStandard: {
      code: '2.2',
      description:
        'Membaca untuk memahami makna perkataan, rangkai kata, istilah, ungkapan, ayat, maklumat dan maksud keseluruhan daripada pelbagai bahan.',
    },
    learningStandard: {
      code: '2.2.3',
      description:
        'Membaca untuk memahami idea keseluruhan dalam pelbagai bahan prosa dengan betul dan tepat secara luncuran dan imbasan.',
    },
  },
  curriculumReferences: {
    standardIds: ['kssm-bm-f1-2.2.3'],
    textbookReferenceIds: ['kssm-bm-f1-2016-unit5-p27'],
  },
  passageTitle: 'Hari Sukaneka Kelas',
  passage:
    'Pada hari Jumaat, kelas Tingkatan Satu Bestari mengadakan sukaneka di padang sekolah. Acara dimulakan dengan senaman ringan selama sepuluh minit. Selepas itu, murid menyertai permainan membawa bola pingpong dalam sudu dan larian berkumpulan. Semua murid kelihatan gembira kerana aktiviti tersebut menggalakkan kerjasama serta gaya hidup sihat.',
  vocabulary: [
    {
      word: 'sukaneka',
      meaning: 'aktiviti sukan yang ringan dan menyeronokkan',
      example: 'Kelas kami mengadakan sukaneka di padang sekolah.',
    },
    {
      word: 'senaman',
      meaning: 'pergerakan badan untuk menyihatkan tubuh',
      example: 'Murid melakukan senaman sebelum acara bermula.',
    },
    {
      word: 'kerjasama',
      meaning: 'usaha yang dilakukan bersama-sama',
      example: 'Permainan berkumpulan memerlukan kerjasama.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Apakah gambaran keseluruhan petikan ini?',
      options: [
        { id: 'a', text: 'Kelas Tingkatan Satu Bestari mengadakan aktiviti sukaneka.' },
        { id: 'b', text: 'Murid-murid belajar memasak di kantin.' },
        { id: 'c', text: 'Guru mengadakan mesyuarat di bilik guru.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Bacaan luncuran menunjukkan petikan ini tentang aktiviti sukaneka kelas.',
    },
    {
      id: 'q2',
      prompt: 'Bilakah sukaneka itu diadakan?',
      options: [
        { id: 'a', text: 'Pada hari Jumaat.' },
        { id: 'b', text: 'Pada hari Ahad.' },
        { id: 'c', text: 'Pada waktu malam.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Melalui imbasan, maklumat masa dapat ditemukan pada ayat pertama.',
    },
    {
      id: 'q3',
      prompt: 'Apakah nilai yang digalakkan melalui aktiviti itu?',
      options: [
        { id: 'a', text: 'Kerjasama dan gaya hidup sihat.' },
        { id: 'b', text: 'Persaingan tanpa peraturan.' },
        { id: 'c', text: 'Berehat sepanjang hari.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Ayat terakhir menyatakan aktiviti tersebut menggalakkan kerjasama serta gaya hidup sihat.',
    },
  ],
  summary: [
    'Bacaan luncuran membantu murid memahami gambaran umum petikan.',
    'Bacaan imbasan membantu murid mencari maklumat khusus dengan cepat.',
    'Kata baharu: sukaneka, senaman, kerjasama.',
  ],
}
