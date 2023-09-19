'use client'

import {
    Grid,
    Box,
    Heading,
    Center,
} from '@chakra-ui/react';
import Card from './Card';

export default function CardList() {
    return (
        <Box py="5">
            <Center>
                <Heading>
                    Work
                </Heading>
            </Center>
            <Grid w="100vw" gridTemplateColumns="repeat(3, 1fr)" px="10" gridGap="10">
                {
                    [1, 2, 3, 4, 5].map(i => (
                        <Card />
                    ))
                }
            </Grid>
        </Box>
    )
}