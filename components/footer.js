/**
 * @file footer.js
 * @author Nicolas C
 * @since 26/05/2022
 * @description Basic footer for every page.
 */

import { MdEmail } from "react-icons/md";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { Container, Stack, Divider, Text, Link } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Container maxW='container.md' as="footer" pb={6} mt="16">
            <Divider size="lg" color="gray.500"/>
            <Stack justify="space-between" direction="row"  spacing={{ base: '4', md: '10' }}>
                <Text fontSize="md" color="subtle" p={2}>
                    &copy; 2022 - Nicolas
                </Text>

                <Stack justify="space-between" direction="row" align="center">
                    <Link href="https://twitter.com/nichotelo" color='white'><AiFillTwitterSquare size={21}/></Link>
                    <Link href="https://www.linkedin.com/in/nicolaschristianto/" color='white'><AiFillLinkedin size={21} /></Link>
                    <Link href="mailto:nichotelo@outlook.com" color='white'><MdEmail size={21} /></Link>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Footer;