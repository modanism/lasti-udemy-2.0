import {
    Heading, Text, Box, Image,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Icon,
    Flex,
   
  } from '@chakra-ui/react'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Footer from '../../Footer/Footer';
import ButtonModal from './ButtonModal';

const CoursePage = () => {
    return (
        <>
            <Box>
                <Box bg={'black'} w={'100%'} h={'40vw'}></Box>
                <Flex flexDirection={'column'} gap={'15px'} width={'80vw'} p={'20px'}>
                    <Heading size={'md'}>Butuh Bantuan?</Heading>
                    <Text fontSize={'15px'}>Hubungi tutor resmi dari Udemy sekarang!</Text>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Nama</Th>
                                    <Th>Komisi</Th>
                                    <Th>Rating</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Flex alignItems={'center'} gap={'10px'} >
                                            <Image
                                                borderRadius='full'
                                                boxSize='50px'
                                                src='https://bit.ly/dan-abramov'
                                                alt='Dan Abramov'
                                            />
                                            <Box>
                                                <Heading fontSize={'20px'}>Boii</Heading>
                                                <Text>ex-BCG | Co-Founder of Warbir</Text>
                                            </Box>
                                        </Flex>
                                    </Td>
                                    <Td>Rp50.000,00/ jam</Td>
                                    <Td>
                                        <Flex>
                                            <AiFillStar color={'#e5981c'} size={'20px'}/>
                                            <AiFillStar color={'#e5981c'} size={'20px'}/>
                                            <AiFillStar color={'#e5981c'} size={'20px'}/>
                                            <AiFillStar color={'#e5981c'} size={'20px'}/>
                                            <AiOutlineStar color={'#e5981c'} size={'20px'}/>
                                        </Flex>
                                    </Td>
                                    <Td>
                                        <ButtonModal />
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Flex>
                <Box w={'20vw'}>

                </Box>
                
            </Box>
            <Footer />
        </>
    );
}

export default CoursePage;