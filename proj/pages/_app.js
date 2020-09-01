import React from 'react';
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
} from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
import theme from '../styles/theme';

const GlobalStyle = ({ children }) => (
  <>
    <CSSReset />
    <Global
      styles={css`
        ::selection {
          background-color: #47a3f3;
          color: #fefefe;
        }

        html {
          min-width: 360px;
          height: -webkit-fill-available;
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          height: 0px;
          width: 0px;
          background: transparent;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: '#ffffff';
        }
      `}
    />
    {children}
  </>
);

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider value="light">
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ColorModeProvider>
  </ThemeProvider>
);

export default App;
