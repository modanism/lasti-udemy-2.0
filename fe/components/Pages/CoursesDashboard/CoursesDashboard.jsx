import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import Courses from "./Courses";

const CoursesDashboard = () => {
    return (
        <>
            <Navbar isLogin={true}/>
            <Box w="100%" bg={'#1c1d1f'}>
                <Box margin={'auto'} w={'65vw'} p={'150px 30px 30px 30px'} color={'white'} >
                    <Flex flexDirection={'column'} gap={'30px'}>
                        <Heading>Pembelajaran Saya</Heading>
                        <Flex gap={'20px'} fontSize={'sm'}>
                            <Text cursor={'pointer'}>Kursus</Text>
                            <Text cursor={'pointer'} color={'#8F8F8F'}>Tutoring</Text>
                            <Text cursor={'pointer'} color={'#8F8F8F'}>Daftar Keinginan</Text>
                            <Text cursor={'pointer'} color={'#8F8F8F'}>Diarsipkan</Text>
                            <Text cursor={'pointer'} color={'#8F8F8F'}>Alat Pembelajaran</Text>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
            <Courses />
            <Footer />
        </>
    );
}

export default CoursesDashboard