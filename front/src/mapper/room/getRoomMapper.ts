import { GetRoomResponseType } from '@/types/api/room'

export const getRoomMapper = (res: GetRoomResponseType | undefined) => {
  if (res === undefined) return { data: null }

  return {
    data: {
      totalCount: res.room.total_count,
      themes: res.themes || null,
    },
  }
}
