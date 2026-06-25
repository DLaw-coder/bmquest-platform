import type {
  CurriculumStandardReference,
  TextbookReference,
} from '../domain/curriculumReference'

export const curriculumStandards: CurriculumStandardReference[] = [
  {
    standardId: 'kssm-bm-f1-2.3.1',
    curriculum: 'KSSM',
    subject: 'Bahasa Melayu',
    form: 1,
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
    dskpVersion: 'KSSM Bahasa Melayu Tingkatan 1',
    sourceTitle: 'Dokumen Standard Kurikulum dan Pentaksiran Bahasa Melayu Tingkatan 1',
    verificationStatus: 'needs-review',
  },
  {
    standardId: 'kssm-bm-f1-2.2.3',
    curriculum: 'KSSM',
    subject: 'Bahasa Melayu',
    form: 1,
    learningArea: 'Membaca',
    contentStandard: {
      code: '2.2',
      description: 'Membaca untuk memahami makna perkataan, rangkai kata dan maklumat.',
    },
    learningStandard: {
      code: '2.2.3',
      description:
        'Membaca untuk memahami dan menjawab soalan pemahaman berdasarkan bahan prosa.',
    },
    dskpVersion: 'KSSM Bahasa Melayu Tingkatan 1',
    sourceTitle: 'Dokumen Standard Kurikulum dan Pentaksiran Bahasa Melayu Tingkatan 1',
    verificationStatus: 'needs-review',
  },
]

export const textbookReferences: TextbookReference[] = [
  {
    referenceId: 'kssm-bm-f1-2016-unit13-p75',
    curriculum: 'KSSM',
    subject: 'Bahasa Melayu',
    form: 1,
    title: 'Bahasa Melayu Tingkatan 1',
    editionYear: 2016,
    isbn: '978-983-49-1118-8',
    publisher: 'Dewan Bahasa dan Pustaka untuk Kementerian Pendidikan Malaysia',
    unit: 'Unit 13: Lestarikan Kehijauan Bumi',
    pageStart: 75,
    pageEnd: 75,
    alignmentNote:
      'Aktiviti membaca mengenal pasti idea utama dan idea sampingan di bawah SP 2.3.1.',
    catalogUrl:
      'https://gurubesar.my/buku-teks-bahasa-melayu-tingkatan-1/',
    sourceUrl:
      'https://drive.google.com/file/d/13uSE7O7drUOdIq9YTs9Wa1Wxd4A1oVmF/view',
    verificationStatus: 'verified',
  },
  {
    referenceId: 'kssm-bm-f1-2016-unit5-p27',
    curriculum: 'KSSM',
    subject: 'Bahasa Melayu',
    form: 1,
    title: 'Bahasa Melayu Tingkatan 1',
    editionYear: 2016,
    isbn: '978-983-49-1118-8',
    publisher: 'Dewan Bahasa dan Pustaka untuk Kementerian Pendidikan Malaysia',
    unit: 'Unit 5: Serasi Bersama',
    pageStart: 27,
    pageEnd: 27,
    alignmentNote:
      'Aktiviti membaca menjawab soalan pemahaman yang memerlukan maklumat dinyatakan secara langsung dalam teks di bawah SP 2.2.3.',
    catalogUrl:
      'https://gurubesar.my/buku-teks-bahasa-melayu-tingkatan-1/',
    sourceUrl:
      'https://drive.google.com/file/d/13uSE7O7drUOdIq9YTs9Wa1Wxd4A1oVmF/view',
    verificationStatus: 'verified',
  },
]
