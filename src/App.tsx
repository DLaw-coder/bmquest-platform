import { BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import AuthProvider from './contexts/AuthContext'
import { useAuth } from './hooks/useAuth'
import AppLayout from './layouts/AppLayout'
import WelcomePage from './pages/WelcomePage'
import LearnerOnboardingPage from './pages/LearnerOnboardingPage'
import AppRoutes from './router/AppRoutes'
import { getLearnersForAccount } from './services/firestore/learnerRepository'

function AppContent() {
  const { user, isGuest, isLoading } = useAuth()
  const [hasLearner, setHasLearner] = useState(false)
  const [isCheckingLearner, setIsCheckingLearner] = useState(false)

  async function checkLearners() {
    if (!user || isGuest) {
      setHasLearner(false)
      return
    }

    setIsCheckingLearner(true)
    const learners = await getLearnersForAccount(user.uid)
    setHasLearner(learners.length > 0)
    setIsCheckingLearner(false)
  }

  useEffect(() => {
    checkLearners()
  }, [user?.uid, isGuest])

  if (isLoading || isCheckingLearner) {
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

  if (!isGuest && !hasLearner) {
    return (
      <AppLayout>
        <LearnerOnboardingPage onCreated={checkLearners} />
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
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
