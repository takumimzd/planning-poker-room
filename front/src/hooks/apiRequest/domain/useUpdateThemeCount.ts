import updateThemeCount from '@/api/domain/theme/updateThemeCount'
import { CardType } from '@/types/card'
import { IdType } from '@/types/index'

interface UseUpdateThemeCountPropsType {
  roomId: IdType
  themeId: IdType
  count: CardType
}

export const useUpdateThemeCount = ({ roomId, themeId, count }: UseUpdateThemeCountPropsType) => {
  const handleUpdateThemeCount = async () => {
    const data = await updateThemeCount({ roomId, themeId, count })
    return data
  }

  return { updateThemeCount: handleUpdateThemeCount }
}
