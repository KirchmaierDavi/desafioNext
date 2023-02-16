import { HStack, Stack, Image } from "@chakra-ui/react";
import NextImage from "next/image";

import React from "react";
import next from "next";


export function Navbar(){
    <HStack
        as = "nav"
        justify={"space-between"}
        py={10}
        px={5}
        w={"100%"}
        h={"110px"}
        bg={'#003554'}
    >
        <Stack
            as= "section"
        >
           <NextImage src="../public/blueskins-website-favicon-white.png" alt={"Blueskins logo"} />
        </Stack>
        
    </HStack>
}