import NextImage from 'next/image'

import { Inter } from '@next/font/google'
import { HStack, Stack, Box, Image, Text, Input, Button } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Stack as={"main"} height={"100vh"} align={"center"} justify={"center"}>
        <Stack width={"70%"} height={"fit-content"} spacing={{base: "20px", md:"62px"}} bg={"#003554"} justify={"center"} align={"center"} py={{base: "40px",md: "84px"}} px={{base: "40px",md: "84px"}} borderRadius={"40px"}>
          <Box>
            <NextImage src={'/../public/blueskins-low-resolution-logo-white-on-transparent-background.png'} alt={'Logo do Blueskins'} width={240} height={160} />
          </Box>
          <Input placeholder='Usuario' size={"lg"} textAlign={"center"} fontFamily={"wallpoet"} textTransform={"uppercase"} fontSize={{base: "12px",md: "24px"}} variant={"outline"} bg={"#051923"} border={"none"}/>
          <Input type={"password"} size={"lg"} placeholder='senha' textAlign={"center"} fontFamily={"wallpoet"} textTransform={"uppercase"} fontSize={{base: "12px",md: "24px"}}variant={"outline"} bg={"#051923"} border={"none"}/>
          <Button colorScheme={"blue"} fontFamily={"wallpoet"} textTransform={"uppercase"} fontSize={"24px"} variant={"solid"}>entrar</Button>
        </Stack>
    </Stack>
  )
}