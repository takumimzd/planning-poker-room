import { useEffect, useState } from 'react'
import { IdType } from 'src/types'

interface UseSubscribeRoomPropsType {
  roomId: IdType
}

interface ReceivedDataType {
  selected_card: number[]
}

export const useSubscribeRoom = ({ roomId }: UseSubscribeRoomPropsType) => {
  let ActionCable = null as any
  if (typeof window !== 'undefined') {
    ActionCable = require('actioncable')
  }

  const [selectedCards, setSelectedCards] = useState<number[]>([])
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
          setSelectedCards(data.selected_card)
        },
      },
    )
  }
  useEffect(() => {
    setSubscription()
  }, [])

  return {
    selectedCards,
  }
}
