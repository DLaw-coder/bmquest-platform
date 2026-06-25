const navItems = [
  { label: 'Student', icon: '📖' },
  { label: 'Parent', icon: '👨‍👩‍👦' },
  { label: 'Progress', icon: '📊' },
  { label: 'Settings', icon: '⚙️' },
]

function BottomNav() {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button key={item.label}>
          <span>{item.icon}</span>
          {item.label}
        </button>
      ))}
    </nav>
  )
}

export default BottomNav
