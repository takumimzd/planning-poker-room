import { Dispatch, SetStateAction } from 'react'
import { IdType } from '@/types/index'
import { useCreateCard } from '@/hooks/apiRequest/domain/card/useCreateCard'
import { CardType } from '@/types/card'

interface Props {
  roomId: IdType
  themeId: IdType
  myCard: CardType
  setMyCard: Dispatch<SetStateAction<CardType>>
}

export const ConfirmButton = ({ roomId, themeId, myCard, setMyCard }: Props) => {
  const { createCard } = useCreateCard({ roomId, themeId })
  const handleConfirmOnClick = (card: CardType) => {
    if (card == null) return null
    setMyCard(card)
    createCard({ cardCount: card })
  }

  return <button onClick={() => handleConfirmOnClick(myCard)}>confirm card</button>
}
