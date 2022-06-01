/**
 * @file main.js
 * @author Nicolas C
 * @since 26/05/2022
 * @description Main container, used for formatting
 */

import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";
import { Box } from "@chakra-ui/layout";

const Main = ({ children, title }) => {
    return (
        <Box as="main">
            <Head>
                <title>{title} - Nicolas C.</title>
            </Head>

            <Navbar/>

            {children}

            <Footer/>
        </Box>
    );
}

export default Main;