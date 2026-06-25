import Badge from '../components/Badge'
import MenuButton from '../components/MenuButton'
import VersionCard from '../components/VersionCard'
import { primaryNavigation } from '../config/navigation'

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
        {primaryNavigation.map((item) => (
          <MenuButton
            key={item.path}
            emoji={item.icon}
            label={item.label}
            variant={item.variant}
            to={item.path}
          />
        ))}
      </div>

      <p className="footer-text">Sprint 1.7 · Navigation Framework</p>
    </section>
  )
}

export default HomePage
