import { SHADOW } from '@/constants/Shadow'
import styled from 'styled-components'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({ ...props }: InputProps) => {
  return <StyledInput {...props} type='text' />
}

const StyledInput = styled.input`
  border-radius: 4px;
  box-shadow: ${SHADOW.MAIN};
  width: 254px;
  height: 16px;
  padding: 8px;
`
