import { useRouter } from 'next/router'
import { copyToClipBoard } from '@/utils/copyToClipboard'

export const Header = () => {
  const router = useRouter()
  const { roomId } = router.query

  const handleCopyButtonOnClick = () => {
    copyToClipBoard(window.location.href)
  }

  return (
    <div>
      Planning Poker Room
      {roomId && <p>RoomId: {roomId}</p>}
      {roomId && <button onClick={handleCopyButtonOnClick}>copy room url</button>}
    </div>
  )
}
