import AppHeader from '../components/AppHeader'
import BottomNav from '../components/BottomNav'
import PageContainer from '../components/PageContainer'

type AppLayoutProps = {
  children: React.ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className="app-shell">
      <AppHeader />
      <PageContainer>{children}</PageContainer>
      <BottomNav />
    </main>
  )
}

export default AppLayout
