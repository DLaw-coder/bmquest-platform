import { Link } from 'react-router-dom'

function StudentPage() {
  return (
    <section className="hero-card">
      <div className="brand-icon">📖</div>
      <h1>Learning</h1>
      <p className="subtitle">
        Reading lessons, vocabulary practice and missions will be launched from here.
      </p>

      <Link className="menu-button student" to="/curriculum">
        📚 Browse Curriculum
      </Link>
    </section>
  )
}

export default StudentPage
