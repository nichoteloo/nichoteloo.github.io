import Image from 'next/image';
import NextLink from 'next/link';
import { Button } from "@chakra-ui/button";
import Main from "../../components/layout/main";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Grow, SlideIn } from "../../components/animated";
import { Box, Container, Heading, Text, Flex, Link } from "@chakra-ui/layout";

import dictionary from '../../public/images/dictionary.png';

const Dictionary = () => {
    return (
        <Main title="Dictionary App">
            <Container px={5} pt={20} maxW='container.md' fontSize={{ lg:"16px", md:"16px", sm:"15px" }}>
                <SlideIn delay={0} time={1} direction='right'>
                    <Box display='flex' flexDirection='row' alignItems='flex-end'>
                        <Heading as='h1' whiteSpace='nowrap' fontSize={{ lg:"32px", md:"28px", sm:"24px" }}>
                            Dictionary App
                        </Heading>
                    </Box>
                </SlideIn>

                <Box mt={8}>
                    <SlideIn delay={0} time={1} direction='left'>
                        <Text variant='indented'>
                            Dictionary Apps is the application built to help me find out synonyms of a word. 
                            Initially built because of the need to find similar words along with examples of 
                            the sentence accompanying that word. This app is really helpful, especially for 
                            me to find the proper word for scientific paraphrase.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0} time={1} direction='right'>
                        <Text variant='indented'>
                            I developed this application by using Django Python web framework. The API
                            is already provided in public, so I just basically hit the endpoint, build to
                            JsonResponse schema, and parse it to HTML page. This application already 
                            deployed in Docker container with Gunicorn WSGI Server. These containers 
                            represent isolated environments that provide everything necessary to run the application.
                        </Text>
                    </SlideIn>
                </Box>

                <Box mt={8} fontSize={{ lg:"15px", md:"15px", sm:"14px" }}>
                    <SlideIn delay={0.8} time={1} direction='left'>
                        <Flex align='center'>
                            <Text variant='projectLabel'>
                                Output
                            </Text>
                            <Text ml={2}>
                                Web Application
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={0.9} time={1} direction='right'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Tech Stack
                            </Text>
                            <Text ml={2}>
                                Django, Docker, HTML, CSS, Javascript, Heroku.
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.0} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Source
                            </Text>
                            <NextLink href='https://github.com/nichoteloo/Dictionary-Apps' passHref>
                                <Link ml={2}>
                                    GitHub
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                </Box>

                <Grow delay={1.3} time={1}>
                    <Box display='flex' justifyContent='center' mt={8}>
                        <Image src={dictionary} alt='Dictionary-App' />
                    </Box>
                </Grow>

                <Grow delay={1.9} time={1}>
                    <Box mt={8} align='center'>
                        <NextLink href='/projects' passHref>
                            <Button align='center' leftIcon={<ChevronLeftIcon />} colorScheme='blue'>
                                Projects
                            </Button>
                        </NextLink>
                    </Box>
                </Grow>
            </Container>
            
        </Main>
    );
};

export default Dictionary;