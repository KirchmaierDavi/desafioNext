import NextImage from "next/image";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { Inter } from "@next/font/google";
import {
  HStack,
  Stack,
  Box,
  Image,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { Footer } from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Stack
      as={"main"}
      height={"fit-content"}
      align={"center"}
      minHeight={"100vh"}
      marginTop={"5%"}
    >
      <HStack
        as={"div"}
        justify={"space-between"}
        height={"76px"}
        width={"97%"}
        borderRadius={"10px"}
        bg={"#003554"}
        px={"20px"}
        py={"12px"}
      >
        <a href="#">
          <svg
            fill="#ffffff"
            height={"40"}
            width={"40"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
          </svg>
        </a>
        <Input
          placeholder="Digite o nome aqui..."
          width={""}
          textAlign={"center"}
          fontFamily={"wallpoet"}
          textTransform={"uppercase"}
          fontSize={{ base: "12px", md: "16px" }}
          variant={"outline"}
          bg={"#051923"}
          border={"none"}
        ></Input>
      </HStack>
      <TableContainer width={"97%"} borderBottomRadius={"10px"} bg={"#006494"}>
        <Table variant={"unstyled"}>
          <Thead bg={"#003554"}>
            <Tr textTransform={"uppercase"} color={"#ffffff"} fontFamily={"wallpoet"}>
              <Th>nome</Th>
              <Th>email</Th>
              <Th>salário</Th>
              <Th>cargo</Th>
              <Th>Opções</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr border={"3px"} borderColor={"#000000"}>
              <Td>Davi Kirchmaier Paiva</Td>
              <Td>davi.kirchmaier99@gmail.com</Td>
              <Td>salário</Td>
              <Td>assessor</Td>
              <Td>
                <HStack spacing={"10px"}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="#ffffff" width={"20px"} height={"20px"}><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ffffff" width={"20px"} height={"20px"}><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  fill="#ffffff" width={"20px"} height={"20px"}><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                </HStack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
