import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import StudentPage from '../pages/StudentPage'
import ParentPage from '../pages/ParentPage'
import ProgressPage from '../pages/ProgressPage'
import SettingsPage from '../pages/SettingsPage'
import CurriculumPage from '../pages/CurriculumPage'
import LessonPage from '../pages/LessonPage'
import AboutPage from '../pages/AboutPage'
import DeveloperPage from '../pages/DeveloperPage'
import NotFoundPage from '../pages/NotFoundPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/student" element={<StudentPage />} />
      <Route path="/curriculum" element={<CurriculumPage />} />
      <Route path="/lesson/:lessonId" element={<LessonPage />} />
      <Route path="/parent" element={<ParentPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/developer" element={<DeveloperPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
