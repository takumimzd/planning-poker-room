import styled from 'styled-components'
import { NoThemeRoom } from '@/components/domain/room/template/NoThemeRoom'
import { Header } from '@/components/layout/Header'
import { useGetQuery } from '@/hooks/useGetQuery'

const Room = () => {
  const roomId = useGetQuery('roomId') as string

  if (!roomId) return null
  return (
    <Wrapper>
      <Header />
      <NoThemeRoom roomId={roomId} />
    </Wrapper>
  )
}

export default Room

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
