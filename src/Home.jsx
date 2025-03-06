import { Box } from "@chakra-ui/react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";

const Home = () => {
    return (
        <Box h="100%" w="100%" bgColor="purple.500" pt={{ base: "5%", md: "2%" }}  overflowX="hidden">
            <Header />

            <Body />

            <Footer />
        </Box>
    );
}

export default Home;