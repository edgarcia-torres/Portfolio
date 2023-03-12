import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "../config/theme";

import styles from '../styles/styles'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'




import "@/styles/styles.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraBaseProvider >
        <Component {...pageProps} />;
      </ChakraBaseProvider >
    </>
  );
}

export default MyApp;
