import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IdType } from '@/types/index'
import { CardList } from '@/components/domain/card/CardList'
import { MyCard } from '@/components/domain/card/MyCard'
import { ConfirmButton } from '@/components/domain/card/ConfirmButton'
import { SelectedCard } from '@/components/domain/card/SelectedCard'
import { DecidedCardPullDown } from '@/components/domain/card/DecidedCardPullDown'
import useGetTheme from '@/hooks/apiRequest/domain/theme/useGetTheme'

interface Props {
  roomId: IdType
  themeId: IdType
  title: string
  selectedCards: number[]
}

export const HasThemeRoom = ({ roomId, title, themeId, selectedCards }: Props) => {
  useGetTheme({ roomId, themeId })
  const [myCard, setMyCard] = useState<number | null>(null)
  const handleCardOnClick = (count: number) => {
    setMyCard(count)
  }

  useEffect(() => {}, [])

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
        <SelectedCard selectedCards={selectedCards} />
        <DecidedCardPullDown />
      </Under>
    </div>
  )
}

const Top = styled.div``
const Center = styled.div`
  display: flex;
`
const Under = styled.div``
