import { IdType } from '@/types/index'
import { useRouter } from 'next/router'
import { CardType } from '@/types/card'
import { useUpdateThemeCount } from '@/hooks/apiRequest/domain/theme/useUpdateThemeCount'

interface Props {
  roomId: IdType
  themeId: IdType
  decidedCard: CardType
}

export const DecideCountButton = ({ roomId, themeId, decidedCard }: Props) => {
  const router = useRouter()
  const { updateThemeCount } = useUpdateThemeCount({ roomId, themeId, count: decidedCard })
  const handleOnClick = () => {
    updateThemeCount()
    router.push(`/rooms/${roomId}`)
  }
  return <button onClick={handleOnClick}>confirm card</button>
}
