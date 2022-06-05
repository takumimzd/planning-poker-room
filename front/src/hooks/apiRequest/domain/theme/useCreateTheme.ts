import createTheme from '@/api/domain/theme/createTheme'
import { IdType } from '@/types/index'

interface UseCreateThemePropsType {
  roomId: IdType
  title: string
}

export const useCreateTheme = ({ roomId, title }: UseCreateThemePropsType) => {
  const handleCreateTheme = async () => {
    const data = await createTheme({ roomId, title })
    return data
  }

  return { createTheme: handleCreateTheme }
}
