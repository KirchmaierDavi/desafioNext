import { Text, Stack, Box } from "@chakra-ui/react";
import { SsgRoute } from "next/dist/build";

import NextImage from "next/image";

interface PessoaProps {
  nome: string;
  idade: string;
  email: string;
  cargo: string;
}

export function Pessoa({ nome, cargo, email, idade }: PessoaProps) {
  return (
    <Stack
      width={"220px"}
      height={"180px"}
      align={"center"}
      spacing={"16px"}
      textAlign={"center"}
      bg={"#003554"}
      py={"2px"}
      borderRadius={"15px"}
      justify={"center"}
    >
      <Text fontSize={"12px"} fontFamily={"wallpoet"}>
        {nome}
      </Text>
      <Text fontSize={"12px"} fontFamily={"wallpoet"}>
        {cargo}
      </Text>
      <Text fontSize={"12px"} fontFamily={"wallpoet"}>
        {idade} anos
      </Text>
      <Text fontSize={"12px"} fontFamily={"wallpoet"}>
        {email}
      </Text>
    </Stack>
  );
}
