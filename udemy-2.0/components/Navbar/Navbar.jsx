import { Box, Button, Flex, Image } from "@chakra-ui/react"
import Searchbar from "./Searchbar"
import Link from "next/link"
import { BsBell } from 'react-icons/bs'

const Navbar = ({isLogin}) => {
    return isLogin ? 
        (<Flex as="nav" bg={'white'} alignItems={'center'} px={'40px'} boxShadow={'md'} justifyContent={'space-between'} w={'100vw'} position={'fixed'} zIndex={2} mb={'100px'}>
            <Box>
                <Link href='/'>
                    <Image src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg' alt='Udemy' boxSize={'100px'}/>
                </Link>
            </Box>
            <Box>
                <Searchbar />
            </Box>
            <Flex gap={'10px'}>
                <BsBell />
            </Flex>
        </Flex>
        ) : (
            <Flex as="nav" bg={'white'} alignItems={'center'} px={'40px'} boxShadow={'md'} justifyContent={'space-between'} w={'100vw'} position={'fixed'} zIndex={2} mb={'100px'}>
                <Box>
                    <Link href='/'>
                        <Image src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg' alt='Udemy' boxSize={'100px'}/>
                    </Link>
                </Box>
                <Box>
                    <Searchbar />
                </Box>
                <Flex gap={'10px'}>
                    <Button _hover={{bg: '#ededed'}} border={'1px'} borderColor={'black'} borderRadius={'0'} bg={'white'} py={'10px'} px={'20px'} fontWeight={'bold'}>
                        <Link href='/login'>
                            Log In
                        </Link>
                    </Button>
                    <Button _hover={''} border={'1px'} borderColor={'black'} borderRadius={'0'} bg={'black'} py={'10px'} px={'20px'} fontWeight={'bold'} color={'white'}>
                        <Link href='/signup'>
                            Sign Up
                        </Link>
                    </Button>
                </Flex>
            </Flex>
        )
}

export default Navbar