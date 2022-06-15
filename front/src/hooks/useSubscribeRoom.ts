import { useEffect, useState } from 'react'
import { IdType } from '@/types/index'

interface UseSubscribeRoomPropsType {
  roomId: IdType
}

interface ReceivedDataType {
  selected_cards: number[]
  title: string
  theme_id: IdType
}

export const useSubscribeRoom = ({ roomId }: UseSubscribeRoomPropsType) => {
  let ActionCable = null as any
  if (typeof window !== 'undefined') {
    ActionCable = require('actioncable')
  }

  const [selectedCards, setSelectedCards] = useState<number[]>([])
  const [title, setTitle] = useState('')
  const [themeId, setThemeId] = useState<IdType>('')
  const [isConnected, setIsConnected] = useState(false)

  if (themeId) {
    history.pushState('', '', `${roomId}?theme_id=${themeId}`)
  }

  const setSubscription = () => {
    const endpoint = 'ws://localhost:3001/cable'
    ActionCable.createConsumer(endpoint).subscriptions.create(
      {
        channel: 'RoomChannel',
        room_id: `${roomId}`,
      },
      {
        connected: () => {
          setIsConnected(true)
        },
        received: (data: ReceivedDataType) => {
          console.log({ data })

          if (!!data.selected_cards.length) setSelectedCards(data.selected_cards)
          if (!!data.title) setTitle(data.title)
          if (!!data.theme_id) setThemeId(data.theme_id)
        },
      },
    )
  }
  useEffect(() => {
    setSubscription()
  }, [])

  return {
    isConnected,
    selectedCards,
    title,
    themeId,
  }
}
