import { IdType } from '../index'

export interface GetRoomResponseType {
  room: RoomType
  themes: ThemeType[]
  cards: CardType[]
}

interface RoomType {
  id: IdType
}

interface ThemeType {
  id: IdType
  title: string
  count: number
}

interface CardType {
  count: number
}
