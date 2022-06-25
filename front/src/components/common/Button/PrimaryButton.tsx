import { SHADOW } from '@/constants/Shadow'
import styled from 'styled-components'

export type ButtonProps = Props & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Props>

interface Props {
  text: string
}

export const PrimaryButton = ({ text, ...props }: ButtonProps) => {
  return (
    <Button {...props}>
      <Text>{text}</Text>
    </Button>
  )
}

const Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  box-shadow: ${SHADOW.MAIN};
  text-shadow: ${SHADOW.MAIN};
  background-color: #ffee55;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`

const Text = styled.span`
  &:disabled {
    text-shadow: none;
  }
`
