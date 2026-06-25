type MenuButtonProps = {
  emoji: string
  label: string
  variant: 'student' | 'parent' | 'progress' | 'settings'
}

function MenuButton({ emoji, label, variant }: MenuButtonProps) {
  return (
    <button className={`menu-button ${variant}`}>
      <span>{emoji}</span>
      {label}
    </button>
  )
}

export default MenuButton