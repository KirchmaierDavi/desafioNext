import NextImage from "next/image";

import { useEffect, useState } from "react";

import axios from "axios";

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
  interface Funcionario {
    name: string;
    email: string;
    aniversario : string;
    cargo: string;
  }

  const [data, setData] = useState<Funcionario[]>([]);

  useEffect(() => {
    axios
      .get<Funcionario[]>("http://localhost:3000/funcionarios")
      .then((Response) => {
        setData(Response.data);
      });
  }, []);

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
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        gap={20}
      >
      { data.map(funcionarios=>(

      
        <GridItem w="100%">
          <Pessoa
            nome={funcionarios.name}
            idade={funcionarios.aniversario}
            email={funcionarios.email}
            cargo={funcionarios.cargo}
          />
        </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}
