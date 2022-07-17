import styled from 'styled-components'
import { Card } from '@/components/common/Card/Card'
import { CARD_CONTENTS } from '@/constants/Card'

interface Props {
  cardOnClick: (card: number) => void
}
export const CardList = ({ cardOnClick }: Props) => {
  return (
    <Ul>
      {CARD_CONTENTS.map((card) => (
        <Li key={card} onClick={() => cardOnClick(card)}>
          <Card>{card}</Card>
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
  min-width: 80px;
  min-height: 110px;
  margin-left: 8px;
  margin-right: 8px;
`
