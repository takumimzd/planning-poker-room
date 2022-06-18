import { IdType } from '../index'

export interface GetRoomResponseType {
  room: RoomType
  themes: ThemeType[]
}

interface RoomType {
  id: IdType
  total_count: number
}

interface ThemeType {
  id: IdType
  title: string
  count: number
}
