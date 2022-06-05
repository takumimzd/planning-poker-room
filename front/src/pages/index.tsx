import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCreateRoom } from '@/hooks/apiRequest/domain/room/useCreateRoom'

const Home: NextPage = () => {
  const router = useRouter()
  const { createRoom } = useCreateRoom()

  const handleOnClick = async () => {
    const data = await createRoom()
    router.push(`rooms/${data.room_id}`)
  }
  return (
    <div>
      <Head>
        <title>PlanningPokerRoom</title>
        <meta name='description' content='PlanningPokerRoom<' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <button onClick={handleOnClick}>create New Room</button>
    </div>
  )
}

export default Home
