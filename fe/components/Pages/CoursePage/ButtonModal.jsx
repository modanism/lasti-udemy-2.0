import { 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, 
    Button, 
    useDisclosure,
    Textarea,
    Tag,
    Flex,
    Text
     } from "@chakra-ui/react";
import React, { useState, useCallback } from "react";

const items = [
    {
        id : 1,
        name : "09:00 - 12:00",
        isSelected : false
    },
    {
        id : 2,
        name : "13:00 - 16:00",
        isSelected : false
    },
    {
        id : 3,
        name : "16:00 - 19:00",
        isSelected : false
    },
]


const ButtonModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [chips, setChips] = useState(items)
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const handleSelect = (id) => {
        const tempChips = chips
        tempChips.forEach(chip => {
            if (chip.id === id) {
                chip.isSelected = !chip.isSelected
            }
        })
        setChips(tempChips);
        forceUpdate();
        
    }
    return (
        <>
            <Button onClick={onOpen} _hover={{bg: '#8723CA'}} px={'50px'} bg={'#A435F0'} color="white" textAlign={'center'} borderRadius={0}>Ajukan Sesi</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Buat Sesi</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex flexDirection={'column'} gap={'15px'}>
                        <Text fontWeight={'bold'}>Jadwal tersedia</Text>
                        <Flex gap={'15px'}>
                            {chips.map(chip => (
                                    <Tag cursor={'pointer'} py={'10px'} border={'1px'} color={chip.isSelected ? "white" : "black"} borderColor={chip.isSelected ? '#8723CA' : 'black'} size="md" rounded="full" bg={chip.isSelected ? '#8723CA' : 'white'} onClick={() => handleSelect(chip.id)}>{chip.name}</Tag>
                            ))}
                        </Flex>
                        <Textarea borderColor={'black'} mt={'20px'} placeholder='Deskripsi' />
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose} border={'1px'} borderColor={'black'} borderRadius={'0'} bg={'black'} py={'10px'} px={'20px'} fontWeight={'bold'} color={'white'}>
                        Berikutnya
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ButtonModal;