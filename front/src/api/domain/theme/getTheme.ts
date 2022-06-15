import Get from '@/api/base/get'
import { IdType } from '@/types/index'

interface GetThemeParamsType {
  themeId: IdType
  roomId: IdType
}

const getTheme = async ({ themeId, roomId }: GetThemeParamsType) => {
  return await Get(`themes/${themeId}?room_id=${roomId}`)
}

export default getTheme
