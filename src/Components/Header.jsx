import { Box, Heading, HStack, Link, VStack } from '@chakra-ui/react'


const Header = () => {
    return ( 
        <Box w="80%" h="8%" bgColor="transparent" m="auto" color="white" fontWeight="semibold" position="absolute" zIndex={1} left="10%">
            <HStack justify="space-between" w="100%">
                <Heading size='lg'>abeg</Heading>

                <HStack spacing={5} display={{ base: "none", md: "inherit" }}>
                    <Link href="#">About</Link>  
                    <Link href="#">Contact Us</Link>  
                    <Link href="#">FAQs</Link>  
                </HStack>
                <VStack spacing={1} display={{ base: "inherit", md: "none" }}>
                    <Box h="5px" w="30px" bgColor="white" borderRadius="25px" />   
                    <Box h="5px" w="30px" bgColor="purple.200" borderRadius="25px" />   
                    <Box h="5px" w="30px" bgColor="purple.200" borderRadius="25px" />   
                </VStack>
            </HStack>
        </Box>
     );
}
 
export default Header;