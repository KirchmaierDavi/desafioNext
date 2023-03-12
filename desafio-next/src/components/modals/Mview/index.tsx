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
import React from "react";

interface modalViewProps {
  email: string;
  nome: string;
  anv: string;
  salario: string;
  cargo: string;
}

export function ModalVisualizar({
  email,
  nome,
  salario,
  cargo,
  anv,
}: modalViewProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        fill="#ffffff"
        width={"20px"}
        height={"20px"}
        onClick={onOpen}
        style={{ cursor: "pointer" }}
      >
        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
      </svg>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent fontFamily={"wallpoet"} bg={"#003554"}>
          <ModalHeader>Informações do funcionario</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input ref={initialRef} bg={"#051923"} value={nome} isReadOnly />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input type={"email"} bg={"#051923"} value={email} isReadOnly />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Aniversário</FormLabel>
              <Input value={anv} bg={"#051923"} isReadOnly />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Salario</FormLabel>
              <Input
                type={"number"}
                bg={"#051923"}
                value={salario}
                isReadOnly
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Cargo</FormLabel>
              <Input value={cargo} bg={"#051923"} isReadOnly />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={"red"} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
