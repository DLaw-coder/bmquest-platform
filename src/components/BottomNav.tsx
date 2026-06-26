import { NavLink } from 'react-router-dom'
import { bottomNavigation } from '../config/navigation'
import { useLanguage } from '../context/LanguageContext'

function BottomNav() {
  const { t } = useLanguage()

  return (
    <nav className="bottom-nav">
      {bottomNavigation.map((item) => (
        <NavLink key={item.path} to={item.path}>
          <span>{item.icon}</span>
          {t(item.labelKey)}
        </NavLink>
      ))}
    </nav>
  )
}

export default BottomNav
