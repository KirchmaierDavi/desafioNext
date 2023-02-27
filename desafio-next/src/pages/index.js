import Logo from 'public/blueskins-high-resolution-logo-white-on-transparent-background.png'
import NextImage from 'next/image'

import { Inter } from '@next/font/google'
import { HStack, Stack, Box, Image, Text } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Stack
      as="div"
      h={"200vh"}
      align={"center"}
      justify={"flex-start"}
      spacing={{ base: 32, md: 64, lg: 128, xl: 140, '2xl': 252 }}

    >
      <Stack align={'center'} spacing={30} marginTop={232}>
        <NextImage
          as="img"
          src={Logo}
          height={155}
          width={1000}
        />
        <Box
          as='section'
          w={"fit-content"}
          height={"fit-content"}
          bg={"#003554"}
          py={{ base: 8, md: 12, lg: 20 }}
          px={{ base: 4, md: 32, lg: 60, xl: 120, '2xl': 180 }}
          borderRadius={"15px"}
          boxShadow={20}
        >
          <Stack as="div">
            <Text
              as={"p"}
              fontFamily={"Wallpoet"}
              textAlign={"center"}
              fontSize={{ base: 12, md: 20, lg: 24, xl: 28, '2xl': 32 }}
            >
              OS ITENS MAIS PROCURADOS VOCÊ ENCONTRA AQUI!
            </Text>
            <Text as={"span"} color={"#00A6FB"} fontFamily={"Wallpoet"} fontSize={{ base: 12, md: 20, lg: 24, xl: 28, '2xl': 32 }} textAlign={"center"}>PRINCIPAIS DA SEMANA!</Text>
          </Stack>
          <HStack as={"div"} spacing={56}>

          </HStack>
        </Box>
      </Stack>
    </Stack>
  )
}
