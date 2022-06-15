import { IdType } from '@/types/index'
import { useCreateTheme } from '@/hooks/apiRequest/domain/theme/useCreateTheme'
import { useSubscribeRoom } from '@/hooks/useSubscribeRoom'
import { HasThemeRoom } from './HasThemeRoom'
import { getUrlParams } from '@/utils/getUrlParams'

interface Props {
  roomId: IdType
}

export const NoThemeRoom = ({ roomId }: Props) => {
  const { isConnected, selectedCards, title } = useSubscribeRoom({ roomId })
  const { createTheme } = useCreateTheme({ roomId, title: 'アイテム名' })
  const themeId = getUrlParams('theme_id')
  const hasTheme = !!themeId

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
          <button onClick={createTheme}>create title</button>
        </div>
      )}
    </div>
  )
}
