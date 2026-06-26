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
  { labelKey: 'nav.home' as const, icon: '🏠', path: '/' },
  { labelKey: 'nav.read' as const, icon: '📖', path: '/student' },
  { labelKey: 'nav.badges' as const, icon: '🏆', path: '/achievements' },
  { labelKey: 'nav.progress' as const, icon: '📊', path: '/progress' },
  { labelKey: 'nav.settings' as const, icon: '⚙️', path: '/settings' },
]
