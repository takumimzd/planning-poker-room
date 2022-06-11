import { useState } from 'react'
import styled from 'styled-components'
import { calculateAverageCount } from '@/utils/array/calculateAverageCount'
import { SelectedCardList } from '@/components/domain/card/SelectedCard/SelectedCardList'

interface Props {
  selectedCards: number[]
}

export const SelectedCard = ({ selectedCards }: Props) => {
  const [isOpenCard, setIsOpenCard] = useState(false)
  const average = calculateAverageCount({ counts: selectedCards })
  const handleOpenCardOnClick = () => {
    setIsOpenCard(true)
  }

  return (
    <Wrapper>
      {isOpenCard ? (
        <CardListContainer>
          <SelectedCardList selectedCards={selectedCards} />
          <Average>Average:{average}</Average>
        </CardListContainer>
      ) : (
        <div>
          <button onClick={handleOpenCardOnClick}>OpenCard</button>
          {selectedCards.length}
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div``
const CardListContainer = styled.div`
  display: flex;
`
const Average = styled.p``
