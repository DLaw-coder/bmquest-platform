import type { Lesson } from '../../domain'
import type { FormLevel } from '../../domain/learner'

type DepthLessonSeed = {
  id: string
  sortOrder: number
  title: string
  form: FormLevel
  theme: string
  passageTitle: string
  passage: string
  q1: string
  a1: string
  q2: string
  a2: string
  q3: string
  a3: string
  vocabulary: [
    [string, string, string],
    [string, string, string],
    [string, string, string],
  ]
}

const formMeta = {
  1: {
    standardId: 'kssm-bm-f1-2.3.1',
    textbookReferenceId: 'kssm-bm-f1-2016-unit13-p75',
    skill: 'Mengenal pasti idea utama dan idea sampingan',
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
  2: {
    standardId: 'kssm-bm-f2-2.2.3',
    textbookReferenceId: 'kssm-bm-f2-textbook-source',
    skill: 'Bacaan luncuran dan imbasan',
    contentStandard: {
      code: '2.2',
      description:
        'Membaca untuk memahami makna perkataan, rangkai kata, istilah, serta maksud ungkapan dan ayat dalam pelbagai bahan.',
    },
    learningStandard: {
      code: '2.2.3',
      description:
        'Membaca secara luncuran dan imbasan untuk memahami serta meneroka maksud keseluruhan daripada pelbagai bahan.',
    },
  },
  3: {
    standardId: 'kssm-bm-f3-2.2.3',
    textbookReferenceId: 'kssm-bm-f3-textbook-source',
    skill: 'Membuat ulasan keseluruhan',
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
  4: {
    standardId: 'kssm-bm-f4-2.3.5',
    textbookReferenceId: 'kssm-bm-f4-textbook-source',
    skill: 'Mengulas pandangan penulis',
    contentStandard: {
      code: '2.3',
      description: 'Membaca untuk memproses maklumat daripada pelbagai bahan.',
    },
    learningStandard: {
      code: '2.3.5',
      description: 'Membaca dan mengulas pandangan penulis secara rasional.',
    },
  },
  5: {
    standardId: 'kssm-bm-f5-2.3.3',
    textbookReferenceId: 'kssm-bm-f5-textbook-source',
    skill: 'Membuat inferens',
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
} satisfies Record<FormLevel, {
  standardId: string
  textbookReferenceId: string
  skill: string
  contentStandard: { code: string; description: string }
  learningStandard: { code: string; description: string }
}>

const seeds: DepthLessonSeed[] = [
  {
    id: 'amalan-f1-depth-001',
    sortOrder: 105,
    title: 'Amalan Baik',
    form: 1,
    theme: 'Amalan Baik Dalam Kehidupan',
    passageTitle: 'Membantu di Perpustakaan',
    passage:
      'Setiap hari Rabu, Farah membantu guru pusat sumber menyusun buku di rak. Dia mengasingkan buku cerita, buku rujukan dan majalah supaya mudah dicari oleh murid lain. Amalan ini melatih Farah menjadi lebih bertanggungjawab dan menghargai kemudahan sekolah.',
    q1: 'Apakah idea utama petikan ini?',
    a1: 'Farah membantu menyusun buku di pusat sumber.',
    q2: 'Apakah idea sampingan yang menyokong idea utama?',
    a2: 'Dia mengasingkan buku cerita, buku rujukan dan majalah.',
    q3: 'Apakah nilai yang ditunjukkan oleh Farah?',
    a3: 'Bertanggungjawab dan menghargai kemudahan sekolah.',
    vocabulary: [
      ['pusat sumber', 'tempat rujukan dan bahan bacaan di sekolah', 'Farah membantu di pusat sumber.'],
      ['mengasingkan', 'memisahkan mengikut kumpulan', 'Dia mengasingkan buku mengikut jenis.'],
      ['kemudahan', 'alat atau tempat yang disediakan untuk kegunaan bersama', 'Murid perlu menjaga kemudahan sekolah.'],
    ],
  },
  {
    id: 'keselamatan-f1-depth-001',
    sortOrder: 106,
    title: 'Keselamatan Diri',
    form: 1,
    theme: 'Keselamatan',
    passageTitle: 'Berhati-hati di Jalan Raya',
    passage:
      'Murid perlu menggunakan jejantas apabila melintas jalan yang sibuk. Mereka juga harus memandang ke kiri dan kanan sebelum melintas. Sikap berhati-hati dapat mengelakkan kemalangan dan memastikan perjalanan ke sekolah lebih selamat.',
    q1: 'Apakah idea utama petikan?',
    a1: 'Murid perlu berhati-hati semasa melintas jalan.',
    q2: 'Apakah contoh langkah keselamatan yang diberikan?',
    a2: 'Menggunakan jejantas dan memandang kiri kanan.',
    q3: 'Mengapakah sikap berhati-hati penting?',
    a3: 'Untuk mengelakkan kemalangan.',
    vocabulary: [
      ['jejantas', 'jambatan khas untuk pejalan kaki melintas jalan', 'Murid menggunakan jejantas.'],
      ['sibuk', 'keadaan yang banyak kenderaan atau orang', 'Jalan itu sibuk pada waktu pagi.'],
      ['kemalangan', 'kejadian buruk yang tidak diduga', 'Berhati-hati dapat mengelakkan kemalangan.'],
    ],
  },
  {
    id: 'alam-f1-depth-001',
    sortOrder: 107,
    title: 'Alam Sekitar',
    form: 1,
    theme: 'Alam Sekitar',
    passageTitle: 'Bawa Bekas Makanan Sendiri',
    passage:
      'Sekolah menggalakkan murid membawa bekas makanan sendiri ke kantin. Amalan ini dapat mengurangkan penggunaan plastik sekali guna. Selain itu, kawasan kantin menjadi lebih bersih kerana jumlah sampah berkurang.',
    q1: 'Apakah idea utama petikan?',
    a1: 'Murid digalakkan membawa bekas makanan sendiri.',
    q2: 'Apakah kesan amalan tersebut?',
    a2: 'Penggunaan plastik dan jumlah sampah berkurang.',
    q3: 'Mengapakah kantin menjadi lebih bersih?',
    a3: 'Kerana jumlah sampah berkurang.',
    vocabulary: [
      ['menggalakkan', 'memberi dorongan supaya sesuatu dilakukan', 'Sekolah menggalakkan amalan baik.'],
      ['sekali guna', 'digunakan sekali sahaja', 'Plastik sekali guna mencemarkan alam.'],
      ['berkurang', 'menjadi kurang', 'Jumlah sampah berkurang.'],
    ],
  },
  {
    id: 'sahsiah-f1-depth-001',
    sortOrder: 108,
    title: 'Sahsiah Murid',
    form: 1,
    theme: 'Jati Diri',
    passageTitle: 'Menepati Masa',
    passage:
      'Ravi sentiasa tiba di sekolah sebelum loceng berbunyi. Dia menyediakan beg sekolah pada waktu malam supaya tidak tergesa-gesa pada waktu pagi. Sikap menepati masa membantu Ravi memulakan pembelajaran dengan tenang.',
    q1: 'Apakah idea utama petikan?',
    a1: 'Ravi mengamalkan sikap menepati masa.',
    q2: 'Bagaimanakah Ravi mengelakkan dirinya tergesa-gesa?',
    a2: 'Dia menyediakan beg sekolah pada waktu malam.',
    q3: 'Apakah manfaat menepati masa kepada Ravi?',
    a3: 'Dia dapat memulakan pembelajaran dengan tenang.',
    vocabulary: [
      ['loceng', 'alat yang berbunyi sebagai tanda waktu', 'Loceng sekolah berbunyi pada pukul tujuh.'],
      ['tergesa-gesa', 'melakukan sesuatu dengan terburu-buru', 'Ravi tidak tergesa-gesa pada waktu pagi.'],
      ['tenang', 'tidak gelisah atau cemas', 'Dia belajar dengan tenang.'],
    ],
  },
  {
    id: 'sukan-f2-depth-001',
    sortOrder: 205,
    title: 'Sukan Sekolah',
    form: 2,
    theme: 'Kesihatan dan Sukan',
    passageTitle: 'Latihan Rumah Sukan',
    passage:
      'Rumah Biru mengadakan latihan larian setiap petang Selasa. Peserta berlatih memanaskan badan, berlari mengikut jarak dan menyejukkan badan selepas latihan. Latihan yang teratur membantu murid meningkatkan stamina serta mengelakkan kecederaan.',
    q1: 'Apakah maksud keseluruhan petikan?',
    a1: 'Latihan rumah sukan membantu murid bersedia dengan selamat.',
    q2: 'Bilakah latihan Rumah Biru diadakan?',
    a2: 'Setiap petang Selasa.',
    q3: 'Apakah manfaat latihan yang teratur?',
    a3: 'Meningkatkan stamina dan mengelakkan kecederaan.',
    vocabulary: [
      ['stamina', 'daya tahan tubuh', 'Latihan meningkatkan stamina murid.'],
      ['teratur', 'tersusun dengan baik', 'Latihan yang teratur lebih berkesan.'],
      ['kecederaan', 'luka atau sakit pada tubuh', 'Pemanasan badan mengelakkan kecederaan.'],
    ],
  },
  {
    id: 'kewangan-f2-depth-001',
    sortOrder: 206,
    title: 'Bijak Berbelanja',
    form: 2,
    theme: 'Pengurusan Kewangan',
    passageTitle: 'Senarai Belanja Mingguan',
    passage:
      'Lina menyediakan senarai belanja sebelum ke kedai buku. Dia membeli pen, buku nota dan fail yang benar-benar diperlukan sahaja. Dengan cara ini, Lina dapat mengawal perbelanjaan dan menyimpan baki wang sakunya.',
    q1: 'Apakah maksud keseluruhan petikan?',
    a1: 'Lina berbelanja secara bijak dengan membuat senarai.',
    q2: 'Apakah barang yang dibeli oleh Lina?',
    a2: 'Pen, buku nota dan fail.',
    q3: 'Apakah kesan membuat senarai belanja?',
    a3: 'Perbelanjaan dapat dikawal dan baki wang dapat disimpan.',
    vocabulary: [
      ['senarai', 'catatan beberapa perkara', 'Lina menyediakan senarai belanja.'],
      ['mengawal', 'menjaga supaya tidak berlebihan', 'Dia mengawal perbelanjaan.'],
      ['baki', 'lebihan selepas digunakan', 'Baki wang disimpan.'],
    ],
  },
  {
    id: 'alam-f2-depth-001',
    sortOrder: 207,
    title: 'Sayangi Sungai',
    form: 2,
    theme: 'Alam Sekitar',
    passageTitle: 'Program Sungai Angkat',
    passage:
      'Kelab Pencinta Alam memilih sebatang sungai berhampiran sekolah sebagai sungai angkat. Ahli kelab memantau kebersihan sungai dan menampal poster larangan membuang sampah. Program ini mendidik murid supaya menjaga sumber air.',
    q1: 'Apakah maksud keseluruhan petikan?',
    a1: 'Murid menjaga kebersihan sungai melalui program sungai angkat.',
    q2: 'Apakah tindakan ahli kelab?',
    a2: 'Memantau kebersihan sungai dan menampal poster larangan.',
    q3: 'Apakah nilai yang diterapkan melalui program ini?',
    a3: 'Menjaga sumber air.',
    vocabulary: [
      ['sungai angkat', 'sungai yang dijaga oleh kumpulan tertentu', 'Kelab itu memilih sungai angkat.'],
      ['memantau', 'memerhati atau mengawasi', 'Murid memantau kebersihan sungai.'],
      ['sumber', 'asal atau punca sesuatu', 'Sungai ialah sumber air.'],
    ],
  },
  {
    id: 'kerjaya-f2-depth-001',
    sortOrder: 208,
    title: 'Dunia Kerjaya',
    form: 2,
    theme: 'Kerjaya',
    passageTitle: 'Lawatan ke Balai Bomba',
    passage:
      'Murid Tingkatan Dua melawat balai bomba untuk mengetahui tugas anggota bomba. Mereka melihat peralatan keselamatan dan mendengar penerangan tentang cara menyelamatkan mangsa kebakaran. Lawatan itu membuka minat murid terhadap kerjaya yang berani dan berdisiplin.',
    q1: 'Apakah maksud keseluruhan petikan?',
    a1: 'Lawatan ke balai bomba memperkenalkan murid kepada tugas bomba.',
    q2: 'Apakah yang dilihat oleh murid?',
    a2: 'Peralatan keselamatan.',
    q3: 'Apakah kesan lawatan itu?',
    a3: 'Murid berminat terhadap kerjaya yang berani dan berdisiplin.',
    vocabulary: [
      ['balai bomba', 'tempat anggota bomba bertugas', 'Murid melawat balai bomba.'],
      ['peralatan', 'alat yang digunakan untuk kerja tertentu', 'Peralatan keselamatan dipamerkan.'],
      ['berdisiplin', 'mematuhi peraturan', 'Anggota bomba perlu berdisiplin.'],
    ],
  },
  {
    id: 'kesihatan-f3-depth-001',
    sortOrder: 305,
    title: 'Infografik Kesihatan',
    form: 3,
    theme: 'Kesihatan',
    passageTitle: 'Infografik Tidur Berkualiti',
    passage:
      'Infografik menunjukkan tiga panduan tidur berkualiti, iaitu tidur pada waktu tetap, mengurangkan penggunaan telefon sebelum tidur dan memastikan bilik selesa. Bahan grafik itu menegaskan bahawa tidur yang cukup membantu murid lebih fokus di sekolah.',
    q1: 'Apakah maksud keseluruhan infografik?',
    a1: 'Tidur berkualiti membantu murid lebih fokus.',
    q2: 'Apakah satu panduan tidur berkualiti?',
    a2: 'Mengurangkan penggunaan telefon sebelum tidur.',
    q3: 'Apakah ulasan sesuai tentang bahan grafik itu?',
    a3: 'Infografik memberikan panduan mudah untuk menjaga kesihatan tidur.',
    vocabulary: [
      ['berkualiti', 'mempunyai mutu yang baik', 'Tidur berkualiti penting untuk kesihatan.'],
      ['fokus', 'menumpukan perhatian', 'Murid lebih fokus selepas cukup tidur.'],
      ['selesa', 'keadaan yang menyenangkan', 'Bilik tidur perlu selesa.'],
    ],
  },
  {
    id: 'sejarah-f3-depth-001',
    sortOrder: 306,
    title: 'Carta Warisan',
    form: 3,
    theme: 'Warisan',
    passageTitle: 'Carta Permainan Tradisional',
    passage:
      'Carta bergambar memaparkan congkak, batu seremban dan wau sebagai permainan tradisional. Setiap gambar disertakan nota ringkas tentang cara permainan itu dimainkan. Secara keseluruhannya, carta itu memperkenalkan warisan permainan yang wajar dihargai oleh generasi muda.',
    q1: 'Apakah maksud keseluruhan carta?',
    a1: 'Carta memperkenalkan permainan tradisional kepada generasi muda.',
    q2: 'Apakah permainan yang dipaparkan?',
    a2: 'Congkak, batu seremban dan wau.',
    q3: 'Apakah ulasan yang sesuai?',
    a3: 'Carta itu membantu murid mengenali warisan permainan tradisional.',
    vocabulary: [
      ['tradisional', 'berkaitan adat lama atau warisan', 'Wau ialah permainan tradisional.'],
      ['disertakan', 'diletakkan bersama-sama', 'Gambar disertakan nota ringkas.'],
      ['generasi', 'kumpulan manusia pada zaman tertentu', 'Generasi muda perlu menghargai warisan.'],
    ],
  },
  {
    id: 'pemakanan-f3-depth-001',
    sortOrder: 307,
    title: 'Graf Pemakanan',
    form: 3,
    theme: 'Pemakanan',
    passageTitle: 'Graf Pilihan Minuman Murid',
    passage:
      'Graf menunjukkan air kosong menjadi pilihan minuman tertinggi dalam kalangan murid, diikuti jus buah dan minuman berkarbonat. Nota pada graf menyatakan bahawa air kosong membantu badan kekal segar. Secara keseluruhannya, graf menggalakkan murid memilih minuman yang lebih sihat.',
    q1: 'Apakah maksud keseluruhan graf?',
    a1: 'Graf menggalakkan murid memilih minuman yang lebih sihat.',
    q2: 'Minuman manakah menjadi pilihan tertinggi?',
    a2: 'Air kosong.',
    q3: 'Apakah ulasan sesuai tentang graf itu?',
    a3: 'Graf itu menyampaikan mesej kesihatan secara mudah difahami.',
    vocabulary: [
      ['berkarbonat', 'mengandungi gas karbon dioksida', 'Minuman berkarbonat perlu diambil secara sederhana.'],
      ['segar', 'berasa nyaman atau bertenaga', 'Air kosong membantu badan kekal segar.'],
      ['menggalakkan', 'mendorong melakukan sesuatu', 'Graf itu menggalakkan pilihan sihat.'],
    ],
  },
  {
    id: 'pengangkutan-f3-depth-001',
    sortOrder: 308,
    title: 'Infografik Pengangkutan',
    form: 3,
    theme: 'Pengangkutan',
    passageTitle: 'Infografik Laluan Bas Sekolah',
    passage:
      'Infografik laluan bas sekolah menunjukkan tiga hentian utama sebelum tiba di sekolah. Masa anggaran tiba di setiap hentian turut dipaparkan. Bahan grafik ini membantu murid merancang masa menunggu bas dengan lebih teratur.',
    q1: 'Apakah maksud keseluruhan infografik?',
    a1: 'Infografik membantu murid memahami laluan dan masa bas sekolah.',
    q2: 'Apakah maklumat yang dipaparkan?',
    a2: 'Hentian utama dan masa anggaran tiba.',
    q3: 'Apakah ulasan yang sesuai?',
    a3: 'Infografik itu berguna kerana membantu murid merancang masa.',
    vocabulary: [
      ['hentian', 'tempat kenderaan berhenti', 'Bas berhenti di hentian utama.'],
      ['anggaran', 'perkiraan hampir tepat', 'Masa anggaran dipaparkan.'],
      ['teratur', 'tersusun dengan baik', 'Murid merancang masa dengan teratur.'],
    ],
  },
  {
    id: 'pendidikan-f4-depth-001',
    sortOrder: 405,
    title: 'Ulasan Pendidikan',
    form: 4,
    theme: 'Pendidikan',
    passageTitle: 'Pembelajaran Sepanjang Hayat',
    passage:
      'Penulis berpendapat bahawa pembelajaran tidak sepatutnya berhenti selepas peperiksaan. Seseorang perlu terus membaca, bertanya dan mencuba kemahiran baharu untuk menyesuaikan diri dengan perubahan zaman. Pandangan ini menunjukkan bahawa ilmu penting untuk kehidupan, bukan sekadar markah.',
    q1: 'Apakah pandangan utama penulis?',
    a1: 'Pembelajaran perlu diteruskan sepanjang hayat.',
    q2: 'Apakah alasan penulis?',
    a2: 'Ilmu membantu seseorang menyesuaikan diri dengan perubahan zaman.',
    q3: 'Apakah ulasan rasional tentang pandangan itu?',
    a3: 'Pandangan itu munasabah kerana ilmu berguna dalam kehidupan.',
    vocabulary: [
      ['sepanjang hayat', 'berterusan sepanjang kehidupan', 'Pembelajaran sepanjang hayat penting.'],
      ['menyesuaikan diri', 'membiasakan diri dengan keadaan baharu', 'Kita perlu menyesuaikan diri dengan perubahan.'],
      ['sekadar', 'hanya atau semata-mata', 'Ilmu bukan sekadar untuk markah.'],
    ],
  },
  {
    id: 'kesihatan-f4-depth-001',
    sortOrder: 406,
    title: 'Ulasan Kesihatan',
    form: 4,
    theme: 'Kesihatan',
    passageTitle: 'Rehat dan Produktiviti',
    passage:
      'Penulis menyatakan bahawa rehat yang cukup dapat meningkatkan produktiviti murid. Murid yang tidur mencukupi lebih mudah memberi tumpuan dan mengurus emosi. Oleh itu, penulis menasihati remaja supaya tidak mengorbankan waktu tidur untuk hiburan digital.',
    q1: 'Apakah pandangan utama penulis?',
    a1: 'Rehat yang cukup meningkatkan produktiviti murid.',
    q2: 'Apakah kesan tidur mencukupi?',
    a2: 'Murid lebih mudah memberi tumpuan dan mengurus emosi.',
    q3: 'Apakah ulasan rasional tentang nasihat penulis?',
    a3: 'Nasihat itu wajar kerana tidur penting untuk kesihatan dan pembelajaran.',
    vocabulary: [
      ['produktiviti', 'keupayaan menghasilkan kerja dengan baik', 'Rehat meningkatkan produktiviti.'],
      ['tumpuan', 'perhatian terhadap sesuatu', 'Murid memberi tumpuan semasa belajar.'],
      ['mengorbankan', 'melepaskan sesuatu demi perkara lain', 'Jangan mengorbankan tidur untuk hiburan.'],
    ],
  },
  {
    id: 'masyarakat-f4-depth-001',
    sortOrder: 407,
    title: 'Ulasan Masyarakat',
    form: 4,
    theme: 'Masyarakat',
    passageTitle: 'Semangat Kejiranan',
    passage:
      'Penulis berpendapat bahawa semangat kejiranan masih relevan dalam kehidupan moden. Jiran yang saling mengenali dapat membantu ketika kecemasan dan menjaga keselamatan kawasan bersama-sama. Penulis menegaskan bahawa teknologi tidak harus menggantikan hubungan manusia.',
    q1: 'Apakah pandangan utama penulis?',
    a1: 'Semangat kejiranan masih relevan dalam kehidupan moden.',
    q2: 'Apakah alasan penulis?',
    a2: 'Jiran boleh membantu ketika kecemasan dan menjaga keselamatan.',
    q3: 'Apakah ulasan yang sesuai?',
    a3: 'Pandangan itu rasional kerana hubungan jiran memberi manfaat sosial.',
    vocabulary: [
      ['relevan', 'masih sesuai atau berkaitan', 'Semangat kejiranan masih relevan.'],
      ['kecemasan', 'keadaan genting yang memerlukan tindakan segera', 'Jiran membantu ketika kecemasan.'],
      ['menggantikan', 'mengambil tempat sesuatu', 'Teknologi tidak menggantikan hubungan manusia.'],
    ],
  },
  {
    id: 'teknologi-f4-depth-001',
    sortOrder: 408,
    title: 'Ulasan Teknologi',
    form: 4,
    theme: 'Teknologi',
    passageTitle: 'Kecerdasan Buatan dalam Pembelajaran',
    passage:
      'Penulis berpandangan bahawa kecerdasan buatan boleh membantu murid mengulang kaji dengan lebih terarah. Aplikasi pembelajaran dapat mencadangkan latihan berdasarkan kelemahan murid. Namun, penulis mengingatkan bahawa teknologi perlu digunakan sebagai alat sokongan, bukan pengganti usaha sendiri.',
    q1: 'Apakah pandangan utama penulis?',
    a1: 'Kecerdasan buatan boleh membantu ulang kaji murid.',
    q2: 'Apakah manfaat aplikasi pembelajaran?',
    a2: 'Mencadangkan latihan berdasarkan kelemahan murid.',
    q3: 'Apakah ulasan rasional tentang pandangan penulis?',
    a3: 'Teknologi berguna jika digunakan sebagai sokongan kepada usaha sendiri.',
    vocabulary: [
      ['kecerdasan buatan', 'teknologi yang meniru keupayaan berfikir manusia', 'Kecerdasan buatan membantu pembelajaran.'],
      ['terarah', 'mempunyai hala atau fokus yang jelas', 'Ulang kaji menjadi lebih terarah.'],
      ['sokongan', 'bantuan untuk menguatkan sesuatu usaha', 'Aplikasi ialah alat sokongan.'],
    ],
  },
  {
    id: 'pendidikan-f5-depth-001',
    sortOrder: 505,
    title: 'Inferens Pendidikan',
    form: 5,
    theme: 'Pendidikan',
    passageTitle: 'Kelas Bimbingan Rakan',
    passage:
      'Sekumpulan murid cemerlang mengadakan kelas bimbingan selepas sekolah untuk membantu rakan yang lemah dalam penulisan. Mereka berkongsi teknik merangka isi dan menyemak karangan bersama-sama. Selepas beberapa minggu, lebih ramai murid berani menghantar latihan karangan.',
    q1: 'Apakah inferens tentang kelas bimbingan itu?',
    a1: 'Kelas bimbingan membantu meningkatkan keyakinan murid.',
    q2: 'Apakah bukti yang menyokong inferens?',
    a2: 'Lebih ramai murid berani menghantar latihan karangan.',
    q3: 'Apakah nilai yang boleh diinferenskan?',
    a3: 'Kerjasama dan prihatin terhadap rakan.',
    vocabulary: [
      ['bimbingan', 'tunjuk ajar atau panduan', 'Murid mengikuti kelas bimbingan.'],
      ['merangka', 'menyusun rangka atau pelan', 'Mereka belajar merangka isi.'],
      ['keyakinan', 'rasa percaya kepada kemampuan diri', 'Latihan meningkatkan keyakinan.'],
    ],
  },
  {
    id: 'alam-f5-depth-001',
    sortOrder: 506,
    title: 'Inferens Alam Sekitar',
    form: 5,
    theme: 'Alam Sekitar',
    passageTitle: 'Kebun Bandar',
    passage:
      'Penduduk pangsapuri menggunakan kawasan kosong untuk menanam sayur secara bergilir-gilir. Mereka berkongsi hasil tanaman dan mengadakan jadual penjagaan. Kawasan yang dahulu terbiar kini menjadi tempat penduduk berkumpul pada hujung minggu.',
    q1: 'Apakah inferens tentang projek kebun bandar?',
    a1: 'Projek itu mengeratkan hubungan penduduk.',
    q2: 'Apakah bukti yang menyokong inferens?',
    a2: 'Penduduk berkongsi hasil dan berkumpul pada hujung minggu.',
    q3: 'Apakah kesan kawasan kosong dimanfaatkan?',
    a3: 'Kawasan terbiar menjadi ruang komuniti yang berguna.',
    vocabulary: [
      ['pangsapuri', 'bangunan kediaman bertingkat', 'Penduduk pangsapuri menanam sayur.'],
      ['terbiar', 'tidak dijaga atau digunakan', 'Kawasan terbiar dimanfaatkan.'],
      ['bergilir-gilir', 'melakukan sesuatu mengikut giliran', 'Penduduk menjaga kebun bergilir-gilir.'],
    ],
  },
  {
    id: 'kerjaya-f5-depth-001',
    sortOrder: 507,
    title: 'Inferens Kerjaya',
    form: 5,
    theme: 'Kerjaya',
    passageTitle: 'Latihan Temu Duga',
    passage:
      'Guru kaunseling mengadakan latihan temu duga untuk murid Tingkatan Lima. Murid belajar memperkenalkan diri, menjawab soalan dengan sopan dan menyusun dokumen penting. Latihan itu membuatkan murid lebih bersedia menghadapi peluang biasiswa dan pekerjaan sambilan.',
    q1: 'Apakah inferens tentang latihan temu duga?',
    a1: 'Latihan itu menyediakan murid menghadapi peluang masa depan.',
    q2: 'Apakah bukti yang menyokong inferens?',
    a2: 'Murid belajar memperkenalkan diri dan menyusun dokumen.',
    q3: 'Mengapakah latihan itu penting?',
    a3: 'Murid menjadi lebih yakin dan bersedia.',
    vocabulary: [
      ['temu duga', 'sesi soal jawab untuk menilai seseorang', 'Murid menjalani latihan temu duga.'],
      ['biasiswa', 'bantuan kewangan untuk pendidikan', 'Biasiswa membantu pelajar melanjutkan pelajaran.'],
      ['dokumen', 'surat atau rekod penting', 'Murid menyusun dokumen penting.'],
    ],
  },
  {
    id: 'negara-f5-depth-001',
    sortOrder: 508,
    title: 'Inferens Kenegaraan',
    form: 5,
    theme: 'Masyarakat dan Negara',
    passageTitle: 'Program Sukarelawan Bencana',
    passage:
      'Selepas banjir melanda sebuah daerah, pasukan sukarelawan belia membantu mengagihkan makanan dan membersihkan rumah penduduk. Mereka bekerja hingga lewat petang walaupun keletihan. Tindakan itu menunjukkan bahawa semangat kemanusiaan masih kuat dalam kalangan generasi muda.',
    q1: 'Apakah inferens tentang sukarelawan belia?',
    a1: 'Mereka prihatin dan sanggup membantu masyarakat.',
    q2: 'Apakah bukti yang menyokong inferens?',
    a2: 'Mereka mengagihkan makanan dan membersihkan rumah penduduk.',
    q3: 'Apakah nilai utama yang ditunjukkan?',
    a3: 'Semangat kemanusiaan.',
    vocabulary: [
      ['bencana', 'kejadian buruk seperti banjir atau ribut', 'Banjir ialah satu bencana.'],
      ['mengagihkan', 'membahagikan kepada orang ramai', 'Sukarelawan mengagihkan makanan.'],
      ['kemanusiaan', 'sifat prihatin terhadap manusia lain', 'Mereka menunjukkan semangat kemanusiaan.'],
    ],
  },
]

function createDepthLesson(seed: DepthLessonSeed): Lesson {
  const meta = formMeta[seed.form]

  return {
    id: seed.id,
    sortOrder: seed.sortOrder,
    title: seed.title,
    form: seed.form,
    strand: 'Membaca',
    skill: meta.skill,
    learningObjective:
      `Murid dapat menjawab soalan ${meta.skill.toLowerCase()} berdasarkan bahan bacaan pendek.`,
    readingTip:
      'Baca bahan dengan teliti, kenal pasti kata kunci dan pastikan jawapan disokong oleh maklumat dalam bahan.',
    estimatedMinutes: 10,
    curriculumMeta: {
      subject: 'Bahasa Melayu',
      curriculum: 'KSSM',
      form: seed.form,
      theme: seed.theme,
      unit: 'Latihan Membaca Lanjutan',
      learningArea: 'Membaca',
      contentStandard: meta.contentStandard,
      learningStandard: meta.learningStandard,
    },
    curriculumReferences: {
      standardIds: [meta.standardId],
      textbookReferenceIds: [meta.textbookReferenceId],
    },
    passageTitle: seed.passageTitle,
    passage: seed.passage,
    vocabulary: seed.vocabulary.map(([word, meaning, example]) => ({
      word,
      meaning,
      example,
    })),
    questions: [
      {
        id: 'q1',
        prompt: seed.q1,
        options: [
          { id: 'a', text: seed.a1 },
          { id: 'b', text: 'Maklumat ini tidak tepat berdasarkan bahan.' },
          { id: 'c', text: 'Jawapan ini tidak berkaitan dengan bahan.' },
        ],
        correctOptionId: 'a',
        explanation:
          'Jawapan ini disokong secara langsung atau munasabah oleh maklumat dalam bahan.',
      },
      {
        id: 'q2',
        prompt: seed.q2,
        options: [
          { id: 'a', text: seed.a2 },
          { id: 'b', text: 'Perkara ini tidak disebut dalam bahan.' },
          { id: 'c', text: 'Pilihan ini bercanggah dengan bahan.' },
        ],
        correctOptionId: 'a',
        explanation:
          'Maklumat tersebut boleh dikenal pasti melalui bacaan teliti.',
      },
      {
        id: 'q3',
        prompt: seed.q3,
        options: [
          { id: 'a', text: seed.a3 },
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
      `Kata baharu: ${seed.vocabulary.map(([word]) => word).join(', ')}.`,
    ],
  }
}

export const launchDepthLessons = seeds.map(createDepthLesson)
