import { createGlobalStyle } from 'styled-components'
import theme from "./styles/theme"


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.font};
  }

  html, body {
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #c06c84da, #6c5b7bda);
  }

  body {
    & > #root {

      /*width: 100%;
      height: 100%;*/
      width: 1920px;
      height:100vh;;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
    background: linear-gradient(to bottom, #c06c84da, #6c5b7bda);
  }
`
