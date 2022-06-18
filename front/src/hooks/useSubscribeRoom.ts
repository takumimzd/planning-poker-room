import { useEffect, useRef, useState } from 'react'
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

  const channelRef = useRef<any>(null)
  const cableRef = useRef<any>(null)

  if (themeId) {
    history.pushState('', '', `${roomId}?theme_id=${themeId}`)
  }

  const setSubscription = () => {
    const endpoint = 'ws://localhost:3001/cable'
    cableRef.current = ActionCable.createConsumer(endpoint)
    channelRef.current = cableRef.current.subscriptions.create(
      {
        channel: 'RoomChannel',
        room_id: `${roomId}`,
      },
      {
        connected: () => {
          setIsConnected(true)
        },
        received: (data: ReceivedDataType) => {
          setSelectedCards(data.selected_cards)
          setTitle(data.title)
          setThemeId(data.theme_id)
        },
      },
    )
  }

  useEffect(() => {
    setSubscription()
    return () => {
      channelRef.current.unsubscribe()
      cableRef.current.disconnect()
    }
  }, [])

  console.log(selectedCards)

  return {
    isConnected,
    selectedCards,
    title,
    themeId,
  }
}
