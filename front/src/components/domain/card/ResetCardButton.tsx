interface Props {
  onClick: () => void
}

export const ResetCardButton = ({ onClick }: Props) => {
  return <button onClick={onClick}>reset planning</button>
}
