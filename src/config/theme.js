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
    initialColorMode: "light",
    useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;