'use client'

import {
    Box,
    Heading
} from '@chakra-ui/react';
import Project from './Project';
import { ProjectsData } from '@/data';
import SubMenu from '@/components/SubMenu';

export default function ProjectsList() {
    return (
        <Box py="5">
            <SubMenu />
            <Heading color="white" textAlign="center" as="h1">Work</Heading>
            {
                ProjectsData.map((project, index) => (
                    <Project key={index} project={project} />
                ))
            }
        </Box>
    )
}