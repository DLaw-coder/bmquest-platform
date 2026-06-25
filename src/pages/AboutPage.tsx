import { appInfo } from '../config/appInfo'

function AboutPage() {
  return (
    <section className="hero-card">
      <div className="brand-icon">📘</div>
      <h1>About</h1>
      <p className="subtitle">
        BM Quest is a KSSM-aligned learning platform designed to grow with Malaysian students.
      </p>

      <div className="version-card">
        <span>Version</span>
        <strong>{appInfo.version}</strong>
      </div>

      <p className="footer-text">{appInfo.copyright}</p>
    </section>
  )
}

export default AboutPage
