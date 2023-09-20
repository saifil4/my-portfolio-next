'use client'

import {
    Box,
    Heading,
    Image,
    Text,
    HStack,
    Tag,
    Flex,
    useColorModeValue,
    Container,
} from '@chakra-ui/react';
import { IProject } from '@/data';


interface Props {
    marginTop?: number
    tags: any[]
}

const BlogTags = (props: Props) => {
    const { marginTop = 0, tags } = props

    return (
        <HStack spacing={2} marginTop={marginTop}>
            {tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                        {tag}
                    </Tag>
                )
            })}
        </HStack>
    )
}



const Project = ({ project }: { project: IProject }) => {

    const { name, description, stacks, poster } = project;

    return (
        <Container maxW={'7xl'} p="12">
            <Flex
                marginTop={{ base: '1', sm: '5' }}
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between">
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center">
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%">
                        <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            <Image
                                borderRadius="lg"
                                src={poster}
                                alt="some good alt text"
                                objectFit="contain"
                            />
                        </Box>
                    </Box>
                    <Box zIndex="1" width="100%" position="absolute" height="100%">
                        <Box
                            bgGradient={useColorModeValue(
                                'radial(orange.600 1px, transparent 1px)',
                                'radial(orange.300 1px, transparent 1px)',
                            )}
                            backgroundSize="20px 20px"
                            opacity="0.4"
                            height="100%"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: '3', sm: '0' }}>
                    <BlogTags tags={stacks} />
                    <Heading marginTop="1">
                        <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            {name}
                        </Text>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        fontSize="lg">
                        {description}
                    </Text>
                </Box>
            </Flex>
        </Container>
    )
}

export default Project  