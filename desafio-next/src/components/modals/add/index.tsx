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

export function ModalAdiciona() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <a href="#">
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
      </a>
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
              <Input ref={initialRef} placeholder="Digite seu nome aqui" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input type={"email"} placeholder="Digite seu email aqui" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Salario</FormLabel>
              <Input type={"number"} placeholder="Digite seu email aqui" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Cargo</FormLabel>
              <Input placeholder="Digite seu cargo aqui" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
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
