import { Box, Heading, HStack, Link, Modal, ModalBody, ModalContent, ModalOverlay, Stack, useDisclosure, VStack } from '@chakra-ui/react'

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box w="80%" h="8%" bgColor="transparent" m="auto" color="white" fontWeight="semibold" position="absolute" zIndex={1} left="10%">
            <HStack justify="space-between" w="100%">
                <Heading size='lg'>abeg</Heading>

                <HStack spacing={5} display={{ base: "none", md: "inherit" }}>
                    <Link href="#">About</Link>
                    <Link href="#">Contact Us</Link>
                    <Link href="#">FAQs</Link>
                </HStack>
                <VStack spacing={1} display={{ base: "inherit", md: "none" }} onClick={onOpen}>
                    <Box h="5px" w="30px" bgColor="white" borderRadius="25px" />
                    <Box h="5px" w="30px" bgColor="purple.200" borderRadius="25px" />
                    <Box h="5px" w="30px" bgColor="purple.200" borderRadius="25px" />
                </VStack>
            </HStack>
            <Modal isOpen={isOpen} onClose={onClose} size="xs">
                <ModalOverlay />
                <ModalContent bgColor="transparent">
                    <ModalBody borderRadius="25px" fontSize="xl" fontWeight="semibold" color="purple.200" bgColor="purple.500" p="50px">
                        <Stack spacing={8}>
                            <Link href="#" color="white">Home</Link>
                            <Link href="#">About Us</Link>
                            <Link href="#">Contact Us</Link>
                            <Link href="#">FAQs</Link>
                        </Stack>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </Box>
    );
}

export default Header;
