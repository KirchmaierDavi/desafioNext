import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';
import { Navbar } from '../components/Navbar/index';
import '../styles/globals.css'
import React from 'react';

export default function App({ Component, pageProps }) {
  return(
    <ChakraProvider resetCSS theme={theme}>
    <Navbar />
     <Component {...pageProps} />
    </ChakraProvider>
  )
}
