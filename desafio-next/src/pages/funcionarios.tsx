import NextImage from 'next/image'

import { Inter } from '@next/font/google'
import { HStack, Stack, Box, Image, Text, Input, Button } from '@chakra-ui/react'
import { Footer } from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Stack as={"main"} height={"fit-content"} align={"center"} justify={"center"}>
        <HStack as={"div"} justify={"space-between"} height={"76px"} width={"97%"} borderRadius={"10px"} bg={"#003554"} px={"20px"} py={"12px"}>
          <a href='#'><svg fill='#ffffff' height={"40"} width={"40"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"/></svg></a>
          <Input placeholder='Digite o nome aqui...' width={""} textAlign={"center"} fontFamily={"wallpoet"} textTransform={"uppercase"} fontSize={{base: "12px",md: "16px"}} variant={"outline"} bg={"#051923"} border={"none"}></Input>
        </HStack>
    </Stack>
  )
}