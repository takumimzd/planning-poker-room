import styled from 'styled-components'
import { filterDuplicateValue } from '@/utils/array/filterDuplicateValue'
import { calculateDuplicateCount } from '@/utils/array/calculateDuplicateCount'
import { SelectedCardItem } from '@/components/domain/card/SelectedCard/SelectedCardItem'

interface Props {
  selectedCards: number[]
}
export const SelectedCardList = ({ selectedCards }: Props) => {
  const filterDuplicateCards = filterDuplicateValue(selectedCards)

  return (
    <Ul>
      {filterDuplicateCards.map((filteredCard) => (
        <Li key={filteredCard}>
          <SelectedCardItem
            filteredCard={filteredCard}
            selectedCards={selectedCards}
            calculateDuplicateCount={calculateDuplicateCount}
          />
        </Li>
      ))}
    </Ul>
  )
}

const Ul = styled.ul`
  padding-left: 0;
  display: flex;
`
const Li = styled.li`
  list-style: none;
  width: 120px;
  height: 130px;
`
