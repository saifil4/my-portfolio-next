'use client'

import {
    Box,
    Flex,
    Image,
} from '@chakra-ui/react'
import Logo from '@/components/Logo';

export default function Header() {
    return (
        <Box h="60px">
            <Flex h="full" w="full" alignItems={'center'} justifyContent={'center'} px="5">
                <Logo fill='white' dimentions={{ h: "45px", w: "45px" }} />
            </Flex>
        </Box>
    )
}