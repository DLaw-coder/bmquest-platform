import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type AppLanguage = 'en' | 'ms'

type TranslationKey =
  | 'app.platform'
  | 'app.loading'
  | 'app.loadingSubtitle'
  | 'auth.signOut'
  | 'language.switchToEnglish'
  | 'language.switchToMalay'
  | 'nav.home'
  | 'nav.read'
  | 'nav.badges'
  | 'nav.progress'
  | 'nav.settings'
  | 'welcome.title'
  | 'welcome.subtitle'
  | 'welcome.google'
  | 'welcome.guest'
  | 'onboarding.title'
  | 'onboarding.subtitle'
  | 'onboarding.nickname'
  | 'onboarding.nicknameHelp'
  | 'onboarding.currentForm'
  | 'common.form'
  | 'onboarding.preferredLanguage'
  | 'onboarding.englishInterface'
  | 'onboarding.malayInterface'
  | 'onboarding.saving'
  | 'onboarding.create'
  | 'home.title'
  | 'home.guestLearner'
  | 'home.todayFocus'
  | 'home.defaultFocus'
  | 'home.coreMission'
  | 'home.optionalBooster'
  | 'home.startMission'
  | 'home.missionComingSoon'
  | 'home.carRideMode'
  | 'home.streak'
  | 'home.average'
  | 'home.lesson'
  | 'home.lessons'
  | 'home.readingRank'
  | 'home.sessionsCompleted'
  | 'home.weeklyGoals'
  | 'home.weeklyMissionsCompleted'
  | 'home.recommendation'
  | 'home.continueLearning'
  | 'home.lessonsPreparing'
  | 'recommendation.reviewTitle'
  | 'recommendation.reviewDescription'
  | 'recommendation.challengeTitle'
  | 'recommendation.challengeDescription'
  | 'recommendation.newTitle'
  | 'recommendation.newDescription'
  | 'recommendation.masteryTitle'
  | 'recommendation.masteryDescription'
  | 'home.currentLevel'
  | 'home.readingProgress'
  | 'home.achievements'
  | 'student.title'
  | 'student.subtitle'
  | 'student.browseCurriculum'
  | 'curriculum.eyebrow'
  | 'curriculum.title'
  | 'curriculum.subtitle'
  | 'curriculum.unit'
  | 'curriculum.start'
  | 'curriculum.lessons'
  | 'curriculum.noLessons'
  | 'curriculum.noLessonsSubtitle'
  | 'progress.eyebrow'
  | 'progress.title'
  | 'progress.subtitle'
  | 'progress.overall'
  | 'progress.completed'
  | 'progress.averageScore'
  | 'progress.acrossAttempts'
  | 'progress.mastered'
  | 'progress.masteredSubtitle'
  | 'progress.unlockedBadges'
  | 'progress.viewGallery'
  | 'progress.lessonMastery'
  | 'progress.noLessons'
  | 'progress.attempt'
  | 'progress.attempts'
  | 'progress.best'
  | 'progress.latest'
  | 'progress.recentActivity'
  | 'progress.noAttempts'
  | 'progress.bestScore'
  | 'progress.bestScoreSubtitle'
  | 'mastery.notStarted'
  | 'mastery.learning'
  | 'mastery.improving'
  | 'mastery.mastered'
  | 'badges.eyebrow'
  | 'badges.title'
  | 'badges.subtitle'
  | 'badges.unlocked'
  | 'badges.locked'
  | 'badges.firstLessonTitle'
  | 'badges.firstLessonDescription'
  | 'badges.perfectScoreTitle'
  | 'badges.perfectScoreDescription'
  | 'badges.readingExplorerTitle'
  | 'badges.readingExplorerDescription'
  | 'badges.fiveDayStreakTitle'
  | 'badges.fiveDayStreakDescription'
  | 'settings.eyebrow'
  | 'settings.title'
  | 'settings.subtitle'
  | 'settings.bmQuestName'
  | 'settings.guestMode'
  | 'settings.googleActive'
  | 'settings.learningProfile'
  | 'settings.plan'
  | 'settings.freePlan'
  | 'settings.premiumPlan'
  | 'settings.premiumActive'
  | 'settings.premiumLater'
  | 'settings.appearance'
  | 'settings.system'
  | 'settings.themeAvailable'
  | 'settings.language'
  | 'settings.languageValue'
  | 'settings.languageSubtitle'
  | 'settings.studentNickname'
  | 'settings.nicknameSubtitle'
  | 'settings.nickname'
  | 'settings.nicknameHelp'
  | 'settings.saveNickname'
  | 'settings.about'
  | 'settings.builtWith'
  | 'lesson.repeatPractice'
  | 'lesson.attempt'
  | 'lesson.nextChallenge'
  | 'lesson.reviewCompleted'
  | 'lesson.saving'
  | 'lesson.checkAnswers'
  | 'lesson.complete'
  | 'lesson.summary'
  | 'lesson.playReward'
  | 'lesson.continueNext'
  | 'lesson.returnDashboard'
  | 'lesson.browseCurriculum'
  | 'unit.progress'
  | 'unit.subtitle'
  | 'arcade.returnDashboard'
  | 'arcade.timeLeft'
  | 'arcade.score'
  | 'arcade.soundEffects'
  | 'arcade.topScores'

