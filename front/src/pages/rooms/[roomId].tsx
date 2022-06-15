import { NoThemeRoom } from '@/components/domain/room/template/NoThemeRoom'
import { useGetQuery } from '@/hooks/useGetQuery'

const Room = () => {
  const roomId = useGetQuery('roomId') as string

  if (!roomId) return null
  return <NoThemeRoom roomId={roomId} />
}

export default Room
