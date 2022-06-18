import { Patch } from '@/api/base/patch'
import { CardType } from '@/types/card'
import { IdType } from '@/types/index'

interface UpdateThemeCountParamsType {
  roomId: IdType
  themeId: IdType
  count: CardType
}

const updateThemeCount = async ({ themeId, roomId, count }: UpdateThemeCountParamsType) => {
  const { data } = await Patch(`themes/${themeId}?room_id=${roomId}&count=${count}`)
  return data
}

export default updateThemeCount
