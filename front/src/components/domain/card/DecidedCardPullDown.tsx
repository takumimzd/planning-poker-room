import React, { forwardRef, useState } from 'react'
import styled from 'styled-components'
import { Pulldown, PulldownContent, PulldownItem } from '@/components/common/Pulldown'
import { CARD_CONTENTS } from '@/constants/Card'

export const DecidedCardPullDown = forwardRef<HTMLDivElement>(({}, ref) => {
  const [isDisplay, setIsDisplay] = useState(false)

  const handlePulldownItemOnClick = (card: number) => {
    setIsDisplay(!isDisplay)
  }
  return (
    <PulldownContainer>
      <Pulldown ref={ref}>
        <button
          onClick={() => {
            setIsDisplay(!isDisplay)
          }}
        >
          Decided Point
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
})

const PulldownContainer = styled.div`
  height: 400px;
`
