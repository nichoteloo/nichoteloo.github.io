/**
* @file _app.js
* @author Nicolas C.
* @since 28/5/2022
* @description Update Main Component in Next JS (Main)
*/

import theme from '../components/themes';
import { ChakraProvider } from '@chakra-ui/react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;