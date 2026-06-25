type SectionHeaderProps = {
  malay: string
  english: string
}

function SectionHeader({
  malay,
  english,
}: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="section-title">
        {malay}
      </span>

      <span className="section-subtitle">
        {english}
      </span>
    </div>
  )
}

export default SectionHeader
