import './App.css'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <div className="brand-icon">📘</div>
        <div className="badge">Developer Edition</div>

        <h1>BM Quest</h1>

        <p className="subtitle">
          Growing with every Malaysian student, one learning milestone at a time.
        </p>

        <div className="version-card">
          <span>Development Build</span>
          <strong>v0.1.0 Alpha</strong>
        </div>

        <div className="menu-grid">
          <button className="student">📖 Student</button>
          <button className="parent">👨‍👩‍👦 Parent</button>
          <button className="progress">📊 Progress</button>
          <button className="settings">⚙️ Settings</button>
        </div>

        <p className="footer-text">
          Sprint 1.2 · Design System Foundation
        </p>
      </section>
    </main>
  )
}

export default App