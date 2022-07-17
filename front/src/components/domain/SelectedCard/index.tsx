import styled from 'styled-components'
import { calculateAverageCount } from '@/utils/array/calculateAverageCount'
import { SelectedCardList } from '@/components/domain/SelectedCard/SelectedCardList'
import { SecondaryButton } from '@/components/common/Button/SecondaryButton'
import { Card } from '@/components/common/Card/Card'

interface Props {
  selectedCards: number[]
  isOpenCard: boolean
  openCardOnClick: () => void
}

export const SelectedCard = ({ selectedCards, isOpenCard, openCardOnClick }: Props) => {
  const average = calculateAverageCount({ counts: selectedCards })

  return (
    <Wrapper>
      {isOpenCard ? (
        <div>
          <P>Card Chosen By The Member</P>
          <CardListContainer>
            <SelectedCardList selectedCards={selectedCards} />
            <Average>Average:{average}</Average>
          </CardListContainer>
        </div>
      ) : (
        <div>
          <ButtonWrapper>
            <SecondaryButton onClick={openCardOnClick} text='OpenCard' />
          </ButtonWrapper>
          <Ul>
            {selectedCards.map((card) => (
              <Li key={card}>
                <Card>?</Card>
              </Li>
            ))}
          </Ul>
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div``
const CardListContainer = styled.div`
  display: flex;
`
const Average = styled.p`
  display: flex;
  align-items: center;
  padding-left: 16px;
`

const ButtonWrapper = styled.div`
  width: 160px;
`

const P = styled.p`
  font-weight: bold;
  font-size: 16px;
`

const Ul = styled.ul`
  display: flex;
  align-items: flex-start;
`
const Li = styled.li`
  list-style: none;
  margin-left: 8px;
  margin-right: 8px;
  width: 80px;
  height: 115px;
`
