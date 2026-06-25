import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', icon: '🏠', path: '/' },
  { label: 'Student', icon: '📖', path: '/student' },
  { label: 'Progress', icon: '📊', path: '/progress' },
  { label: 'Settings', icon: '⚙️', path: '/settings' },
]

function BottomNav() {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink key={item.path} to={item.path}>
          <span>{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default BottomNav
