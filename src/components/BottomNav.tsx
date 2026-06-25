import { NavLink } from 'react-router-dom'
import { bottomNavigation } from '../config/navigation'

function BottomNav() {
  return (
    <nav className="bottom-nav">
      {bottomNavigation.map((item) => (
        <NavLink key={item.path} to={item.path}>
          <span>{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default BottomNav
