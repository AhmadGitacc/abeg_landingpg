import { Box, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import Placeholder from "../logo.svg";
import Phone1 from "../pics/p2p-screenshot-1.bc76ac98.png";
import Phone2 from "../pics/p2p-screenshot-2.dfe8f346.png";
import Lightning from "../pics/bolt.3a546e62.png";
import Star from "../pics/starfish.1af11955.png";
import Swirl from "../pics/download.png";

const Body = () => {
    return (
        <Box w="100%" h={{ base: "auto", md: "700px" }} p="10%">
            <Stack direction={{ base: "column", md: "row" }} w="100%" justify="space-between" position="relative">
                <Image src={Swirl} h="100px" w="100px" position="absolute" left="-13%" top={{ base: "250px", md: "50px" }} />

                <Stack w={{ base: "100%", md: "50%" }} mt={{ base: "40%", md: "0" }} spacing={{ base: 20, md: 10 }}>
                    <Stack spacing={0}>
                        <Box w={{ base: "90%", md: "65%" }} h={{ base: "70px", md: "90px" }} display="flex"
                            justifyContent="center" alignContent="center"
                            position="relative" bgColor="purple.600"
                            borderRadius={{ base: "30px", md: "35px" }} border="1px solid white"
                            transform="rotate(2deg)"
                            mx={{ base: "0", md: "15px" }}
                        >
                            <Box transform="rotate(-2deg)" position="absolute" top="-200" left="10%" w="3px" h="200px" bg="orange.300" />
                            <Box position="absolute" borderRadius="50%" top="2" left="10.5%" w="7px" h="7px" bg="orange.300" />
                            <Box position="absolute" borderRadius="50%" top="2" right="9%" w="7px" h="7px" bg="orange.300" />
                            <Box transform="rotate(-2deg)" position="absolute" top="-200" right="10%" w="3px" h="200px" bg="orange.300" />
                            <Heading fontWeight="semibold" h="100%" size='xl' mt="5%" color="white">Make Someone</Heading>
                        </Box>

                        <Box w={{ base: "100%", md: "80%" }} h="90px" display="flex"
                            justifyContent="center" alignContent="center"
                            position="relative" bgColor="purple.600"
                            borderRadius="35px" border="1px solid white"
                            transform="rotate(-3deg)"
                            mt="-10px"
                        >
                            <Box transform="rotate(3deg)" position="absolute" top="-250" left="10%" w="3px" h="250px" bg="orange.300" />
                            <Box position="absolute" borderRadius="50%" top="2" left="8%" w="7px" h="7px" bg="orange.300" />
                            <Box position="absolute" borderRadius="50%" top="2" right="11%" w="7px" h="7px" bg="orange.300" />
                            <Box transform="rotate(3deg)" position="absolute" top="-250" right="10%" w="3px" h="250px" bg="orange.300" />
                            <Heading fontWeight="semibold" h="100%" size='xl' mt="5%" color="white">Happy With Cash</Heading>
                        </Box>
                    </Stack>

                    <VStack align="start" w={{ base: "100%", md: "75%" }} spacing={10}>
                        <Text color="purple.200" fontSize={{ base: "md", md: "lg" }}
                            textAlign={{ base: "center", md: "left" }}
                        >Transfer money to anyone easily, buy airtime or pay bills, all for FREE.
                            Just enter an abegtag or a phone number.</Text>

                        <Stack direction={{ base: "column", md: "row" }} align={{ base: "center", md: "start" }} spacing={5} w={{ base: "100%", md: "auto" }} color="white">
                            <Box h="60px" w={{ base: "70%", md: "160px" }} bgColor="purple.400" borderRadius="35px">
                                <HStack spacing={0} p="5%">
                                    <Image src={Placeholder} h="40px" w="40px" />
                                    {/* <Icon as={<FaApple/>} w="40px" h="40px" color='white' /> */}
                                    <Stack spacing={0}>
                                        <Text fontSize="sm">Get it on</Text>
                                        <Text variant='' fontWeight="bold">App Store</Text>
                                    </Stack>
                                </HStack>
                            </Box>
                            <Box h="60px" w={{ base: "70%", md: "160px" }} bgColor="purple.400" borderRadius="35px">
                                <HStack spacing={0} p="5%">
                                    <Image src={Placeholder} h="40px" w="40px" />
                                    {/* <Icon as={<FaApple/>} w="40px" h="40px" color='white' /> */}
                                    <Stack spacing={0}>
                                        <Text fontSize="sm">Get it on</Text>
                                        <Text variant='' fontWeight="bold">Google Play</Text>
                                    </Stack>
                                </HStack>
                            </Box>
                        </Stack>
                    </VStack>
                </Stack>

                <Stack w={{ base: "100%", md: "50%" }} position="relative">
                    <Image src={Lightning} h="150px" w="150px" position="absolute" top="-70px" left="70%" />

                    <HStack spacing={0} mt={{ base: "0", md: "50px" }}>
                        <Image src={Phone1} transform="rotate(2deg)" h={{ base: "60%", md: "700px" }} mt={{ base: "0", md: "-100px" }} w="500px" />
                        <Image src={Phone2} transform="rotate(-1deg)" h={{ base: "50%", md: "600px" }} ml="-35%" w="500px" />
                    </HStack>

                    <Image src={Star} h={{ base: "200px", md: "350px" }} w={{ base: "200px", md: "350px" }} position="absolute" left="-25%" top="200px" zIndex="1" />
                </Stack>

            </Stack>
        </Box>
    );
}

export default Body;