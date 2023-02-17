import { HStack, Stack, Text } from "@chakra-ui/react";
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
      <Stack
       as = "section"
      >
        
      </Stack>
    </HStack>
  );
}
