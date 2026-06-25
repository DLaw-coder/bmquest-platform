import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import StudentPage from '../pages/StudentPage'
import ParentPage from '../pages/ParentPage'
import ProgressPage from '../pages/ProgressPage'
import SettingsPage from '../pages/SettingsPage'
import NotFoundPage from '../pages/NotFoundPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/student" element={<StudentPage />} />
      <Route path="/parent" element={<ParentPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
