'use client'

import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    Stack,
    Image,
    chakra,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js';
import { FaPlus, FaTimes, FaFileDownload, FaBars, FaGithub, FaLinkedin, FaHome, FaEnvelope } from 'react-icons/fa';

interface Props {
    children: React.ReactNode
}

const Links = [
    {
        name: 'Home',
        icon: FaHome,
        link: '/'
    },
    {
        name: 'Contact',
        icon: FaEnvelope,
        link: '/contact'
    },
    {
        name: 'Linkedin',
        icon: FaLinkedin,
        link: 'https://www.linkedin.com/in/saifil-momin/'
    },
    {
        name: 'Github',
        icon: FaGithub,
        link: "https://github.com/saifil4/"
    },
]

const CustomLink = chakra(Link, {
    baseStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: '2'
    }
})


export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box px={4} pos="sticky" top="0">
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <FaTimes /> : <FaBars />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'} h="full">
                    <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                        {Links.map(({ name, icon: Icon, link }) => (
                            <CustomLink href={link}>
                                <Icon />
                                {name}
                            </CustomLink>
                        ))}
                    </HStack>
                    <Box h="full" py="3">
                        <Image src='/logo.png' h="full" w="auto" />
                    </Box>
                </HStack>
                <Flex alignItems={'center'}>
                    <Button
                        size={'sm'}
                        mr={4}
                        leftIcon={<FaPlus />}>
                        Action
                    </Button>
                    <Button
                        size={'sm'}
                        leftIcon={<FaFileDownload />}>
                        Download Resume
                    </Button>
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map(({ name, icon: Icon, link }, index) => (
                            <CustomLink href={link}>
                                <Icon />
                                {name}
                            </CustomLink>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    )
}