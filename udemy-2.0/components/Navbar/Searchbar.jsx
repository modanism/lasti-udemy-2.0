import { Flex,Input } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'

const Searchbar = () => {
    return (
        <Flex p={'10px'} gap={'10px'} alignItems={'center'} borderColor={'black'} border={'1px'} background={'#f7f9fa'} borderRadius={'20'} width={'50vw'}>
            <SearchIcon/>
            <Input variant='unstyled' placeholder='Search for anything' />
        </Flex>
    );
}
export default Searchbar;