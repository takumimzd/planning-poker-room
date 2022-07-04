import { Card } from '@/components/common/Card/Card'
import { CardType } from '@/types/card'

interface Props {
  myCard: CardType
}

export const MyCard = ({ myCard }: Props) => {
  return (
    <div>
      <p>your selected card</p>
      {!myCard ? <p>カードを選んでください</p> : <Card>{myCard}</Card>}
    </div>
  )
}
