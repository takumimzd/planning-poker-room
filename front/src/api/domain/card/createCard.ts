import { Post } from '@/api/base/post'
import { IdType } from '@/types/index'

interface CreateCardResponseType {
  status: number
}

interface CreateCardParamsType {
  roomId: IdType
  cardCount: number
  themeId: IdType
}

const createCard = async ({ roomId, cardCount, themeId }: CreateCardParamsType) => {
  const postData = {
    count: cardCount,
    room_id: roomId,
    theme_id: themeId,
  }

  const { data } = await Post<CreateCardResponseType>('cards', postData)
  return data
}

export default createCard
