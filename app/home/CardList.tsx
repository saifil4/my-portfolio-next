'use client'

import {
    Box,
    Heading,
    Center,
} from '@chakra-ui/react';
import Project from './Project';

export default function CardList() {
    return (
        <Box py="5">
            <Heading as="h1">Work</Heading>
            {
                [1, 2, 3, 4, 5].map(i => (
                    <Project />
                ))
            }
        </Box>
    )
}