import { Box, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Text, Progress } from "@chakra-ui/react";
import Link from "next/link";

const CardCourse = () => {
    return (
        <Card maxW='20vw'>
                <CardBody>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='1'>
                        <Heading size='sm'>Agile Product Management : A Concise Introducion</Heading>
                        <Text fontSize={'smaller'}>
                            Ali Sayeh
                        </Text>
                    </Stack>
                </CardBody>
                <Box paddingX={'20px'}>
                    <Progress size={'sm'} value={10} colorScheme={'purple'} borderRadius={10}/>
                </Box>
                <CardFooter>
                    <Link href={'/courses/course'}>
                        <Button variant='solid' bg={'#A435F0'} color={'white'} w={'100%'}>
                            Continue
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
    );
}

export default CardCourse