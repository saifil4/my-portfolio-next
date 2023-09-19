import { extendTheme, } from '@chakra-ui/react';
import ThemedButton from './ThemedButton';

const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    components: {
        Button: ThemedButton
    }
})

export default theme