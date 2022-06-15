import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IdType } from '@/types/index'
import { CardList } from '@/components/domain/card/CardList'
import { MyCard } from '@/components/domain/card/MyCard'
import { ConfirmButton } from '@/components/domain/card/ConfirmButton'
import { SelectedCard } from '@/components/domain/card/SelectedCard'
import { DecidedCardPullDown } from '@/components/domain/card/DecidedCardPullDown'
import useGetTheme from '@/hooks/apiRequest/domain/theme/useGetTheme'
import { ResetCardButton } from '../../card/ResetCardButton'
import { useDeleteCardsByTheme } from '@/hooks/apiRequest/domain/theme/useDeleteCardsByTheme'
import { CardType } from '@/types/card'

interface Props {
  roomId: IdType
  themeId: IdType
  title: string
  selectedCards: number[]
}

export const HasThemeRoom = ({ roomId, title, themeId, selectedCards }: Props) => {
  const [isOpenCard, setIsOpenCard] = useState(false)
  const [decidedCard, setDecidedCard] = useState<CardType>(null)
  const { deleteCardsByTheme } = useDeleteCardsByTheme({ roomId, themeId })

  const handleOpenCardOnClick = () => {
    if (!selectedCards.length) return null
    setIsOpenCard(true)
  }

  useGetTheme({ roomId, themeId })
  const [myCard, setMyCard] = useState<CardType>(null)
  const handleCardOnClick = (count: number) => {
    setMyCard(count)
  }

  return (
    <div>
      <Top>
        <CardList cardOnClick={handleCardOnClick} />
      </Top>
      <Center>
        <h1>{title}</h1>
        <MyCard myCard={myCard} />
        <ConfirmButton roomId={roomId} themeId={themeId} myCard={myCard} setMyCard={setMyCard} />
      </Center>
      <Under>
        <SelectedCard
          selectedCards={selectedCards}
          isOpenCard={isOpenCard}
          openCardOnClick={handleOpenCardOnClick}
        />
        {isOpenCard && <ResetCardButton onClick={deleteCardsByTheme} />}
        <DecidedCardPullDown decidedCard={decidedCard} setDecidedCard={setDecidedCard} />
      </Under>
    </div>
  )
}

const Top = styled.div``
const Center = styled.div`
  display: flex;
`
const Under = styled.div``
