import { THEME } from '@/constants/Colors'
import styled from 'styled-components'

interface CardProps {
  children: React.ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <CardWrapper>{children}</CardWrapper>
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%;
  border: 2px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  background-color: ${THEME.CARD_BACKGROUND_COLOR};
`
