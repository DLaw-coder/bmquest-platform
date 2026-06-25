import { Link } from 'react-router-dom'

type MenuButtonProps = {
  emoji: string
  label: string
  variant: 'student' | 'parent' | 'progress' | 'settings'
  to: string
}

function MenuButton({ emoji, label, variant, to }: MenuButtonProps) {
  return (
    <Link className={`menu-button ${variant}`} to={to}>
      <span>{emoji}</span>
      {label}
    </Link>
  )
}

export default MenuButton
