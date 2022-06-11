import { Card } from '@/components/common/Card/Card'

interface Props {
  myCard: number | null
}

export const MyCard = ({ myCard }: Props) => {
  return (
    <div>
      <p>your selected card</p>
      {!myCard ? <p>カードを選んでください</p> : <Card>{myCard}</Card>}
    </div>
  )
}
