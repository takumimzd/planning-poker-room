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
  height: 100%;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`
