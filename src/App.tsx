import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AuthProvider from './contexts/AuthContext'
import { useAuth } from './hooks/useAuth'
import AppLayout from './layouts/AppLayout'
import WelcomePage from './pages/WelcomePage'
import AppRoutes from './router/AppRoutes'

function AppContent() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
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

  return <AppLayout>{user ? <AppRoutes /> : <WelcomePage />}</AppLayout>
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
