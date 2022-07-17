import styled from 'styled-components'
import { SecondaryButton } from '../common/Button/SecondaryButton'

interface Props {
  onClick: () => void
}

export const ResetCardButton = ({ onClick }: Props) => {
  return (
    <ButtonWrapper>
      <SecondaryButton onClick={onClick} text='Reset Planning' />
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  width: 160px;
`
