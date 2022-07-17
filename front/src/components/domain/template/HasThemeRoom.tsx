import { memo, useState } from 'react'
import styled from 'styled-components'
import { IdType } from '@/types/index'
import { CardList } from '@/components/domain/CardList'
import { MyCard } from '@/components/domain/MyCard'
import { ConfirmButton } from '@/components/domain/ConfirmButton'
import { SelectedCard } from '@/components/domain/SelectedCard'
import { DecidedCardPullDown } from '@/components/domain/DecidedCardPullDown'
import useGetTheme from '@/hooks/apiRequest/domain/theme/useGetTheme'
import { ResetCardButton } from '../ResetCardButton'
import { useDeleteCardsByTheme } from '@/hooks/apiRequest/domain/theme/useDeleteCardsByTheme'
import { CardType } from '@/types/card'
import { DecideCountButton } from '@/components/domain/DecideCountButton'
import { Center, FlexBox } from 'src/styles/standardStyles'

interface Props {
  roomId: IdType
  themeId: IdType
  title: string
  selectedCards: number[]
  handleResetState: () => void
}

export const HasThemeRoom = memo(
  ({ roomId, title, themeId, selectedCards, handleResetState }: Props) => {
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

    const handleResetCardOnClick = () => {
      deleteCardsByTheme()
      setIsOpenCard(false)
    }

    return (
      <div>
        <Top>
          <CardList cardOnClick={handleCardOnClick} />
        </Top>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <CenterWapper>
          <Center>
            <FlexBox>
              <div>
                <ParagraphWrapper>
                  {!myCard ? (
                    <Paragraph>Please Choose Card</Paragraph>
                  ) : (
                    <Paragraph>Your Selected Card</Paragraph>
                  )}
                </ParagraphWrapper>
                <MyCard myCard={myCard} />
              </div>
              <ConfirmButtonContainer>
                <ConfirmButton
                  roomId={roomId}
                  themeId={themeId}
                  myCard={myCard}
                  setMyCard={setMyCard}
                />
              </ConfirmButtonContainer>
            </FlexBox>
          </Center>
        </CenterWapper>
        <Under>
          <div>
            <SelectedCard
              selectedCards={selectedCards}
              isOpenCard={isOpenCard}
              openCardOnClick={handleOpenCardOnClick}
            />
          </div>
          <FlexBox>
            {isOpenCard && (
              <ResetCardButtonWrapper>
                <ResetCardButton onClick={handleResetCardOnClick} />
              </ResetCardButtonWrapper>
            )}
            <DecidedCardPullDown decidedCard={decidedCard} setDecidedCard={setDecidedCard} />
            <DecideCountButton
              roomId={roomId}
              themeId={themeId}
              decidedCard={decidedCard}
              handleResetState={handleResetState}
            />
          </FlexBox>
        </Under>
      </div>
    )
  },
)

const Top = styled.div`
  display: flex;
  justify-content: center;
`

const CenterWapper = styled.div`
  top: -24px;
  position: relative;
`
const Under = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  margin-top: 24px;
`

const ConfirmButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

const ResetCardButtonWrapper = styled.div`
  margin-right: 40px;
`

const ParagraphWrapper = styled.div`
  padding-bottom: 16px;
`
const Paragraph = styled.p`
  font-weight: bold;
`

const Title = styled.p`
  padding-left: 24px;
  font-weight: bold;
  font-size: 20px;
`

const TitleContainer = styled.div`
  word-wrap: break-word;
  width: 500px;
`
