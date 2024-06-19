import { createGlobalStyle } from 'styled-components'

import RubikRegular from 'assets/fonts/Rubik-Regular.woff2'
import RubikMedium from 'assets/fonts/Rubik-Medium.woff2'
import RubikBold from 'assets/fonts/Rubik-Bold.woff2'

export const GlobalStyle = createGlobalStyle`
body {  
  @font-face {
    font-family: "Rubik";
    src: url(${RubikRegular}) format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Rubik";
    src: url(${RubikMedium}) format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Rubik";
    src: url(${RubikBold}) format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  font-family: 'Rubik', sans-serif;
  font-size: 18px;
}
`
