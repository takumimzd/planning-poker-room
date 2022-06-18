import { COLORS } from '@/constants/Colors'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: ${COLORS.BACKGROUND_COLOR};
  }
`
