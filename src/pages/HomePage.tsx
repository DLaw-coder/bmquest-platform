import Badge from '../components/Badge'
import MenuButton from '../components/MenuButton'
import VersionCard from '../components/VersionCard'

function HomePage() {
  return (
    <section className="hero-card">
      <div className="brand-icon">📘</div>

      <Badge>Developer Edition</Badge>

      <h1>BM Quest</h1>

      <p className="subtitle">
        Growing with every Malaysian student, one learning milestone at a time.
      </p>

      <VersionCard label="Development Build" version="v0.1.0 Alpha" />

      <div className="menu-grid">
        <MenuButton emoji="📖" label="Student" variant="student" />
        <MenuButton emoji="👨‍👩‍👦" label="Parent" variant="parent" />
        <MenuButton emoji="📊" label="Progress" variant="progress" />
        <MenuButton emoji="⚙️" label="Settings" variant="settings" />
      </div>

      <p className="footer-text">Sprint 1.5 · Layout System</p>
    </section>
  )
}

export default HomePage
