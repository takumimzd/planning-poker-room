import { IdType } from '@/types/index'
import { useRouter } from 'next/router'
import { CardType } from '@/types/card'
import { useUpdateThemeCount } from '@/hooks/apiRequest/domain/theme/useUpdateThemeCount'
import { PrimaryButton } from '../common/Button/PrimaryButton'
import styled from 'styled-components'

interface Props {
  roomId: IdType
  themeId: IdType
  decidedCard: CardType
  handleResetState: () => void
}

export const DecideCountButton = ({ roomId, themeId, decidedCard, handleResetState }: Props) => {
  const router = useRouter()
  const { updateThemeCount } = useUpdateThemeCount({ roomId, themeId, count: decidedCard })
  const handleOnClick = () => {
    updateThemeCount()
    handleResetState()
    router.push(`/rooms/${roomId}`)
  }
  return (
    <Wrapper>
      <PrimaryButton onClick={handleOnClick} text='Next Planning' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 200px;
  margin-right: 240px;
`
