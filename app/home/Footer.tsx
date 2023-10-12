'use client'

import {
    Box,
    chakra,
    Stack,
    Center,
    HStack,
    VisuallyHidden,
    Image
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ReactNode } from 'react';



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
            rounded={'full'}
            color="white"
            w={12}
            cursor={'pointer'}
            as={'a'}
            href={href}
            alignItems={'center'}
            justifyContent={'center'}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function Footer() {
    return (
        <Box h="60px">
            <Center h="full" alignItems="center">
                <HStack>
                    <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/saifil-momin/'}>
                        <FaGithub />
                    </SocialButton>
                    <SocialButton label={'Github'} href={'https://github.com/saifil4/'}>
                        <FaLinkedin />
                    </SocialButton>
                </HStack>
            </Center>
        </Box>
    )
}