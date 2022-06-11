import createCard from '@/api/domain/card/createCard'
import createTheme from '@/api/domain/theme/createTheme'
import { IdType } from '@/types/index'

interface UseCreateCardPropsType {
  roomId: IdType
  themeId: IdType
}

export const useCreateCard = ({ roomId, themeId }: UseCreateCardPropsType) => {
  const handleCreateCard = async ({ cardCount }: { cardCount: number }) => {
    const data = await createCard({ roomId, cardCount, themeId })
    return data
  }

  return { createCard: handleCreateCard }
}
