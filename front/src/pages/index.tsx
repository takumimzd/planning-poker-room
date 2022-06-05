import { useCreateRoom } from '@/hooks/apiRequest/domain/room/useCreateRoom'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  const { handleCreateRoom } = useCreateRoom()
  return (
    <div>
      <Head>
        <title>PlanningPokerRoom</title>
        <meta name='description' content='PlanningPokerRoom<' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <button onClick={handleCreateRoom}>create New Room</button>
    </div>
  )
}

export default Home
