import { THEME } from '@/constants/Colors'
import { SHADOW } from '@/constants/Shadow'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: ${THEME.BACKGROUND_COLOR};
  }
  p {
    margin: 0;
    text-shadow: ${SHADOW.MAIN};
  }
  input {
    box-shadow: ${SHADOW.MAIN};
    border: none;
  }
  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
    box-shadow: ${SHADOW.MAIN};
}
`
