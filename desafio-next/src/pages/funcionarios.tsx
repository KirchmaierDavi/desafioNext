import NextImage from "next/image";

import { ModalAdiciona } from "../components/modals/add/index";
import { ModalEditar } from "../components/modals/edit";
import { ModalVisualizar } from "../components/modals/Mview";

import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
} from "@chakra-ui/react";

import React from "react";

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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

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
        <ModalAdiciona />
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
            <Tr
              textTransform={"uppercase"}
              color={"#ffffff"}
              fontFamily={"wallpoet"}
            >
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
                  <ModalEditar></ModalEditar>
                  <ModalVisualizar></ModalVisualizar>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#ffffff"
                    width={"20px"}
                    height={"20px"}
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </HStack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
