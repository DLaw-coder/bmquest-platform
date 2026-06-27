import { Link } from 'react-router-dom'
import { appInfo } from '../config/appInfo'
import { useLanguage } from '../context/LanguageContext'

const content = {
  en: {
    eyebrow: 'Privacy & Safety',
    title: 'Privacy Policy',
    summary:
      'BM Quest KSSM is a learning app for KSSM Bahasa Malaysia students. This policy explains what information the app uses and how it is protected.',
    effective: 'Effective: 27 June 2026',
    sections: [
      {
        title: 'Information we collect',
        paragraphs: [
          'When you sign in with Google, we receive your name, email address, profile photo and account identifier. We also store the learner profile you create, including nickname, Tingkatan and language preference.',
          'We store lesson progress, attempts, scores, practice time, achievements and arcade results so learning can continue across devices. Arcade leaderboards display the learner nickname, not the Google account name.',
          'We collect limited app-use events such as app opening, lesson starts and completions, Tingkatan, score, platform and app version. These analytics records do not contain answers, names, nicknames or email addresses.',
        ],
      },
      {
        title: 'How information is used',
        paragraphs: [
          'Information is used to authenticate learners, synchronise progress, personalise recommendations, award achievements, operate leaderboards, improve lessons, measure app reliability and protect the service from misuse.',
          'BM Quest KSSM does not sell personal information and does not use learner information for advertising.',
        ],
      },
      {
        title: 'Storage, sharing and retention',
        paragraphs: [
          'The app uses Google Firebase services, including Authentication, Cloud Firestore and Hosting. Data may be processed by Google as our service provider and may be disclosed where required by law.',
          'Account and learning records are retained while needed to provide the service or until a valid deletion request is completed. Raw engagement events carry a 90-day expiry date; deletion is performed according to the project retention process. Non-identifying aggregate trends may be retained longer.',
        ],
      },
      {
        title: 'Students and families',
        paragraphs: [
          'BM Quest KSSM is intended to support secondary-school learning. Parents or guardians should supervise younger learners and help them choose a classroom-safe nickname. Guest activity remains on the current device and is not synchronised to an account.',
        ],
      },
      {
        title: 'Your choices and requests',
        paragraphs: [
          'You may use guest mode, change the interface language and nickname, or sign out. To request access, correction or deletion of account and learning data, contact the publisher through the official BM Quest KSSM app listing or distribution channel.',
        ],
      },
      {
        title: 'Security and policy changes',
        paragraphs: [
          'We use Firebase security rules, access controls and application-integrity safeguards. No online service can guarantee absolute security.',
          'This policy may be updated as BM Quest KSSM develops. Material changes will be reflected on this page with a revised effective date.',
        ],
      },
    ],
    publisher: 'Publisher: Danny Law, Effectuate Biz Productions',
    contact: 'Privacy contact',
    back: 'Return to BM Quest KSSM',
  },
  ms: {
    eyebrow: 'Privasi & Keselamatan',
    title: 'Dasar Privasi',
    summary:
      'BM Quest KSSM ialah aplikasi pembelajaran untuk murid Bahasa Malaysia KSSM. Dasar ini menerangkan maklumat yang digunakan oleh aplikasi dan cara maklumat tersebut dilindungi.',
    effective: 'Berkuat kuasa: 27 Jun 2026',
    sections: [
      {
        title: 'Maklumat yang kami kumpulkan',
        paragraphs: [
          'Apabila anda log masuk dengan Google, kami menerima nama, alamat e-mel, foto profil dan pengecam akaun anda. Kami juga menyimpan profil murid yang anda cipta, termasuk nama panggilan, Tingkatan dan bahasa pilihan.',
          'Kami menyimpan kemajuan pelajaran, percubaan, skor, masa latihan, pencapaian dan keputusan arked supaya pembelajaran boleh diteruskan pada peranti lain. Papan kedudukan arked memaparkan nama panggilan murid, bukan nama akaun Google.',
          'Kami mengumpulkan peristiwa penggunaan aplikasi yang terhad seperti aplikasi dibuka, pelajaran dimulakan dan diselesaikan, Tingkatan, skor, platform dan versi aplikasi. Rekod analitik ini tidak mengandungi jawapan, nama, nama panggilan atau alamat e-mel.',
        ],
      },
      {
        title: 'Cara maklumat digunakan',
        paragraphs: [
          'Maklumat digunakan untuk mengesahkan murid, menyelaraskan kemajuan, memperibadikan cadangan, memberikan pencapaian, mengendalikan papan kedudukan, menambah baik pelajaran, mengukur kebolehpercayaan aplikasi dan melindungi perkhidmatan daripada penyalahgunaan.',
          'BM Quest KSSM tidak menjual maklumat peribadi dan tidak menggunakan maklumat murid untuk pengiklanan.',
        ],
      },
      {
        title: 'Penyimpanan, perkongsian dan tempoh simpanan',
        paragraphs: [
          'Aplikasi ini menggunakan perkhidmatan Google Firebase, termasuk Authentication, Cloud Firestore dan Hosting. Data mungkin diproses oleh Google sebagai penyedia perkhidmatan kami dan mungkin didedahkan apabila diwajibkan oleh undang-undang.',
          'Rekod akaun dan pembelajaran disimpan selagi diperlukan untuk menyediakan perkhidmatan atau sehingga permintaan pemadaman yang sah diselesaikan. Peristiwa penggunaan mentah mempunyai tarikh luput 90 hari; pemadaman dilaksanakan mengikut proses penyimpanan projek. Trend agregat tanpa identiti boleh disimpan lebih lama.',
        ],
      },
      {
        title: 'Murid dan keluarga',
        paragraphs: [
          'BM Quest KSSM bertujuan menyokong pembelajaran sekolah menengah. Ibu bapa atau penjaga digalakkan memantau murid yang lebih muda dan membantu mereka memilih nama panggilan yang sesuai untuk kelas. Aktiviti tetamu kekal pada peranti semasa dan tidak diselaraskan kepada akaun.',
        ],
      },
      {
        title: 'Pilihan dan permintaan anda',
        paragraphs: [
          'Anda boleh menggunakan mod tetamu, menukar bahasa antara muka dan nama panggilan, atau log keluar. Untuk meminta akses, pembetulan atau pemadaman data akaun dan pembelajaran, hubungi penerbit melalui penyenaraian aplikasi atau saluran pengedaran rasmi BM Quest KSSM.',
        ],
      },
      {
        title: 'Keselamatan dan perubahan dasar',
        paragraphs: [
          'Kami menggunakan peraturan keselamatan Firebase, kawalan akses dan perlindungan integriti aplikasi. Tiada perkhidmatan dalam talian yang boleh menjamin keselamatan mutlak.',
          'Dasar ini mungkin dikemas kini seiring perkembangan BM Quest KSSM. Perubahan penting akan dipaparkan pada halaman ini berserta tarikh kuat kuasa yang disemak.',
        ],
      },
    ],
    publisher: 'Penerbit: Danny Law, Effectuate Biz Productions',
    contact: 'Hubungan privasi',
    back: 'Kembali ke BM Quest KSSM',
  },
} as const

function PrivacyPage() {
  const { language } = useLanguage()
  const copy = content[language]

  return (
    <section className="privacy-page">
      <div className="dashboard-hero privacy-hero">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="subtitle">{copy.summary}</p>
          <p className="privacy-effective">{copy.effective}</p>
        </div>
        <div className="dashboard-icon">🛡️</div>
      </div>

      <div className="privacy-sections">
        {copy.sections.map((section) => (
          <article className="dashboard-card privacy-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>

      <article className="dashboard-card privacy-publisher">
        <h2>{appInfo.name}</h2>
        <p>{copy.publisher}</p>
        <p>
          {copy.contact}:{' '}
          <a className="inline-link privacy-contact" href="mailto:contact@effectuate.biz">
            contact@effectuate.biz
          </a>
        </p>
        <p>{appInfo.version}</p>
        <Link className="result-action primary-action" to="/">
          {copy.back}
        </Link>
      </article>
    </section>
  )
}

export default PrivacyPage
