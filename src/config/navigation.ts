export type NavigationItem = {
  label: string
  icon: string
  path: string
  variant: 'student' | 'parent' | 'progress' | 'settings'
}

export const primaryNavigation: NavigationItem[] = [
  { label: 'Student', icon: '📖', path: '/student', variant: 'student' },
  { label: 'Parent', icon: '👨‍👩‍👦', path: '/parent', variant: 'parent' },
  { label: 'Progress', icon: '📊', path: '/progress', variant: 'progress' },
  { label: 'Settings', icon: '⚙️', path: '/settings', variant: 'settings' },
]

export const bottomNavigation = [
  { label: 'Home', icon: '🏠', path: '/' },
  { label: 'Student', icon: '📖', path: '/student' },
  { label: 'Progress', icon: '📊', path: '/progress' },
  { label: 'Settings', icon: '⚙️', path: '/settings' },
]
