import Logo from 'public/blueskins-high-resolution-logo-white-on-transparent-background.png'
import item1 from 'public/01.png'
import item2 from 'public/02.png'
import item3 from 'public/03_duality.png'

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
          sizes={""}
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
          <HStack as={"div"} spacing={{ base: 4, md: 4, lg: 16, xl: 24, '2xl': 36 }} bg={"#006494"} py={{ base: "8px", md: "16px", lg: "24px", '2xl': "40px" }} px={{ base: "8px", md: "20px", lg: "32px", '2xl': "52px" }} borderRadius={15}>
            <NextImage as="img" src={item1} sizes={"(min-width: 1440px) 40vw, (max-width: 1440px) 40vw, (min-width: 820px) 20vw, (min-width: 414px) 10vw, (min-width: 279px) 5vw"} />
            <NextImage as="img" src={item2} sizes={"(min-width: 1440px) 40vw, (max-width: 1440px) 40vw, (min-width: 820px) 20vw, (min-width: 414px) 10vw, (min-width: 279px) 5vw"} />
            <NextImage as="img" src={item3} sizes={"(min-width: 1440px) 40vw, (max-width: 1440px) 40vw, (min-width: 820px) 20vw, (min-width: 414px) 10vw, (min-width: 279px) 5vw"} />
          </HStack>
        </Box>
      </Stack>
    </Stack>
  )
}
