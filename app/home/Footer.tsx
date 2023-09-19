'use client'

import {
    Box,
    chakra,
    Container,
    Stack,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    Image
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ReactNode } from 'react'


const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <Image height="5" src='/logo.png' />
                <Stack direction={'row'} spacing={6}>
                    <Box as="a" href={'#'}>
                        Home
                    </Box>
                    <Box as="a" href={'#'}>
                        Contact
                    </Box>
                </Stack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Flex py="5" justifyContent="center"> 
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'https://www.linkedin.com/in/saifil-momin/'}>
                            <FaGithub />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'https://github.com/saifil4/'}>
                            <FaLinkedin />
                        </SocialButton>
                    </Stack>
                </Flex>
            </Box>
        </Box>
    )
}