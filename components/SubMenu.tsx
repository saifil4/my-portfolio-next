'use client'
import React from 'react';
import { HStack, Container } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { Button, Text } from '@chakra-ui/react';


const SubMenu = () => {

    const router = useRouter();

    return (
        <Container>
            <HStack>
                <Button onClick={() => router.back()}>
                    <FaArrowLeft /> <Text ml={3}>Back</Text>
                </Button>
            </HStack>
        </Container>
    )
}

export default SubMenu;