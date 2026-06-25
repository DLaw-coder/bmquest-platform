import AppHeader from '../components/AppHeader'
import BottomNav from '../components/BottomNav'
import PageContainer from '../components/PageContainer'
import AppFooter from '../components/AppFooter'

type AppLayoutProps = {
  children: React.ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className="app-shell">
      <AppHeader />
      <PageContainer>{children}</PageContainer>
      <AppFooter />
      <BottomNav />
    </main>
  )
}

export default AppLayout
