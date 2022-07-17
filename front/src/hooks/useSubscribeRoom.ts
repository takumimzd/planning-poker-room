import { useEffect, useRef, useState } from 'react'
import { IdType } from '@/types/index'
import { getUrlParams } from '@/utils/getUrlParams'

interface UseSubscribeRoomPropsType {
  roomId: IdType
}

interface ReceivedDataType {
  selected_cards: number[]
  title: string
  theme_id: IdType
  total_count: number
}

export const useSubscribeRoom = ({ roomId }: UseSubscribeRoomPropsType) => {
  const themeIdParams = getUrlParams('theme_id')
  let ActionCable = null as any
  if (typeof window !== 'undefined') {
    ActionCable = require('actioncable')
  }

  const [selectedCards, setSelectedCards] = useState<number[]>([])
  const [title, setTitle] = useState('')
  const [themeId, setThemeId] = useState<IdType | null>(themeIdParams)
  const [isConnected, setIsConnected] = useState(false)
  const [totalCount, setTotalCount] = useState(0)
  const handleResetState = () => {
    setThemeId('')
    setTitle('')
  }

  const handleResetSelectedCard = () => {
    setSelectedCards([])
  }
  const channelRef = useRef<any>(null)
  const cableRef = useRef<any>(null)

  if (themeId) {
    history.pushState('', '', `${roomId}?theme_id=${themeId}`)
  } else {
    history.pushState('', '', `${roomId}`)
  }

  const setSubscription = () => {
    const endpoint = 'ws://localhost:3001/cable'
    cableRef.current = ActionCable.createConsumer(endpoint)
    channelRef.current = cableRef.current.subscriptions.create(
      {
        channel: 'RoomChannel',
        room_id: `${roomId}`,
        theme_id: `${themeId}`,
      },
      {
        connected: () => {
          setIsConnected(true)
        },
        received: (data: ReceivedDataType) => {
          setSelectedCards(data.selected_cards)
          setTitle(data.title)
          setThemeId(data.theme_id)
          setTotalCount(data.total_count)
          if (!data.theme_id) {
            history.pushState('', '', `${roomId}`)
          } else {
            history.pushState('', '', `${roomId}?theme_id=${data.theme_id}`)
          }
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

  return {
    isConnected,
    selectedCards,
    title,
    themeId,
    totalCount,
    handleResetState,
    handleResetSelectedCard,
  }
}
