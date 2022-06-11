import React, { forwardRef } from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

export const Pulldown = forwardRef<HTMLDivElement, Props>(({ children }, ref) => (
  <Container ref={ref}>{children}</Container>
))
const Container = styled.div`
  position: relative;
`
