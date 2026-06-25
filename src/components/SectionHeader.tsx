type SectionHeaderProps = {
  icon?: string
  malay: string
  english: string
}

function SectionHeader({ icon, malay, english }: SectionHeaderProps) {
  return (
    <div className="section-header">
      {icon && <span className="section-icon">{icon}</span>}
      <span className="section-title">{malay}</span>
      <span className="section-subtitle">{english}</span>
    </div>
  )
}

export default SectionHeader
