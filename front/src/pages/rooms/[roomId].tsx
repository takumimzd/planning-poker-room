import { RoomTemplate } from '@/components/domain/room/template/RoomTemplate'
import { useGetQuery } from '@/hooks/useGetQuery'

const Room = () => {
  const roomId = useGetQuery('roomId') as string
  if (!roomId) return null

  return <RoomTemplate roomId={roomId} />
}

export default Room
