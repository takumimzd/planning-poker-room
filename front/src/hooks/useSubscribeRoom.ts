import { useEffect, useState } from 'react'
import { IdType } from 'src/types'

interface UseSubscribeRoomPropsType {
  roomId: IdType
}

interface ReceivedDataType {
  selected_card: number[]
  title: string
}

export const useSubscribeRoom = ({ roomId }: UseSubscribeRoomPropsType) => {
  let ActionCable = null as any
  if (typeof window !== 'undefined') {
    ActionCable = require('actioncable')
  }

  const [selectedCards, setSelectedCards] = useState<number[]>([])
  const [title, setTitle] = useState('')

  const setSubscription = () => {
    const endpoint = 'ws://localhost:3001/cable'
    ActionCable.createConsumer(endpoint).subscriptions.create(
      {
        channel: 'RoomChannel',
        room_id: `${roomId}`,
      },
      {
        connected: () => {},
        received: (data: ReceivedDataType) => {
          if (!!data.selected_card.length) setSelectedCards(data.selected_card)
          if (!!data.title) setTitle(data.title)
        },
      },
    )
  }
  useEffect(() => {
    setSubscription()
  }, [])

  return {
    selectedCards,
    title,
  }
}
