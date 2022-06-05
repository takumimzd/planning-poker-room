import { Post } from '@/api/base/post'

interface CreateRoomResponseType {
  status: number
  room_id: number
}
const createRoom = async () => {
  const postData = {
    title: 'アイテム名',
  }
  const { data } = await Post<CreateRoomResponseType>('rooms', postData)
  return data
}

export default createRoom
