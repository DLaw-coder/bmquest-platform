import { useEffect, useState } from 'react'
import AppHeader from '../components/AppHeader'
import BottomNav from '../components/BottomNav'
import PageContainer from '../components/PageContainer'

type AppLayoutProps = {
  children: React.ReactNode
  showNavigation?: boolean
}

type ThemeMode = 'light' | 'dark'

function AppLayout({ children, showNavigation = true }: AppLayoutProps) {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    return localStorage.getItem('bmquest-theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('bmquest-theme', theme)
  }, [theme])

  function handleThemeToggle() {
    setTheme((current) => current === 'dark' ? 'light' : 'dark')
  }

  return (
    <main className="app-shell" data-theme={theme}>
      <AppHeader onThemeToggle={handleThemeToggle} theme={theme} />
      <PageContainer>{children}</PageContainer>
      {showNavigation && <BottomNav />}
    </main>
  )
}

export default AppLayout
