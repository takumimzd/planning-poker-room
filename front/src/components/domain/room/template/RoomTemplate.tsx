import { useState } from 'react'
import styled from 'styled-components'
import { IdType } from '@/types/index'
import { useCreateTheme } from '@/hooks/apiRequest/domain/theme/useCreateTheme'
import { useSubscribeRoom } from '@/hooks/useSubscribeRoom'
import { CardList } from '@/components/domain/card/CardList'
import { MyCard } from '@/components/domain/card/MyCard'
import { ConfirmButton } from '@/components/domain/card/ConfirmButton'
import { SelectedCard } from '@/components/domain/card/SelectedCard'
import { DecidedCardPullDown } from '@/components/domain/card/DecidedCardPullDown'

interface Props {
  roomId: IdType
}

export const RoomTemplate = ({ roomId }: Props) => {
  const [myCard, setMyCard] = useState<number | null>(null)
  const { selectedCards, title, themeId } = useSubscribeRoom({ roomId })
  const { createTheme } = useCreateTheme({ roomId, title: 'アイテム名' })

  const handleCardOnClick = (count: number) => {
    setMyCard(count)
  }

  const renderContent = () => {
    if (!title) {
      return (
        <div>{title ? <h1>{title}</h1> : <button onClick={createTheme}>create title</button>}</div>
      )
    }

    if (title) {
      return (
        <div>
          <Top>
            <CardList cardOnClick={handleCardOnClick} />
          </Top>
          <Center>
            <h1>{title}</h1>
            <MyCard myCard={myCard} />
            <ConfirmButton
              roomId={roomId}
              themeId={themeId}
              myCard={myCard}
              setMyCard={setMyCard}
            />
          </Center>
          <Under>
            <SelectedCard selectedCards={selectedCards} />
            <DecidedCardPullDown />
          </Under>
        </div>
      )
    }
  }

  return <div>{renderContent()}</div>
}

const Top = styled.div``
const Center = styled.div`
  display: flex;
`
const Under = styled.div``
