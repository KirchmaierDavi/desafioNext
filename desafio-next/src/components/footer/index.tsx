import { HStack, Stack, Text, Button, ButtonGroup, Center } from "@chakra-ui/react";
import { Texts } from "../Texts/index";

import NextImage from "next/image";

import React from "react";


export function Footer() {
  return (
    <HStack as="footer" py={7} px={11} w={"100%"} h={"156px"} bg={"#003554"} spacing={"108px"}>
      <Stack as="section">
        <NextImage
          width={92}
          height={92}
          src="/../public/blueskins-website-favicon-white.png"
          alt={"Blueskins logo"}
        />
      </Stack>
      <Stack as="section">
        <Text textTransform={"uppercase"} fontFamily={"Wallpoet"} fontSize={40} textAlign={"center"}>blueskins</Text>
        <HStack>
            
        </HStack>
      </Stack>
      <Stack as="section">

      </Stack>
    </HStack>
  );
}
