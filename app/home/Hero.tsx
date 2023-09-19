'use client'

import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';


export default function Hero() {
    return (
        <Stack
            minH={'100vh'} direction={{ base: 'column', md: 'row' }}
            backgroundSize="cover"
            bgImage="url('/background.jpg')">
            <Flex p={8} w="full" align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'2xl'}>
                    <Heading color="white" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        Hello
                        <Text>
                            I am Saifil Software Developer based in Toronto
                        </Text>
                    </Heading>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button>
                            Contact me
                        </Button>
                        <Button>Download Resume</Button>
                    </Stack>
                </Stack>
            </Flex>
        </Stack>
    )
}