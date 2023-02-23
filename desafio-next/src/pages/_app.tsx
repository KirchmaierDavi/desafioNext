import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

import'@fontsource/wallpoet/400.css';

import '../styles/globals.css'
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider resetCSS theme={theme}>
    <Navbar />
     <Component {...pageProps} />
    <Footer />
    </ChakraProvider>
  )
}
