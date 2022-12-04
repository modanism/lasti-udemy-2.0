import { Box, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Text, Flex } from "@chakra-ui/react";
import CardCourse from "./CardCourse";
const Courses = () => {
    return (
        <Box margin={'auto'} w={'65vw'} py={'20px'} >
            <CardCourse />
        </Box>
    );
}

export default Courses