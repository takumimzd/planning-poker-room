import { useEffect, useState } from 'react'
import ActionCable from 'actioncable'
import { IdType } from 'src/types'

interface UseSubscribeRoomPropsType {
  roomId: IdType
}
export const useSubscribeRoom = ({ roomId }: UseSubscribeRoomPropsType) => {
  let ActionCable = null as any
  if (typeof window !== 'undefined') {
    ActionCable = require('actioncable')
  }

  const [selectedCards, setSelectedCards] = useState<string[]>([])
  const setSubscription = () => {
    const endpoint = 'endpoint'
    ActionCable.createConsumer(endpoint).subscriptions.create(
      {
        channel: 'RoomChannel',
        room_id: `${roomId}`,
      },
      {
        connected: () => {
          console.log('コネクト成功')
        },
        received: (data: any) => {
          // railsで定義したbroadcast_messageで定義したメッセージが来る
          setSelectedCards(data)
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
