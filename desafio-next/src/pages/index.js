import Head from 'next/head'
import NextImage from 'next/image'

import { Inter } from '@next/font/google'
import { Stack, Box } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Stack
      as= "main"
      h={"150vh"}
    >
     <NextImage
      as="img"
      src='/../public/blueskins-high-resolution-logo-white-on-transparent-background.png'
      height={{base: 70, md: 80, lg: 100, xl: 155}}
      width={{base: 200, md: 400, lg: 600, xl: 800, '2xl': 1000}}
      justify={"center"}
      align={"center"}
     >

     </NextImage>

    </Stack>
  )
}
