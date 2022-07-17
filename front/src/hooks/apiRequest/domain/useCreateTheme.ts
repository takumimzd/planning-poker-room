import createTheme from '@/api/domain/theme/createTheme'
import { IdType } from '@/types/index'

interface UseCreateThemePropsType {
  roomId: IdType
}

export const useCreateTheme = ({ roomId }: UseCreateThemePropsType) => {
  const handleCreateTheme = async (title: string) => {
    const data = await createTheme({ roomId, title })
    return data
  }

  return { createTheme: handleCreateTheme }
}
