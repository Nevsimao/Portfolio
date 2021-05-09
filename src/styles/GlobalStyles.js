// globalStyles.js
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100&display=swap');

  body {
    margin: 0;
    padding: 0;
    background: rgb(32, 32, 32);
    font-family: 'Montserrat', sans-serif
  }

  * {
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }
`
