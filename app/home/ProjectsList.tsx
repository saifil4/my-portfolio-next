'use client'

import {
    Box,
    Heading,
    Center,
} from '@chakra-ui/react';
import Project from './Project';
import { ProjectsData } from '@/data';

export default function ProjectsList() {
    return (
        <Box py="5">
            <Heading as="h1">Work</Heading>
            {
                ProjectsData.map(project => (
                    <Project project={project} />
                ))
            }
        </Box>
    )
}