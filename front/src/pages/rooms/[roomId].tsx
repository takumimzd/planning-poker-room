import { useCreateRoom } from '@/hooks/apiRequest/domain/room/useCreateRoom'
import { useGetQuery } from '@/hooks/useGetQuery'
import { useSubscribeRoom } from '@/hooks/useSubscribeRoom'

const Room = () => {
  const roomId = useGetQuery('roomId') as string
  const { selectedCards, title } = useSubscribeRoom({ roomId })
  const { createRoom } = useCreateRoom()
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={createRoom}>create title</button>
      {selectedCards.map((card) => card)}
    </div>
  )
}

export default Room
