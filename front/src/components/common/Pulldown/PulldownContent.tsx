import React from 'react'
import styled from 'styled-components'
import { SHADOW } from '@/constants/Shadow'

interface Props {
  children: React.ReactNode
  isDisplay?: boolean
}

export const PulldownContent = ({ children, isDisplay }: Props) => (
  <PulldownContentsWrapper className={isDisplay ? 'isDisplay' : undefined}>
    {children}
  </PulldownContentsWrapper>
)

const PulldownContentsWrapper = styled.div`
  margin-top: 4px;
  position: absolute;
  z-index: 1;
  display: none;
  border-radius: 4px;
  border: solid 1px black;
  border-bottom: none;
  height: 300px;
  overflow: scroll;
  &.isDisplay {
    display: block;
  }
  & > :first-child {
    border-radius: 4px 4px 0 0;
  }
  & > :last-child {
    border-radius: 0 0 4px 4px;
  }
`
