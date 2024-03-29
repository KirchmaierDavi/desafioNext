import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Link,
} from "@chakra-ui/react";

import https from "https";
import axios from "axios";
import React, { useState } from "react";

interface modalEditarProps {
  email: string;
  nome: string;
  aniversario: string;
  salario: string;
  cargo: string;
  id: number;
}

export function ModalEditar({
  email,
  nome,
  salario,
  cargo,
  aniversario,
  id,
}: modalEditarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [name, setNome] = useState("");
  const [em, setEmail] = useState("");
  const [anv, setAniversario] = useState("");
  const [sal, setSalario] = useState("");
  const [carg, setCargo] = useState("");

  const handleUpdateFuncionario = (id) => {
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });
    axios
      .put(
        `http://localhost:3000/funcionarios/${id}`,
        {
          name: name,
          email: em,
          aniversario: anv,
          salario: sal,
          cargo: carg,
        },
        { httpsAgent: agent }
      )
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#ffffff"
        width={"20px"}
        height={"20px"}
        onClick={onOpen}
        style={{ cursor: "pointer" }}
      >
        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
      </svg>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent fontFamily={"wallpoet"} bg={"#003554"}>
          <ModalHeader>Edite este funcionario</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input
                bg={"#051923"}
                type={"text"}
                defaultValue={nome}
                onChange={(event) => setNome(event.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type={"email"}
                bg={"#051923"}
                defaultValue={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Aniversário</FormLabel>
              <Input
                defaultValue={aniversario}
                bg={"#051923"}
                onChange={(event) => setAniversario(event.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Salario</FormLabel>
              <Input
                type={"number"}
                bg={"#051923"}
                defaultValue={salario}
                onChange={(event) => setSalario(event.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Cargo</FormLabel>
              <Input
                defaultValue={cargo}
                bg={"#051923"}
                onChange={(event) => setCargo(event.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Link href="/funcionarios">
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => handleUpdateFuncionario(id)}
              >
                Salvar
              </Button>
            </Link>
            <Button colorScheme={"red"} onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
