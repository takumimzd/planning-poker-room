import { useState } from 'react'
import { IdType } from '@/types/index'
import { useCreateTheme } from '@/hooks/apiRequest/domain/theme/useCreateTheme'
import { useSubscribeRoom } from '@/hooks/useSubscribeRoom'
import { HasThemeRoom } from './HasThemeRoom'
import { getUrlParams } from '@/utils/getUrlParams'
import useGetRoom from '@/hooks/apiRequest/domain/room/useGetRoom'

interface Props {
  roomId: IdType
}

export const NoThemeRoom = ({ roomId }: Props) => {
  const { isConnected, selectedCards, title } = useSubscribeRoom({ roomId })
  const { data } = useGetRoom({ roomId })
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
        />
      ) : (
        <div>
          <input onChange={(e) => setInputTitle(e.target.value)} />
          <button onClick={handleCreateTitleButtonOnClick}>create title</button>
          {data && data.totalCount && <div>totalCount: {data.totalCount}</div>}
        </div>
      )}
    </div>
  )
}
