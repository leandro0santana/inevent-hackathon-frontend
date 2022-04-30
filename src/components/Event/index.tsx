import { 
  Box, 
  Image, 
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";

export function Event() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src="https://bit.ly/2Z4KKcF" alt="Event Test" />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs' 
            textTransform='uppercase'
          >
            Data do Evento: 31/05/2022
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h2'
          lineHeight='tight'
          isTruncated
        >
          Evento Teste
        </Box>

        <Box>
          Descrição do evento
        </Box>

        <Box display='flex' mt='4' alignItems='center'>
          <Button colorScheme='teal' onClick={onOpen}>Inscreva-se</Button>
        </Box>
      </Box>
    </Box>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Teste
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  )
}