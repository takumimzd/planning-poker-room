import { Post } from '@/api/base/post'

const createRoom = async () => {
  const { data } = await Post<null>('rooms')
  return data
}

export default createRoom
