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
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export function ModalAdiciona() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [salario, setSalario] = useState("");
  const [cargo, setCargo] = useState("");

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      aniversario,
      salario,
      cargo,
    };

    try {
      const response = await axios.post('http://localhost:3000/funcionarios', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <svg
        fill="#ffffff"
        height={"40"}
        width={"40"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        onClick={onOpen}
      >
        <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
      </svg>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent fontFamily={"wallpoet"} bg={"#003554"}>
          <ModalHeader>Adicione um funcionario</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input
                  bg={"#051923"}
                  placeholder="Digite seu nome aqui"
                  onChange={(event) => setNome(event.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  type={"email"}
                  bg={"#051923"}
                  placeholder="Digite seu email aqui"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Aniversário</FormLabel>
                <Input
                  placeholder="Digite seu aniversário aqui"
                  bg={"#051923"}
                  onChange={(event) => setAniversario(event.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Salario</FormLabel>
                <Input
                  type={"number"}
                  bg={"#051923"}
                  placeholder="Digite seu salario aqui"
                  onChange={(event) => setSalario(event.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Cargo</FormLabel>
                <Input
                  placeholder="Digite seu cargo aqui"
                  bg={"#051923"}
                  onChange={(event) => setCargo(event.target.value)}
                />
              </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button colorScheme={"red"} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
