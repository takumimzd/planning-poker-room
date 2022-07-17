import { useRouter } from 'next/router'
import styled from 'styled-components'
import { SHADOW } from '@/constants/Shadow'
import { copyToClipBoard } from '@/utils/copyToClipboard'
import { PrimaryButton } from '@/components/common/Button/PrimaryButton'
import Link from 'next/link'
import { SecondaryButton } from '../common/Button/SecondaryButton'

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
          <ButtonWrapper>
            <SecondaryButton
              text='Copy Room Url'
              onClick={handleCopyButtonOnClick}
            ></SecondaryButton>
          </ButtonWrapper>
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

const ButtonWrapper = styled.div`
  margin-left: 36px;
`
