import React, { Dispatch, forwardRef, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import { Pulldown, PulldownContent, PulldownItem } from '@/components/common/Pulldown'
import { CARD_CONTENTS } from '@/constants/Card'
import { CardType } from '@/types/card'

interface Props {
  decidedCard: CardType
  setDecidedCard: Dispatch<SetStateAction<null | number>>
}
export const DecidedCardPullDown = forwardRef<HTMLDivElement, Props>(
  ({ decidedCard, setDecidedCard }, ref) => {
    const [isDisplay, setIsDisplay] = useState(false)

    const handlePulldownItemOnClick = (card: number) => {
      setIsDisplay(!isDisplay)
      setDecidedCard(card)
    }
    return (
      <PulldownContainer>
        <Pulldown ref={ref}>
          <button
            onClick={() => {
              setIsDisplay(!isDisplay)
            }}
          >
            {decidedCard !== null ? decidedCard : 'Decided Point'}
          </button>
          <PulldownContent isDisplay={isDisplay}>
            {CARD_CONTENTS.map((content) => (
              <PulldownItem key={content} onClick={() => handlePulldownItemOnClick(content)}>
                <p>{content}</p>
              </PulldownItem>
            ))}
          </PulldownContent>
        </Pulldown>
      </PulldownContainer>
    )
  },
)

const PulldownContainer = styled.div`
  height: 400px;
`
