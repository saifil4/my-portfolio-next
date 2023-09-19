'use client'

import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    VStack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react'
import {
    MdOutlineEmail,
} from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'

export default function Contact() {
    return (
        <Container maxW="full" mt={0} centerContent overflow="hidden">
            <Flex maxW="5xl">
                <Box
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Heading>Contact</Heading>
                    <Text mt="1" color="gray.500">
                        Fill up the form below to contact
                    </Text>
                    <br/>
                    <VStack spacing={5}>
                        <FormControl id="name">
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement pointerEvents="none">
                                    <BsPerson color="gray.800" />
                                </InputLeftElement>
                                <Input type="text" size="md" />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                            <FormLabel>Mail</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement pointerEvents="none">
                                    <MdOutlineEmail color="gray.800" />
                                </InputLeftElement>
                                <Input type="text" size="md" />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                            <FormLabel>Message</FormLabel>
                            <Textarea
                                borderColor="gray.300"
                                _hover={{
                                    borderRadius: 'gray.300',
                                }}
                                placeholder="message"
                            />
                        </FormControl>
                        <FormControl id="name" float="right">
                            <Button variant="solid">
                                Send Message
                            </Button>
                        </FormControl>
                    </VStack>
                </Box>
            </Flex>
        </Container>
    )
}