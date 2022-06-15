import Get from '@/api/base/get'
import { IdType } from '@/types/index'

interface GetRoomParamsType {
  roomId: IdType
}

const getRoom = async ({ roomId }: GetRoomParamsType) => {
  return await Get(`rooms/${roomId}`)
}

export default getRoom
