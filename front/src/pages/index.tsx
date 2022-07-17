import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCreateRoom } from '@/hooks/apiRequest/domain/room/useCreateRoom'
import { Header } from '@/components/layout/Header'
import styled from 'styled-components'
import { PrimaryButton } from '@/components/common/Button/PrimaryButton'
import { SHADOW } from '@/constants/Shadow'
import { Input } from '@/components/common/Form/Input'
import { Paragraph } from 'src/styles/standardStyles'

const Home: NextPage = () => {
  const router = useRouter()
  const { createRoom } = useCreateRoom()
  const [enterRoomId, setEnterRoomId] = useState<number>()

  const handleCreateNewRoomOnClick = async () => {
    const data = await createRoom()
    router.push(`rooms/${data.room_id}`)
  }
  const handleEnterRoomOnClick = () => {
    router.push(`rooms/${enterRoomId}`)
  }

  const handleEnterRoomOnChange = (value: string) => {
    if (isNaN(Number(value))) return

    setEnterRoomId(Number(value))
  }
  return (
    <div>
      <Head>
        <title>PlanningPokerRoom</title>
        <meta name='description' content='PlanningPokerRoom<' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <CreateButtonWrapper>
        <PrimaryButton text='Create New Room' onClick={handleCreateNewRoomOnClick} />
      </CreateButtonWrapper>
      <OR>OR</OR>
      <ParagraphWrapper>
        <Paragraph>Please Enter The Room Number </Paragraph>
      </ParagraphWrapper>
      <InputWrapper>
        <Input onChange={(event) => handleEnterRoomOnChange(event.target.value)} />
      </InputWrapper>
      <Wrapper>
        <PrimaryButton
          text='Enter The Room'
          disabled={!enterRoomId}
          onClick={handleEnterRoomOnClick}
        />
      </Wrapper>
    </div>
  )
}

export default Home

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`

const CreateButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
`

const OR = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  font-size: 16px;
  text-shadow: ${SHADOW.MAIN};
`

const ParagraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  padding-bottom: 8px;
`

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`
