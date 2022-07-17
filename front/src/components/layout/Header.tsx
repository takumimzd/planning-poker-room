import { useRouter } from 'next/router'
import styled from 'styled-components'
import { SHADOW } from '@/constants/Shadow'
import { copyToClipBoard } from '@/utils/copyToClipboard'
import Link from 'next/link'

export const Header = () => {
  const router = useRouter()
  const { roomId } = router.query

  const handleCopyButtonOnClick = () => {
    copyToClipBoard(window.location.href)
  }

  return (
    <Wrapper>
      <Link href={'/'}>
        <Logo>Planning Poker Room</Logo>
      </Link>
      {roomId && (
        <>
          <p>Room No : {roomId}</p>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  box-shadow: ${SHADOW.MAIN};
  padding: 8px 16px 8px 16px;
`
const Logo = styled.p`
  margin-right: 64px;
  font-size: 24px;
  font-weight: bold;
  text-shadow: ${SHADOW.MAIN};
  cursor: pointer;
`
