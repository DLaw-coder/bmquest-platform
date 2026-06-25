import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AuthProvider from './contexts/AuthContext'
import { AppStateProvider, useAppData } from './context/AppStateContext'
import { useAuth } from './hooks/useAuth'
import AppLayout from './layouts/AppLayout'
import WelcomePage from './pages/WelcomePage'
import LearnerOnboardingPage from './pages/LearnerOnboardingPage'
import AppRoutes from './router/AppRoutes'

function AppContent() {
  const { user, isGuest, isLoading } = useAuth()
  const { learner, isAppDataLoading, refreshAppData } = useAppData()

  if (isLoading || (user && !isGuest && isAppDataLoading)) {
    return (
      <AppLayout>
        <section className="hero-card">
          <div className="brand-icon">📘</div>
          <h1>Loading</h1>
          <p className="subtitle">Preparing BM Quest...</p>
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
      <AuthProvider>
        <AppStateProvider>
          <AppContent />
        </AppStateProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
