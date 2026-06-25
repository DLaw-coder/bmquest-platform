type ProgressBarProps = {
  value: number
}

function ProgressBar({ value }: ProgressBarProps) {
  const safeValue = Math.max(0, Math.min(100, value))

  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${safeValue}%` }} />
    </div>
  )
}

export default ProgressBar
