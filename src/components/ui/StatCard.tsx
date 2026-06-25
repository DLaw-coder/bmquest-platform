type StatCardProps = {
  label: string
  value: string | number
  description: string
}

function StatCard({ label, value, description }: StatCardProps) {
  return (
    <article className="dashboard-card">
      <span>{label}</span>
      <h2>{value}</h2>
      <p>{description}</p>
    </article>
  )
}

export default StatCard
