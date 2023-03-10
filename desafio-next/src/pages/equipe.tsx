import NextImage from "next/image";

import { Pessoa } from "../components/persona";

import { Inter } from "@next/font/google";
import {
  HStack,
  Stack,
  Box,
  Image,
  Text,
  Input,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Stack
      as={"main"}
      minHeight={"100vh"}
      align={"center"}
      px={{ base: "unset", md: "60px" }}
      py={{ base: "20px", md: "40px" }}
      spacing={"40px"}
    >
      <Text
        fontFamily={"wallpoet"}
        fontSize={{ base: "16px", md: "20px" }}
        textTransform={"uppercase"}
        alignSelf={{ base: "center", md: "flex-start" }}
      >
        conheça nossa equipe:
      </Text>
      <Grid templateColumns={{base: "repeat(1, 1fr)",md: "repeat(2, 1fr)" ,lg: "repeat(3, 1fr)", xl: "repeat(5, 1fr)"}} gap={6}>
        <GridItem w="100%"><Pessoa nome={"Davi Kirchmaier Paiva"} img={"/public/foto.jpeg"} idade={"19"} email={"davi.kirchmaier99@gmail.com"} cargo={"assessor"}/></GridItem>
        <GridItem w="100%"><Pessoa nome={"Davi"} img={"/public/foto.jpeg"} idade={"19"} email={"davi.kirchmaier99@gmail.com"} cargo={"assessor"}/></GridItem>
        <GridItem w="100%"><Pessoa nome={"Davi"} img={"/public/foto.jpeg"} idade={"19"} email={"davi.kirchmaier99@gmail.com"} cargo={"assessor"}/></GridItem>
        <GridItem w="100%"><Pessoa nome={"Davi"} img={"/public/foto.jpeg"} idade={"19"} email={"davi.kirchmaier99@gmail.com"} cargo={"assessor"}/></GridItem>
        <GridItem w="100%"><Pessoa nome={"Davi"} img={"/public/foto.jpeg"} idade={"19"} email={"davi.kirchmaier99@gmail.com"} cargo={"assessor"}/></GridItem>
      </Grid>
    </Stack>
  );
}
