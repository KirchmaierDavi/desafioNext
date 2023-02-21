import { Text, Button, ButtonGroup } from "@chakra-ui/react";

interface TextsProps{
    text : string;
}

export function Texts({text}: TextsProps){
    return(
        <Text
            as="p"
            textTransform={"uppercase"}
            fontSize={"24px"}
            fontFamily={"wallpoet"}
        >
            {text}
        </Text>
    )
}