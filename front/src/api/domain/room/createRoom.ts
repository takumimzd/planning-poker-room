import { Post } from '@/api/base/post'

interface CreateRoomResponseType {
  status: number
  room_id: number
}
const createRoom = async () => {
  const { data } = await Post<CreateRoomResponseType>('rooms')
  return data
}

export default createRoom
