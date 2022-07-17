import styled from 'styled-components'
import { Card } from '@/components/common/Card/Card'
import { CardType } from '@/types/card'
import { Center } from 'src/styles/standardStyles'

interface Props {
  myCard: CardType
}

export const MyCard = ({ myCard }: Props) => {
  return (
    <Center>
      {!myCard ? (
        <CardContainer>
          <Card>{myCard}</Card>
        </CardContainer>
      ) : (
        <CardContainer>
          <Card>{myCard}</Card>
        </CardContainer>
      )}
    </Center>
  )
}

const CardContainer = styled.div`
  width: 80px;
  height: 115px;
`
