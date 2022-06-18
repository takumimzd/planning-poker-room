import { GetRoomResponseType } from '@/types/api/room'

export const getRoomMapper = (res: GetRoomResponseType | undefined) => {
  if (res === undefined) return { data: null }

  return {
    data: {
      selectedCards: res.cards.map((card) => card.count) || null,
      themes: res.themes || null,
    },
  }
}