const translations: Record<AppLanguage, Record<TranslationKey, string>> = {
  en: {
    'app.platform': 'Platform',
    'app.loading': 'Loading',
    'app.loadingSubtitle': 'Preparing BM Quest...',
    'auth.signOut': 'Sign Out',
    'language.switchToEnglish': 'Switch to English',
    'language.switchToMalay': 'Switch to Bahasa Melayu',
    'nav.home': 'Home',
    'nav.read': 'Read',
    'nav.badges': 'Badges',
    'nav.progress': 'Progress',
    'nav.settings': 'Settings',
    'welcome.title': 'Welcome',
    'welcome.subtitle': 'Sign in to sync BM Quest across devices, or continue as a guest for now.',
    'welcome.google': 'Continue with Google',
    'welcome.guest': 'Continue as Guest',
    'onboarding.title': 'Create Learner',
    'onboarding.subtitle': 'Set up the learner profile BM Quest will follow from Form 1 to Form 5.',
    'onboarding.nickname': 'BM Quest nickname',
    'onboarding.nicknameHelp': 'Use 3–32 characters. Nicknames must be unique and classroom-safe.',
    'onboarding.currentForm': 'Current Form',
    'common.form': 'Form',
    'onboarding.preferredLanguage': 'Preferred language',
    'onboarding.englishInterface': 'English interface',
    'onboarding.malayInterface': 'Bahasa Melayu interface',
    'onboarding.saving': 'Saving...',
    'onboarding.create': 'Create Learner',
    'home.title': 'BM Reading Quest',
    'home.guestLearner': 'Guest Learner',
    'home.todayFocus': "Today's Focus",
    'home.defaultFocus': 'Mixed + Vocabulary',
    'home.coreMission': 'Core mission',
    'home.optionalBooster': 'Optional booster if motivated.',
    'home.startMission': 'Start',
    'home.missionComingSoon': 'Mission Coming Soon',
    'home.carRideMode': 'Car Ride Mode',
    'home.streak': 'Streak',
    'home.average': 'Average',
    'home.lesson': 'lesson',
    'home.lessons': 'lessons',
    'home.readingRank': 'Reading Rank',
    'home.sessionsCompleted': 'sessions completed',
    'home.weeklyGoals': 'Weekly Goals',
    'home.weeklyMissionsCompleted': 'missions completed this week',
    'home.recommendation': 'Recommendation',
    'home.continueLearning': 'Continue Learning',
    'home.lessonsPreparing': 'lessons are being prepared.',
    'recommendation.reviewTitle': 'Review weak skill',
    'recommendation.reviewDescription': 'Review this lesson before moving on.',
    'recommendation.challengeTitle': 'Try next challenge',
    'recommendation.challengeDescription': 'Complete another challenge to move toward mastery.',
    'recommendation.newTitle': 'Start a new lesson',
    'recommendation.newDescription': 'Continue building coverage with the next unread lesson.',
    'recommendation.masteryTitle': 'Mastery refresh',
    'recommendation.masteryDescription': 'All lessons are completed. Keep skills sharp with a fresh challenge.',
    'home.currentLevel': 'Current Level',
    'home.readingProgress': 'Reading Progress',
    'home.achievements': 'Achievements',
    'student.title': 'Learning',
    'student.subtitle': 'Reading lessons, vocabulary practice and missions will be launched from here.',
    'student.browseCurriculum': 'Browse Curriculum',
    'curriculum.eyebrow': 'Curriculum Browser',
    'curriculum.title': 'Bahasa Melayu Form',
    'curriculum.subtitle': 'Browse KSSM-aligned Bahasa Melayu learning paths.',
    'curriculum.unit': 'Unit',
    'curriculum.start': 'Start',
    'curriculum.lessons': 'Lessons',
    'curriculum.noLessons': 'No lessons available',
    'curriculum.noLessonsSubtitle': "Lessons for this learner's form could not be loaded yet.",
    'progress.eyebrow': 'Learning Passport',
    'progress.title': 'My Progress',
    'progress.subtitle': 'Track your Bahasa Melayu learning journey.',
    'progress.overall': 'Overall Progress',
    'progress.completed': 'lessons completed',
    'progress.averageScore': 'Average Score',
    'progress.acrossAttempts': 'Across completed attempts.',
    'progress.mastered': 'Mastered',
    'progress.masteredSubtitle': 'Lessons mastered through challenge practice.',
    'progress.unlockedBadges': 'Unlocked learning badges.',
    'progress.viewGallery': 'View Gallery',
    'progress.lessonMastery': 'Lesson Mastery',
    'progress.noLessons': 'No lessons available for this form yet.',
    'progress.attempt': 'attempt',
    'progress.attempts': 'attempts',
    'progress.best': 'Best',
    'progress.latest': 'Latest',
    'progress.recentActivity': 'Recent Activity',
    'progress.noAttempts': 'No lesson attempts for this form yet.',
    'progress.bestScore': 'Best Score',
    'progress.bestScoreSubtitle': 'Your highest attempt score for this form.',
    'mastery.notStarted': 'Not Started',
    'mastery.learning': 'Learning',
    'mastery.improving': 'Improving',
    'mastery.mastered': 'Mastered',
    'badges.eyebrow': 'Achievement Gallery',
    'badges.title': 'My Badges',
    'badges.subtitle': 'Celebrate your BM Quest learning milestones.',
    'badges.unlocked': 'Unlocked',
    'badges.locked': 'Locked',
    'badges.firstLessonTitle': 'First Lesson',
    'badges.firstLessonDescription': 'Completed your first BM Quest lesson.',
    'badges.perfectScoreTitle': 'Perfect Score',
    'badges.perfectScoreDescription': 'Answered every question correctly.',
    'badges.readingExplorerTitle': 'Reading Explorer',
    'badges.readingExplorerDescription': 'Complete 3 reading lessons.',
    'badges.fiveDayStreakTitle': '5-Day Streak',
    'badges.fiveDayStreakDescription': 'Learn for 5 days in a row.',
    'settings.eyebrow': 'Profile & Settings',
    'settings.title': 'Settings',
    'settings.subtitle': 'Manage your BM Quest account and app preferences.',
    'settings.bmQuestName': 'BM Quest Name',
    'settings.guestMode': 'Guest mode',
    'settings.googleActive': 'Google sign-in active.',
    'settings.learningProfile': 'Learning Profile',
    'settings.plan': 'Plan',
    'settings.freePlan': 'Free',
    'settings.premiumPlan': 'Premium',
    'settings.premiumActive': 'Premium learning features are active.',
    'settings.premiumLater': 'Premium upgrades will be introduced later.',
    'settings.appearance': 'Appearance',
    'settings.system': 'System',
    'settings.themeAvailable': 'Theme controls are available in the top header.',
    'settings.language': 'Language',
    'settings.languageValue': 'Malay + English',
    'settings.languageSubtitle': 'Use the top header toggle to switch the interface language.',
    'settings.studentNickname': 'Student Nickname',
    'settings.nicknameSubtitle': 'This is the name shown in BM Quest and on arcade high scores instead of your Google account name.',
    'settings.nickname': 'Nickname',
    'settings.nicknameHelp': 'Use 3–32 characters. Nicknames must be unique, classroom-safe, and can be changed once every 24 hours.',
    'settings.saveNickname': 'Save Nickname',
    'settings.about': 'About BM Quest',
    'settings.builtWith': 'Built with React, TypeScript and Firebase.',
    'lesson.repeatPractice': 'Repeat Practice',
    'lesson.attempt': 'Attempt',
    'lesson.nextChallenge': 'Next Challenge',
    'lesson.reviewCompleted': 'Review Completed',
    'lesson.saving': 'Saving...',
    'lesson.checkAnswers': 'Check Answers',
    'lesson.complete': 'Lesson Complete',
    'lesson.summary': 'Lesson Summary',
    'lesson.playReward': 'Play 3-Min Reward Game',
    'lesson.continueNext': 'Continue Next Lesson',
    'lesson.returnDashboard': 'Return Dashboard',
    'lesson.browseCurriculum': 'Browse Curriculum',
    'unit.progress': 'Unit Progress',
    'unit.subtitle': 'Follow your learning journey through this unit.',
    'arcade.returnDashboard': 'Return Dashboard',
    'arcade.timeLeft': 'Time Left',
    'arcade.score': 'Arcade Score',
    'arcade.soundEffects': 'Sound Effects',
    'arcade.topScores': 'Top Arcade Scores',
  },
  ms: {
    'app.platform': 'Platform',
    'app.loading': 'Memuatkan',
    'app.loadingSubtitle': 'BM Quest sedang disediakan...',
    'auth.signOut': 'Log Keluar',
    'language.switchToEnglish': 'Tukar kepada English',
    'language.switchToMalay': 'Tukar kepada Bahasa Melayu',
    'nav.home': 'Utama',
    'nav.read': 'Baca',
    'nav.badges': 'Lencana',
    'nav.progress': 'Kemajuan',
    'nav.settings': 'Tetapan',
    'welcome.title': 'Selamat Datang',
    'welcome.subtitle': 'Log masuk untuk menyelaraskan BM Quest pada semua peranti, atau teruskan sebagai tetamu buat masa ini.',
    'welcome.google': 'Teruskan dengan Google',
    'welcome.guest': 'Teruskan sebagai Tetamu',
    'onboarding.title': 'Cipta Profil Murid',
    'onboarding.subtitle': 'Sediakan profil murid yang akan diikuti BM Quest dari Tingkatan 1 hingga Tingkatan 5.',
    'onboarding.nickname': 'Nama panggilan BM Quest',
    'onboarding.nicknameHelp': 'Gunakan 3–32 aksara. Nama panggilan mesti unik dan sesuai untuk kelas.',
    'onboarding.currentForm': 'Tingkatan Semasa',
    'common.form': 'Tingkatan',
    'onboarding.preferredLanguage': 'Bahasa pilihan',
    'onboarding.englishInterface': 'Antara muka English',
    'onboarding.malayInterface': 'Antara muka Bahasa Melayu',
    'onboarding.saving': 'Menyimpan...',
    'onboarding.create': 'Cipta Profil Murid',
    'home.title': 'BM Reading Quest',
    'home.guestLearner': 'Murid Tetamu',
    'home.todayFocus': 'Fokus Hari Ini',
    'home.defaultFocus': 'Campuran + Kosa Kata',
    'home.coreMission': 'Misi utama',
    'home.optionalBooster': 'Latihan tambahan jika bermotivasi.',
    'home.startMission': 'Mula',
    'home.missionComingSoon': 'Misi Akan Datang',
    'home.carRideMode': 'Mod Dalam Kereta',
    'home.streak': 'Rentetan',
    'home.average': 'Purata',
    'home.lesson': 'pelajaran',
    'home.lessons': 'pelajaran',
    'home.readingRank': 'Kedudukan Membaca',
    'home.sessionsCompleted': 'sesi selesai',
    'home.weeklyGoals': 'Matlamat Mingguan',
    'home.weeklyMissionsCompleted': 'misi selesai minggu ini',
    'home.recommendation': 'Cadangan',
    'home.continueLearning': 'Teruskan Pembelajaran',
    'home.lessonsPreparing': 'pelajaran sedang disediakan.',
    'recommendation.reviewTitle': 'Ulang kaji kemahiran lemah',
    'recommendation.reviewDescription': 'Ulang kaji pelajaran ini sebelum meneruskan pembelajaran.',
    'recommendation.challengeTitle': 'Cuba cabaran seterusnya',
    'recommendation.challengeDescription': 'Selesaikan satu lagi cabaran untuk menuju penguasaan.',
    'recommendation.newTitle': 'Mulakan pelajaran baharu',
    'recommendation.newDescription': 'Teruskan liputan pembelajaran dengan pelajaran seterusnya yang belum dibaca.',
    'recommendation.masteryTitle': 'Segarkan penguasaan',
    'recommendation.masteryDescription': 'Semua pelajaran telah selesai. Kekalkan kemahiran dengan cabaran baharu.',
    'home.currentLevel': 'Tahap Semasa',
    'home.readingProgress': 'Kemajuan Membaca',
    'home.achievements': 'Pencapaian',
    'student.title': 'Pembelajaran',
    'student.subtitle': 'Pelajaran membaca, latihan kosa kata dan misi boleh dimulakan dari sini.',
    'student.browseCurriculum': 'Lihat Kurikulum',
    'curriculum.eyebrow': 'Pelayar Kurikulum',
    'curriculum.title': 'Bahasa Melayu Tingkatan',
    'curriculum.subtitle': 'Lihat laluan pembelajaran Bahasa Melayu yang sejajar dengan KSSM.',
    'curriculum.unit': 'Unit',
    'curriculum.start': 'Mula',
    'curriculum.lessons': 'Pelajaran',
    'curriculum.noLessons': 'Tiada pelajaran tersedia',
    'curriculum.noLessonsSubtitle': 'Pelajaran untuk tingkatan murid ini belum dapat dimuatkan.',
    'progress.eyebrow': 'Pasport Pembelajaran',
    'progress.title': 'Kemajuan Saya',
    'progress.subtitle': 'Jejaki perjalanan pembelajaran Bahasa Melayu anda.',
    'progress.overall': 'Kemajuan Keseluruhan',
    'progress.completed': 'pelajaran selesai',
    'progress.averageScore': 'Skor Purata',
    'progress.acrossAttempts': 'Berdasarkan percubaan yang selesai.',
    'progress.mastered': 'Dikuasai',
    'progress.masteredSubtitle': 'Pelajaran yang dikuasai melalui latihan cabaran.',
    'progress.unlockedBadges': 'Lencana pembelajaran yang dibuka.',
    'progress.viewGallery': 'Lihat Galeri',
    'progress.lessonMastery': 'Penguasaan Pelajaran',
    'progress.noLessons': 'Tiada pelajaran tersedia untuk tingkatan ini.',
    'progress.attempt': 'percubaan',
    'progress.attempts': 'percubaan',
    'progress.best': 'Terbaik',
    'progress.latest': 'Terkini',
    'progress.recentActivity': 'Aktiviti Terkini',
    'progress.noAttempts': 'Tiada percubaan pelajaran untuk tingkatan ini.',
    'progress.bestScore': 'Skor Terbaik',
    'progress.bestScoreSubtitle': 'Skor percubaan tertinggi anda untuk tingkatan ini.',
    'mastery.notStarted': 'Belum Bermula',
    'mastery.learning': 'Sedang Belajar',
    'mastery.improving': 'Semakin Maju',
    'mastery.mastered': 'Dikuasai',
    'badges.eyebrow': 'Galeri Pencapaian',
    'badges.title': 'Lencana Saya',
    'badges.subtitle': 'Raikan pencapaian pembelajaran anda dalam BM Quest.',
    'badges.unlocked': 'Dibuka',
    'badges.locked': 'Terkunci',
    'badges.firstLessonTitle': 'Pelajaran Pertama',
    'badges.firstLessonDescription': 'Selesaikan pelajaran BM Quest pertama anda.',
    'badges.perfectScoreTitle': 'Skor Sempurna',
    'badges.perfectScoreDescription': 'Jawab semua soalan dengan betul.',
    'badges.readingExplorerTitle': 'Penjelajah Membaca',
    'badges.readingExplorerDescription': 'Selesaikan 3 pelajaran membaca.',
    'badges.fiveDayStreakTitle': 'Rentetan 5 Hari',
    'badges.fiveDayStreakDescription': 'Belajar selama 5 hari berturut-turut.',
    'settings.eyebrow': 'Profil & Tetapan',
    'settings.title': 'Tetapan',
    'settings.subtitle': 'Urus akaun BM Quest dan pilihan aplikasi anda.',
    'settings.bmQuestName': 'Nama BM Quest',
    'settings.guestMode': 'Mod tetamu',
    'settings.googleActive': 'Log masuk Google aktif.',
    'settings.learningProfile': 'Profil Pembelajaran',
    'settings.plan': 'Pelan',
    'settings.freePlan': 'Percuma',
    'settings.premiumPlan': 'Premium',
    'settings.premiumActive': 'Ciri pembelajaran premium sedang aktif.',
    'settings.premiumLater': 'Naik taraf premium akan diperkenalkan kemudian.',
    'settings.appearance': 'Paparan',
    'settings.system': 'Sistem',
    'settings.themeAvailable': 'Kawalan tema tersedia di bahagian atas.',
    'settings.language': 'Bahasa',
    'settings.languageValue': 'Bahasa Melayu + English',
    'settings.languageSubtitle': 'Gunakan suis di bahagian atas untuk menukar bahasa antara muka.',
    'settings.studentNickname': 'Nama Panggilan Murid',
    'settings.nicknameSubtitle': 'Nama ini dipaparkan dalam BM Quest dan pada skor tinggi arked, menggantikan nama akaun Google anda.',
    'settings.nickname': 'Nama panggilan',
    'settings.nicknameHelp': 'Gunakan 3–32 aksara. Nama panggilan mesti unik, sesuai untuk kelas, dan boleh ditukar sekali setiap 24 jam.',
    'settings.saveNickname': 'Simpan Nama Panggilan',
    'settings.about': 'Tentang BM Quest',
    'settings.builtWith': 'Dibina dengan React, TypeScript dan Firebase.',
    'lesson.repeatPractice': 'Latihan Ulangan',
    'lesson.attempt': 'Percubaan',
    'lesson.nextChallenge': 'Cabaran Seterusnya',
    'lesson.reviewCompleted': 'Ulang Kaji Selesai',
    'lesson.saving': 'Menyimpan...',
    'lesson.checkAnswers': 'Semak Jawapan',
    'lesson.complete': 'Pelajaran Selesai',
    'lesson.summary': 'Rumusan Pelajaran',
    'lesson.playReward': 'Main Ganjaran 3 Minit',
    'lesson.continueNext': 'Teruskan Pelajaran Seterusnya',
    'lesson.returnDashboard': 'Kembali ke Papan Pemuka',
    'lesson.browseCurriculum': 'Lihat Kurikulum',
    'unit.progress': 'Kemajuan Unit',
    'unit.subtitle': 'Ikuti perjalanan pembelajaran anda dalam unit ini.',
    'arcade.returnDashboard': 'Kembali ke Papan Pemuka',
    'arcade.timeLeft': 'Masa Berbaki',
    'arcade.score': 'Skor Arked',
    'arcade.soundEffects': 'Kesan Bunyi',
    'arcade.topScores': 'Skor Arked Tertinggi',
  },
}

type LanguageContextValue = {
  language: AppLanguage
  setLanguage: (language: AppLanguage) => void
  toggleLanguage: () => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<AppLanguage>(() => {
    if (typeof window === 'undefined') {
      return 'en'
    }

    return localStorage.getItem('bmquest-language') === 'ms' ? 'ms' : 'en'
  })

  useEffect(() => {
    document.documentElement.lang = language === 'ms' ? 'ms' : 'en'
    localStorage.setItem('bmquest-language', language)
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => current === 'en' ? 'ms' : 'en'),
      t: (key: TranslationKey) => translations[language][key],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}
