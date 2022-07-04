import { useState } from 'react'
import { IdType } from '@/types/index'
import { useCreateTheme } from '@/hooks/apiRequest/domain/theme/useCreateTheme'
import { useSubscribeRoom } from '@/hooks/useSubscribeRoom'
import { HasThemeRoom } from './HasThemeRoom'
import { getUrlParams } from '@/utils/getUrlParams'
import { Paragraph } from 'src/styles/standardStyles'
import styled from 'styled-components'
import { PrimaryButton } from '@/components/common/Button/PrimaryButton'
import { COLORS } from '@/constants/Colors'
import { Center } from 'src/styles/standardStyles'
import { Input } from '@/components/common/Form/Input'

interface Props {
  roomId: IdType
}

export const NoThemeRoom = ({ roomId }: Props) => {
  const { isConnected, selectedCards, title, totalCount, handleResetState } = useSubscribeRoom({
    roomId,
  })
  const [inputTitle, setInputTitle] = useState('')
  const { createTheme } = useCreateTheme({ roomId })
  const themeId = getUrlParams('theme_id')
  const hasTheme = !!themeId

  const handleCreateTitleButtonOnClick = () => {
    if (!inputTitle) return null
    createTheme(inputTitle)
  }

  if (!isConnected) return null

  return (
    <div>
      {hasTheme ? (
        <HasThemeRoom
          roomId={roomId}
          title={title}
          selectedCards={selectedCards}
          themeId={themeId}
          handleResetState={handleResetState}
        />
      ) : (
        <div>
          <ParagraphWrapper>
            <Paragraph>Please Enter The Item Title</Paragraph>
          </ParagraphWrapper>
          <Center>
            <Input onChange={(e) => setInputTitle(e.target.value)} />
          </Center>
          <Center>
            <CreateTitleButtonWrapper>
              <PrimaryButton onClick={handleCreateTitleButtonOnClick} text='create title' />
            </CreateTitleButtonWrapper>
          </Center>
          <Center>{<div>totalCount: {totalCount}</div>}</Center>
        </div>
      )}
    </div>
  )
}

const ParagraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0 16px 0;
`
const CreateTitleButtonWrapper = styled.div`
  margin-bottom: 16px;
`
