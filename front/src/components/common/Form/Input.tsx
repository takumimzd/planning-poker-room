import { COLORS } from '@/constants/Colors'
import { SHADOW } from '@/constants/Shadow'
import styled from 'styled-components'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({ ...props }: InputProps) => {
  return <StyledInput {...props} type='text' />
}

const StyledInput = styled.input`
  border: 1px solid ${COLORS.BORDER_COLOR.MAIN};
  border-radius: 4px;
  padding: 8px 16px;
  width: 300px;
  box-shadow: ${SHADOW.MAIN};
`
