import React, { ReactNode } from 'react';
import { Button as ChakraButton, Box } from '@chakra-ui/react';

const ThemeButton = ({ children }: { children: ReactNode }) => {
    return (
        <Box>
            <ChakraButton borderRadius="0" minW="200px">
                {children}
                {/* <Box
                    _hover={{
                        left: "-6px",
                        top: "6px",
                    }}
                    w="full"
                    h="full"
                    border="1px solid white"
                    transition="all 0.2s ease-in-out"
                    pos="absolute" left="-8px" top="8px">

                </Box> */}
            </ChakraButton>
        </Box>
    )
}

export default ThemeButton;