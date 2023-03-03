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
      h={{base: "185vh", md: "165vh", lg: "230vh"}}
      align={"center"}
      justify={"flex-start"}
      spacing={{ base: 32, md: 64, lg: 128, xl: 140, '2xl': 252 }}

    >
      <Stack align={'center'} spacing={30} marginTop={232}>
        <Box w={{base:"250px", md:"400px",lg:"600px", xl:"800px" ,'2xl':"1000px"}} h={"155px"}>
          <NextImage
          as="img"
          src={Logo}
          height={"100%"}
          width={"100%"}
          sizes={""}
        />
        </Box>
        
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
            <Box>
              <NextImage as="img" width={"100%"} height={"100%"}  src={item1}/>
            </Box>
            <Box>
              <NextImage as="img" width={"100%"} height={"100%"} src={item2}/>
            </Box>
            <Box>
              <NextImage as="img" width={"100%"} height={"100%"}  src={item3}/>
            </Box>
            
          </HStack>
        </Box>
      </Stack>
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
          <Stack>
            <Text as={"span"} color={"#00A6FB"} fontFamily={"Wallpoet"} fontSize={{ base: 16, md: 24, lg: 28, xl: 32, '2xl': 36 }} textAlign={"center"}>quem somos:</Text>
            <Box as={"div"} h={"fit-content"} spacing={{ base: 4, md: 4, lg: 16, xl: 24, '2xl': 36 }} bg={"#006494"} py={{ base: "8px", md: "16px", lg: "24px", '2xl': "40px" }} px={{ base: "8px", md: "20px", lg: "32px", '2xl': "52px" }} borderRadius={15}>
              <Text as="p" align={"center"} justifyContent={"center"} fontSize={"14px"} fontFamily={"Wallpoet"}>
              A Blueskins é um site de aprendizado desenvolvido por um viciado em jogos de tiro, 
              que se mudou pra o CS:GO, e apesar de ser ruim, tem a vontade de vender skins de forma justa.
              não to sabendo o que escrever aqui entao vou enrolar só pra ficar mais ou menos do tamanho do container.
              SANTOS FUTEBOL CLUBE O MAIOR TIME DA TERRA GIGANTESCO SÓ O SANTOS PAROU UMA GUERRA
              </Text>
            </Box>
          </Stack>
        </Box>
    </Stack>
  )
}
