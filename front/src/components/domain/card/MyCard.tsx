interface Props {
  myCard: number | null
}

export const MyCard = ({ myCard }: Props) => {
  return <div>your selected card : {myCard}</div>
}
