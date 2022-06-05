import { Post } from '@/api/base/post'
import { IdType } from '@/types/index'

interface CreateThemeResponseType {
  status: number
}

interface CreateThemeParamsType {
  roomId: IdType
  title: string
}

const createTheme = async ({ roomId, title }: CreateThemeParamsType) => {
  const postData = {
    title,
    room_id: roomId,
  }

  const { data } = await Post<CreateThemeResponseType>('themes', postData)
  return data
}

export default createTheme
