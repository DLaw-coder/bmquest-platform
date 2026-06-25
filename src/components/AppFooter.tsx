import { Link } from 'react-router-dom'
import { appInfo } from '../config/appInfo'

function AppFooter() {
  return (
    <footer className="app-footer">
      <Link to="/about">{appInfo.copyright}</Link>
    </footer>
  )
}

export default AppFooter
