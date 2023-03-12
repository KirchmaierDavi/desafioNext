import NextImage from "next/image"

import { useEffect, useState } from "react";

import axios from 'axios';

import { ModalAdiciona } from "../components/modals/add/index";
import { ModalEditar } from "../components/modals/edit";
import { ModalVisualizar } from "../components/modals/Mview";
import { ModalExcluir } from "../components/modals/delete";

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
  Button
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  interface Funcionario {
    id : number;
    name: string;
    email: string;
    aniversario: string;
    salario: string;
    cargo: string;
  }

  const [data, setData] = useState<Funcionario[]>([]);

  useEffect(() => {
    axios.get<Funcionario[]>('http://localhost:3000/funcionarios').then((Response) => {
      setData(Response.data);
    });
  }, []);
  
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
              <Th>aniversário</Th>
              <Th>salário</Th>
              <Th>cargo</Th>
              <Th>Opções</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(funcionarios=>(
              
            
            <Tr border={"3px"} borderColor={"#000000"}>
              <Td>{funcionarios.name}</Td>
              <Td>{funcionarios.email}</Td>
              <td>{funcionarios.aniversario}</td>
              <Td>{funcionarios.salario}</Td>
              <Td>{funcionarios.cargo}</Td>
              <Td>
                <HStack spacing={"10px"}>
                  <ModalEditar email={funcionarios.email} nome={funcionarios.name} salario={funcionarios.salario} cargo={funcionarios.cargo} aniversario={funcionarios.aniversario} id={funcionarios.id}></ModalEditar>
                  <ModalVisualizar email={funcionarios.email} nome={funcionarios.name} salario={funcionarios.salario} cargo={funcionarios.cargo} anv={funcionarios.aniversario}></ModalVisualizar>
                  <ModalExcluir id={funcionarios.id}></ModalExcluir>
                </HStack>
              </Td>
            </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
