import { Dispatch, SetStateAction } from 'react'
import { IdType } from '@/types/index'
import { useCreateCard } from '@/hooks/apiRequest/domain/card/useCreateCard'

interface Props {
  roomId: IdType
  themeId: IdType
  myCard: number | null
  setMyCard: Dispatch<SetStateAction<number | null>>
}

export const ConfirmButton = ({ roomId, themeId, myCard, setMyCard }: Props) => {
  const { createCard } = useCreateCard({ roomId, themeId })
  const handleConfirmOnClick = (card: number | null) => {
    if (card == null) return null
    setMyCard(card)
    createCard({ cardCount: card })
  }

  return <button onClick={() => handleConfirmOnClick(myCard)}>confirm card</button>
}
