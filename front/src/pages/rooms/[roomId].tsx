import { useGetQuery } from '@/hooks/useGetQuery'
import { useSubscribeRoom } from '@/hooks/useSubscribeRoom'

const Room = () => {
  const roomId = useGetQuery('roomId') as string
  const { selectedCards } = useSubscribeRoom({ roomId })
  return <div>{selectedCards.map((card) => card)}</div>
}

export default Room
