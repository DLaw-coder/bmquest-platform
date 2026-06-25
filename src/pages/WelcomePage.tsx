import { useAuth } from '../hooks/useAuth'

function WelcomePage() {
  const { continueAsGuest, signInWithGoogle } = useAuth()

  return (
    <section className="hero-card">
      <div className="brand-icon">📘</div>

      <h1>Welcome</h1>

      <p className="subtitle">
        Sign in to sync BM Quest across devices, or continue as a guest for now.
      </p>

      <div className="menu-grid">
        <button className="menu-button student" onClick={signInWithGoogle}>
          🔐 Continue with Google
        </button>

        <button className="menu-button progress" onClick={continueAsGuest}>
          🌱 Continue as Guest
        </button>
      </div>

      <p className="footer-text">Sprint 2.0C · Real Google Sign-In</p>
    </section>
  )
}

export default WelcomePage
