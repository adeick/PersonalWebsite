import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools";


const breakpoints = createBreakpoints({
  sm: "400px",
  md: "620px",
  lg: "62em",
  xl: "80em",
});

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({
  fonts: {
    body: 'Lexend Deca, sans-serif',
    heading: 'Lexend Deca, sans-serif',
  },
  fontWeights: {
    light: 200,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  config,
  breakpoints,
});

export default theme;
