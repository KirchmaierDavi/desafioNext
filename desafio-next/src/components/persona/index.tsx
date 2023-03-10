import { Text, Stack, Box } from "@chakra-ui/react";
import { SsgRoute } from "next/dist/build";

import  NextImage from 'next/image';

interface PessoaProps{
    nome : string;
    img : string;
    idade : string;
    email : string;
    cargo : string;
}

export function Pessoa({nome, img, cargo, email, idade}: PessoaProps){
    return(
       <Stack width={"220px"} height={"180px"} bg={"#003554"} spacing={"16px"} paddingTop={"16px"} borderRadius={"15px"}>
            <Box alignSelf={"center"} border={"60px"}>
                <NextImage width={60} height={60} src={img} alt={"Foto do funcionario"} />
            </Box>
            <Stack height={"100px"} align={"center"} textAlign={"center"} bg={"#006494"} py={"2px"} borderBottomRadius={"15px"}>
                <Text fontSize={"12px"} fontFamily={"wallpoet"}>{nome}</Text>
                <Text fontSize={"12px"} fontFamily={"wallpoet"}>{cargo}</Text>
                <Text fontSize={"12px"} fontFamily={"wallpoet"}>{idade} anos</Text>
                <Text fontSize={"12px"} fontFamily={"wallpoet"}>{email}</Text>
            </Stack>
       </Stack>
    )
}