type BadgeProps = {
  children: string
}

function Badge({ children }: BadgeProps) {
  return <div className="badge">{children}</div>
}

export default Badge