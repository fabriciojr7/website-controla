import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: 'sofiapro';
    src: url('/sofiapro.ttf') format('truetype');
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body{
    font-family: sofiapro;
  }
  a{
    text-decoration: none;
  }
  >p{
    font-size: 16px;
    line-height: 25px;
  }
`

export default GlobalStyle;