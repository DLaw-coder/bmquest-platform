type PageHeroProps = {
  eyebrow: string
  title: string
  subtitle: string
  icon: string
}

function PageHero({ eyebrow, title, subtitle, icon }: PageHeroProps) {
  return (
    <div className="dashboard-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
      <div className="dashboard-icon">{icon}</div>
    </div>
  )
}

export default PageHero
