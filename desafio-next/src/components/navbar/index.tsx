import { HStack, Stack, Text, Button, ButtonGroup } from "@chakra-ui/react";
import { Texts } from "../Texts/index";

import NextImage from "next/image";

import React from "react";

export function Navbar() {
  return (
    <HStack
      as="nav"
      justify={"space-between"}
      py={10}
      px={5}
      w={"100%"}
      h={"110px"}
      bg={"#003554"}
    >
      <Stack as="section">
        <NextImage
          width={64}
          height={64}
          src="/../public/blueskins-website-favicon-white.png"
          alt={"Blueskins logo"}
        />
      </Stack>
      <HStack
       as = "section"
       spacing={5}
      >
        <Texts text={"quem somos"}></Texts>
        <Texts text={"itens"}></Texts>
        <Button colorScheme={"blue"} variant={"solid"} textTransform={"uppercase"} fontFamily={"wallpoet"} fontWeight={"400"} fontSize={"24px"}>Login</Button>
      </HStack>
    </HStack>
  );
}
