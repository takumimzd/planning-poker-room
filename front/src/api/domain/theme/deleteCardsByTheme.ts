import { Delete } from '@/api/base/delete'
import { IdType } from '@/types/index'

interface CreateThemeParamsType {
  roomId: IdType
  themeId: IdType
}

const deleteCardsByTheme = async ({ themeId, roomId }: CreateThemeParamsType) => {
  const { data } = await Delete(`themes/destroy_cards/${themeId}?room_id=${roomId}`)
  return data
}

export default deleteCardsByTheme
