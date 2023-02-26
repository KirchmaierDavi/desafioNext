import Logo from 'public/blueskins-high-resolution-logo-white-on-transparent-background.png'

import { Inter } from '@next/font/google'
import { Stack, Box, Image } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Stack
      as="main"
      h={"150vh"}
      align={"center"}
    >
      <Stack justify={"flex-start"} spacing={30}>
        <Image
          as="img"
          src={Logo}
          height={{ base: 70, md: 80, lg: 100, xl: 155 }}
          width={{ base: 200, md: 400, lg: 600, xl: 800, '2xl': 1000 }}
          alt={"Logo do Blueskins"}
        />
      </Stack>
    </Stack>
  )
}
