import { Text, Button, ButtonGroup } from "@chakra-ui/react";
import { link } from "fs";
import Link from "next/link";

interface TextsProps{
    text : string;
    link : string
}

export function Texts({text, link}: TextsProps){
    return(
        <Text
            as="p"
            textTransform={"uppercase"}
            fontSize={"24px"}
            fontFamily={"wallpoet"}
            display={{ base: "none", md: "flex" }}
        >
            <Link href={link}>{text}</Link>
        </Text>
    )
}