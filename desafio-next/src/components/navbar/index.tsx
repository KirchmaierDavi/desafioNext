import {
  HStack,
  Stack,
  Text,
  Button,
  ButtonGroup,
  Link,
} from "@chakra-ui/react";
import { Texts } from "../Texts/index";

import NextImage from "next/image";
import NextLink from "next/link";

import React from "react";

export function Navbar() {
  return (
    <HStack
      as="nav"
      justify={"space-between"}
      py={{ base: 5, md: 10 }}
      px={{ base: 3, md: 5 }}
      w={"100%"}
      h={{ base: "auto", md: "110px" }}
      bg={"#003554"}
    >
      <Stack as="section" alignSelf={"center"}>
        <NextImage
          width={64}
          height={64}
          src="/../public/blueskins-website-favicon-white.png"
          alt={"Blueskins logo"}
        />
      </Stack>
      <HStack as="section" spacing={5}>
        <Texts text={"quem somos"} link={"/equipe"} ></Texts>
        <Texts text={"itens"} link={"#"}></Texts>
        <Link href="/login">
          <Button
            colorScheme={"blue"}
            variant={"solid"}
            textTransform={"uppercase"}
            fontFamily={"wallpoet"}
            fontWeight={"400"}
            fontSize={"24px"}
          >
            Login
          </Button>
        </Link>
      </HStack>
    </HStack>
  );
}
