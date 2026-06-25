import type { Lesson } from '../../domain'

export const isiTersurat001: Lesson = {
  id: 'isi-tersurat-001',
  title: 'Isi Tersurat',
  form: 1,
  strand: 'Membaca',
  skill: 'Mengenal pasti maklumat tersurat',
  learningObjective:
    'Murid dapat mengenal pasti maklumat yang dinyatakan secara jelas dalam petikan.',
  readingTip:
    'Cari jawapan yang disebut secara terus dalam petikan. Jangan meneka maklumat yang tidak ditulis.',
  estimatedMinutes: 10,
  curriculumMeta: {
    subject: 'Bahasa Melayu',
    curriculum: 'KSSM',
    form: 1,
    theme: 'Amalan Baik Dalam Kehidupan',
    unit: 'Kemahiran Membaca Foundation',
    learningArea: 'Membaca',
    contentStandard: {
      code: '2.1',
      description: 'Membaca secara mekanis pelbagai bahan prosa dan puisi.',
    },
    learningStandard: {
      code: '2.1.1',
      description:
        'Membaca untuk memahami maksud perkataan, rangkai kata, istilah, ungkapan dan ayat dalam pelbagai bahan.',
    },
  },
  passageTitle: 'Menjaga Kebersihan Kelas',
  passage:
    'Setiap pagi, murid-murid Tingkatan Satu Amanah membersihkan kelas mereka sebelum guru masuk. Amir menyapu lantai manakala Siti menyusun meja dan kerusi. Beberapa orang murid pula membuang sampah ke dalam tong sampah di luar kelas. Guru kelas memuji mereka kerana bekerjasama menjaga kebersihan.',
  vocabulary: [
    {
      word: 'menyapu',
      meaning: 'membersihkan lantai menggunakan penyapu',
      example: 'Amir menyapu lantai kelas pada waktu pagi.',
    },
    {
      word: 'menyusun',
      meaning: 'meletakkan sesuatu dengan teratur',
      example: 'Siti menyusun meja dan kerusi.',
    },
    {
      word: 'bekerjasama',
      meaning: 'melakukan sesuatu bersama-sama',
      example: 'Murid-murid bekerjasama membersihkan kelas.',
    },
  ],
  questions: [
    {
      id: 'q1',
      prompt: 'Bilakah murid-murid membersihkan kelas?',
      options: [
        { id: 'a', text: 'Setiap pagi.' },
        { id: 'b', text: 'Pada waktu rehat.' },
        { id: 'c', text: 'Selepas sekolah.' },
      ],
      correctOptionId: 'a',
      explanation: 'Petikan menyatakan bahawa murid-murid membersihkan kelas setiap pagi.',
    },
    {
      id: 'q2',
      prompt: 'Siapakah yang menyapu lantai?',
      options: [
        { id: 'a', text: 'Siti.' },
        { id: 'b', text: 'Amir.' },
        { id: 'c', text: 'Guru kelas.' },
      ],
      correctOptionId: 'b',
      explanation: 'Petikan menyatakan bahawa Amir menyapu lantai.',
    },
    {
      id: 'q3',
      prompt: 'Mengapakah guru kelas memuji murid-murid itu?',
      options: [
        { id: 'a', text: 'Kerana mereka bekerjasama menjaga kebersihan.' },
        { id: 'b', text: 'Kerana mereka membaca buku.' },
        { id: 'c', text: 'Kerana mereka pulang awal.' },
      ],
      correctOptionId: 'a',
      explanation:
        'Petikan menyatakan guru memuji mereka kerana bekerjasama menjaga kebersihan.',
    },
  ],
  summary: [
    'Isi tersurat ialah maklumat yang dinyatakan dengan jelas dalam petikan.',
    'Jawapan isi tersurat boleh dicari terus daripada ayat dalam petikan.',
    'Kata baharu: menyapu, menyusun, bekerjasama.',
  ],
}
