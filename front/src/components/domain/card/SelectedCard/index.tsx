import { useState } from 'react'
import styled from 'styled-components'
import { calculateAverageCount } from '@/utils/array/calculateAverageCount'
import { SelectedCardList } from '@/components/domain/card/SelectedCard/SelectedCardList'

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
        <CardListContainer>
          <SelectedCardList selectedCards={selectedCards} />
          <Average>Average:{average}</Average>
        </CardListContainer>
      ) : (
        <div>
          <button onClick={openCardOnClick}>OpenCard</button>
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
