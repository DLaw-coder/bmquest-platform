type VersionCardProps = {
  label: string
  version: string
}

function VersionCard({ label, version }: VersionCardProps) {
  return (
    <div className="version-card">
      <span>{label}</span>
      <strong>{version}</strong>
    </div>
  )
}

export default VersionCard