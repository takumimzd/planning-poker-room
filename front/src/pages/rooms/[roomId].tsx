import { useCreateRoom } from '@/hooks/apiRequest/domain/room/useCreateRoom'
import { useCreateTheme } from '@/hooks/apiRequest/domain/theme/useCreateTheme'
import { useGetQuery } from '@/hooks/useGetQuery'
import { useSubscribeRoom } from '@/hooks/useSubscribeRoom'

const Room = () => {
  const roomId = useGetQuery('roomId') as string
  if (!roomId) return null

  const { selectedCards, title } = useSubscribeRoom({ roomId })
  const { createTheme } = useCreateTheme({ roomId, title: 'アイテム名' })
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={createTheme}>create title</button>
      {selectedCards.map((card) => card)}
    </div>
  )
}

export default Room
