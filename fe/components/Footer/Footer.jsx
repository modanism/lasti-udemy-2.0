import { Flex, Image, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Flex alignItems={'center'} justifyContent={'space-between'} bg={'#1c1d1f'} p={'24px 48px'} w={'100%'} position={'relative'} bottom={'0'}>
            <Image src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg' alt='Udemy' boxSize={'100px'}/>
            <Text color={'white'}>© 2022 Udemy, Inc.</Text>
        </Flex>
    );
}

export default Footer