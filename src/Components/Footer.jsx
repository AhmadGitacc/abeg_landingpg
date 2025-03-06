import { Box, Heading, HStack, Icon, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import Placeholder from "../logo.svg";
import Hand1 from "../pics/3d-hand-gang-sign.361a980d.png";
import Hand2 from "../pics/3d-hand-chef-sign.2862ae3c.png";
import Swirl from "../pics/download.png";

const Footer = () => {
    return (
        <Box h={{ base: "auto", md: "450px" }} w="100%" mt={{ base: "30%", md: "10%" }}bgColor="black" pos="relative" color="white">
            <Box display="flex" w="80%" h={{ base: "auto", md: "300px" }}
                bgColor="purple.600" borderRadius="50px"
                left="50%" transform="translateX(-50%) translateY(-20%)"
                px="3%" py={0}
                pos="absolute"
                boxShadow="lg"
                overflow="hidden"
            >
                <Image src={Hand1} h={150} w={150} mt="-50" ml="-10" />
                <Stack direction={{ base: "column", md: "row" }}
                 m={{ base: "50%", md: "5%" }} 
                 mx={{ base: "-10%", md: "2%" }}
                  ml={{ base: "-10%", md: "10" }}
                   justify="space-between"
                   textAlign={{ base: "center", md: "start" }}
                   >
                    <Box w={{ base: "100%", md: "50%" }}>
                        <Heading size={{ base: "xl", md: "xl" }} fontWeight="semibold" noOfLines={2}>Send & Receive Money Instantly</Heading>
                        <br />
                        <Text color="purple.200" w={{ base: "100%", md: "auto" }} fontSize={{ base: "md", md: "lg" }}>Transfer money to anyone easily, buy airtime or pay bills, all for FREE.
                            Just enter an abegtag or a phone number.</Text>
                    </Box>
                    <Stack direction={{ base: "column", md: "row" }} m="auto" mt={{ base: "30px", md: "auto" }} spacing={5} w={{ base: "70%", md: "auto" }}>
                        <Box h="60px" w={{ base: "100%", md: "160px" }} bgColor="purple.400" borderRadius="35px">
                            <HStack spacing={0} p="5%">
                                <Image src={Placeholder} h="40px" w="40px" />
                                {/* <Icon as={<FaApple/>} w="40px" h="40px" color='white' /> */}
                                <Stack spacing={0}>
                                    <Text fontSize="sm">Get it on</Text>
                                    <Text variant='' fontWeight="bold">App Store</Text>
                                </Stack>
                            </HStack>
                        </Box>
                        <Box h="60px" w={{ base: "100%", md: "160px" }} bgColor="purple.400" borderRadius="35px">
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
                </Stack>
                <Image mt="auto" src={Hand2} h={150} w={150} mr={{ base: "-10", md: "-5" }}  mb={{ base: "-40px", md: "-50" }} />
            </Box>

            <Image src={Swirl} h="100px" w="100px" position="absolute" right="-2" transform="rotate(-85deg)" bottom={{ base: "250px", md: "250px" }} />

            <Box w="80%" m="auto" pt={{ base: "150%", md: "22%" }} pb={{ base: "10%", md: "0" }} display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent="space-between" gap={{ base: "50px", md: "0" }} color="white">
                    <VStack spacing={4} align={{ base: "center", md: "start" }}>
                        <Heading as='h5' size='sm'>Abeg</Heading>
                        <VStack spacing={1} fontSize={{ base: "xs", md: "sm" }} color="gray" align={{ base: "center", md: "start" }}>
                            <Text fontWeight="semibold">@2021 Abeg Technologies</Text>
                            <Text>in partnership with VFD MFB</Text>
                            <Text>Terms of Service | Privacy Policy</Text>
                        </VStack>
                    </VStack>

                    <VStack spacing={4} align="start">
                        <Text variant='bold'>Company</Text>
                        <VStack spacing={1} fontSize={{ base: "xs", md: "sm" }} color="gray" align="start">
                            <Link>About Us</Link>
                            <Link>FAQs</Link>
                            <Link>Contact Us</Link>
                        </VStack>
                    </VStack>

                    <VStack spacing={4} align={{ base: "center", md: "start" }}>
                        <Text variant='bold'>GET IN TOUCH</Text>
                        <VStack spacing={1} fontSize={{ base: "xs", md: "sm" }} color="gray" align={{ base: "center", md: "start" }}>
                            <Text>Partnerships & general enquires</Text>
                            <Text color="white">hello@abeg.app</Text>
                            <HStack spacing={4}>
                                <IconButton size="sm" colorScheme="whiteAlpha" color="white" icon={Hand1}/>
                                <IconButton size="sm" colorScheme="whiteAlpha" color="white" icon={Hand1}/>
                                <IconButton size="sm" colorScheme="whiteAlpha" color="white" icon={Hand1}/>
                            </HStack>
                        </VStack>
                    </VStack>
            </Box>

        </Box>
    );
}

export default Footer;