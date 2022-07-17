import { THEME } from '@/constants/Colors'
import { SHADOW } from '@/constants/Shadow'
import styled from 'styled-components'

export type ButtonProps = Props & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Props>

interface Props {
  text: string
}

export const SecondaryButton = ({ text, ...props }: ButtonProps) => {
  return (
    <Button {...props}>
      <Text>{text}</Text>
    </Button>
  )
}

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  min-width: 160px;
  text-shadow: ${SHADOW.MAIN};
  background-color: #fffce3;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
  border: 1px solid ${THEME.BORDER_COLOR.MAIN};
`

const Text = styled.span`
  &:disabled {
    text-shadow: none;
  }
`
