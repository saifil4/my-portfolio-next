'use client'

import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    Box,
    VStack,
} from '@chakra-ui/react';
import ThemeButton from '@/components/ThemeButton';
import Link from 'next/link';


export default function Hero() {
    return (
        <Box h="full">
            <Flex p={8} h="full" w="full" align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'2xl'}>
                    <Heading color="white" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text textAlign="center">
                            Hello I am Saifil<br />
                            Software Developer based in Toronto
                        </Text>
                    </Heading>
                    <VStack alignItems="center" spacing="7">
                        <Link href="/work">
                            <ThemeButton>
                                Explore my work
                            </ThemeButton>
                        </Link>
                        <Link href="/contact">
                            <ThemeButton>Contact me</ThemeButton>
                        </Link>
                    </VStack>
                </Stack>
            </Flex>
        </Box>
    )
}