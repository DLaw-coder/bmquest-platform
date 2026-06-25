import { Link } from 'react-router-dom'

type ActionLinkProps = {
  to: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

function ActionLink({ to, children, variant = 'primary' }: ActionLinkProps) {
  return (
    <Link className={`action-link ${variant}`} to={to}>
      {children}
    </Link>
  )
}

export default ActionLink
