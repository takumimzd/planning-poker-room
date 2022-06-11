import styled from 'styled-components'
import { Card } from '@/components/common/Card/Card'
import { CalculateDuplicateCountPropsType } from '@/utils/array/calculateDuplicateCount'
interface Props {
  filteredCard: number
  selectedCards: number[]
  calculateDuplicateCount: <T>({
    array,
    duplicateValue,
  }: CalculateDuplicateCountPropsType<T>) => number
}
export const SelectedCardItem = ({
  filteredCard,
  calculateDuplicateCount,
  selectedCards,
}: Props) => {
  const duplicateCount = calculateDuplicateCount({
    array: selectedCards,
    duplicateValue: filteredCard,
  })

  return (
    <Wrapper>
      <Card>{filteredCard}</Card>
      <p>{duplicateCount}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
