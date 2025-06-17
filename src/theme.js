import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Oswald', sans-serif`,
    body: `'Questrial', sans-serif`,
  },
  colors: {
    brand: {
      blue: '#0b5de0',
      black: '#2b2929',
      white: '#f5f5f5',
      navbar: '#4a4848',
      purple: '#6B46C1',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.black',
        color: 'brand.white',
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand.blue',
      },
      baseStyle: {
        fontFamily: 'Oswald',
        _hover: {
          bg: 'brand.blue',
        },
      },
    },
    Link: {
      baseStyle: {
        fontFamily: 'Oswald',
        color: 'brand.white',
        _hover: {
          color: 'brand.blue',
          textDecoration: 'none',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Oswald',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'Questrial',
        color: 'brand.white',
      },
    },
  },
});

export default theme; 