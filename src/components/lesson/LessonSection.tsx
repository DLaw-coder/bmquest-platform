import type { ReactNode } from 'react'
import SectionHeader from '../SectionHeader'

type Props = {
  icon: string
  malay: string
  english: string
  children: ReactNode
}

function LessonSection({ icon, malay, english, children }: Props) {
  return (
    <article className="dashboard-card lesson-section">
      <SectionHeader icon={icon} malay={malay} english={english} />
      {children}
    </article>
  )
}

export default LessonSection
