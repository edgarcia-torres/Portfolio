import { extendTheme } from "@chakra-ui/react";
import styles from '../styles/styles'

const overrides = {
    styles,
    borders,
    // Other foundational style overrides go here
    components: {
        Button,
        // Other components go here
    },
}


const config = {
    initialColorMode: "dark",
    useSystemColorMode: true,
};

const theme = extendTheme({ overrides });

export default theme;