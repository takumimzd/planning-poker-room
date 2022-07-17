import { useState } from 'react'
import { IdType } from '@/types/index'
import { useCreateTheme } from '@/hooks/apiRequest/domain/useCreateTheme'
import { useSubscribeRoom } from '@/hooks/useSubscribeRoom'
import { HasThemeRoom } from './HasThemeRoom'
import { getUrlParams } from '@/utils/getUrlParams'
import { Paragraph } from 'src/styles/standardStyles'
import styled from 'styled-components'
import { PrimaryButton } from '@/components/common/Button/PrimaryButton'
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
            <Paragraph>Please Enter The Item Name</Paragraph>
          </ParagraphWrapper>
          <Center>
            <Input onChange={(e) => setInputTitle(e.target.value)} />
          </Center>
          <Center>
            <CreateTitleButtonWrapper>
              <PrimaryButton onClick={handleCreateTitleButtonOnClick} text='Confirm' />
            </CreateTitleButtonWrapper>
          </Center>
          {!totalCount && <Center>{<Paragraph>totalCount: {totalCount}</Paragraph>}</Center>}
        </div>
      )}
    </div>
  )
}

const ParagraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 64px 0 16px 0;
`
const CreateTitleButtonWrapper = styled.div`
  margin: 32px 0;
`
