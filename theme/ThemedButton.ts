import { ComponentStyleConfig } from '@chakra-ui/react'

const ThemedButton: ComponentStyleConfig = {
    // style object for base or default style
    baseStyle: {
        px: "5",
        py: "3",
        bg: "white",
        color: "black",
        borderRadius: 0,
        _after: {
            content: "''",
            w: "full",
            h: "full",
            border: "1px solid white",
            transition: "all 0.2s ease-in-out",
            pos: "absolute",
            left: "-8px",
            top: "8px",
            _hover: {
                left: "5px",
                top: "-5px",
            }
        },
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