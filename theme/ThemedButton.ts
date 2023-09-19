import { ComponentStyleConfig } from '@chakra-ui/react'

const ThemedButton: ComponentStyleConfig = {
    // style object for base or default style
    baseStyle: {
        px: "5",
        py: "3",
        bg: "white",
        color: "black"
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {},
    // default values for 'size', 'variant' and 'colorScheme'
    defaultProps: {
        size: '',
        variant: '',
        colorScheme: '',
    },
}

export default ThemedButton;