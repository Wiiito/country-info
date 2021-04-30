import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito Sans", sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.text};
    transition: all .5s linear;
  }
`

export default GlobalStyle