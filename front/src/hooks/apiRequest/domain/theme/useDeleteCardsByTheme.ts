import deleteCardsByThemes from '@/api/domain/theme/deleteCardsByTheme'
import { IdType } from '@/types/index'

interface UseCreateThemePropsType {
  roomId: IdType
  themeId: IdType
}

export const useDeleteCardsByTheme = ({ roomId, themeId }: UseCreateThemePropsType) => {
  const handleDeleteCardsByTheme = async () => {
    const data = await deleteCardsByThemes({ roomId, themeId })
    return data
  }

  return { deleteCardsByTheme: handleDeleteCardsByTheme }
}
