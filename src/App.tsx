import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AuthProvider from './context/AuthContext'
import { AppStateProvider, useAppData } from './context/AppStateContext'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { useAuth } from './hooks/useAuth'
import AppLayout from './layouts/AppLayout'
import WelcomePage from './pages/WelcomePage'
import LearnerOnboardingPage from './pages/LearnerOnboardingPage'
import AppRoutes from './router/AppRoutes'
import EngagementTracker from './components/EngagementTracker'

function AppContent() {
  const { user, isGuest, isLoading } = useAuth()
  const { learner, isAppDataLoading, refreshAppData } = useAppData()
  const { t } = useLanguage()

  if (isLoading || (user && !isGuest && isAppDataLoading)) {
    return (
      <AppLayout>
        <section className="hero-card">
          <div className="brand-icon">📘</div>
          <h1>{t('app.loading')}</h1>
          <p className="subtitle">{t('app.loadingSubtitle')}</p>
        </section>
      </AppLayout>
    )
  }

  if (!user) {
    return (
      <AppLayout>
        <WelcomePage />
      </AppLayout>
    )
  }

  if (!isGuest && !learner) {
    return (
      <AppLayout>
        <LearnerOnboardingPage onCreated={refreshAppData} />
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  )
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <AppStateProvider>
            <EngagementTracker />
            <AppContent />
          </AppStateProvider>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
