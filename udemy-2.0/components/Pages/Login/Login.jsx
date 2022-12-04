import { Text, Flex, Input, Button } from "@chakra-ui/react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import Link from "next/link"


const users = [
    {
        email : "teacher",
        password : "teacher"
    },
    {
        email : "student",
        password : "student"
    }
]

const LoginPage = () => {
    return (
        <>
            <Navbar isLogin={false} />
            <Flex alignItems={'center'} justifyContent={'center'} paddingY={'160px'}>
                <Flex justifyContent={'space-evenly'} gap={'16px'} flexDir={'column'}>
                    <Text fontWeight={'bold'}>Log in to your Udemy account</Text>
                    <Input placeholder="Email" w={'25vw'} border={'1px'} borderColor={'black'} borderRadius={0} />
                    <Input placeholder="Password" w={'25vw'} border={'1px'} borderColor={'black'} borderRadius={0} />
                    <Link href={'/dashboard/courses'}>
                        <Button _hover={{bg: '#8723CA'}} bg={'#A435F0'} w={'25vw'} color="white" textAlign={'center'} borderRadius={0}>Log In</Button>
                    </Link>
                </Flex>
            </Flex>
            <Footer />
        </>
        
    );
}

export default LoginPage