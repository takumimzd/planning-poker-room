import type { AppProps } from 'next/app'
import styled from 'styled-components'
import { COLORS } from '@/constants/Colors'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  )
}

export default MyApp

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.BACKGROUND_COLOR};
`
