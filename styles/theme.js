import { theme as chakraTheme } from '@chakra-ui/core';

const theme = {
  ...chakraTheme,
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
  breakpoints: ['400px', '620px', '62em', '80em'],
  icons: {
    ...chakraTheme.icons,
  },
};

export default theme;
