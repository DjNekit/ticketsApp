import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  .pointer {
    cursor: pointer;
  }

  .desktop-hide {
    @media (min-width: 577px) {
      display: none!important;
    }
  }

  .mobile-hide {
    @media (max-width: 576px) {
      display: none!important;
    }
  }
`