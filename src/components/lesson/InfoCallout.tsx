type Props = {
  children: string
}

function InfoCallout({ children }: Props) {
  return <div className="learning-tip">{children}</div>
}

export default InfoCallout
