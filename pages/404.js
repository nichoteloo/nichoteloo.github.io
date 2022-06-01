/**
 * @file 404.js
 * @author Nicolas C
 * @since 26/05/2022
 * @description 404 Page.
 */

import Link from "next/link";
import { Button } from "@chakra-ui/button";
import Main from "../components/layout/main";
import { SlideIn } from "../components/animated";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Container, Flex, Heading, Text } from "@chakra-ui/layout";

const Home = () => {
    return (
        <Main title='404'>
            <Container px={8} pt={20} maxW='container.md'>
                <SlideIn delay={0} time={1} direction="right">
                    <Flex direction='column' align='center'>
                        <Heading as='h1'>
                            404
                        </Heading>
                        <Text>
                            This resource could not be found
                        </Text>
                        <Link href='/' passHref>
                            <Button align='center' leftIcon={<ChevronLeftIcon />} colorScheme='blue' mt={5}>
                                Home
                            </Button>
                        </Link>
                    </Flex>
                </SlideIn>
            </Container>
        </Main>
    );
};

export default Home;