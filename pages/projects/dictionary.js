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
            <Container px={{ base: 4, sm: 6 }} pt={20} maxW="container.md">
                <SlideIn delay={0} time={1} direction="right">
                    <Box display="flex" flexDirection="row" alignItems="flex-end">
                        <Heading
                            as="h1"
                            fontSize={{ base: "24px", sm: "28px", md: "32px" }}
                            fontWeight="700"
                            letterSpacing="tight"
                            whiteSpace="nowrap"
                            color="gray.100"
                        >
                            Dictionary App
                        </Heading>
                    </Box>
                </SlideIn>

                <Box mt={8}>
                    <SlideIn delay={0} time={1} direction="left">
                        <Text
                            variant="indented"
                            fontSize={{ base: "14px", md: "15px" }}
                            lineHeight="tall"
                            color="gray.300"
                            textAlign="justify"
                            mb={4}
                        >
                            Dictionary App is the application built to help me find out synonyms of a word.
                            Initially built because of the need to find similar words along with
                            examples of the sentence accompanying that word. This app is really helpful, especially for
                            me to find the proper word for scientific paraphrase.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0} time={1} direction="right">
                        <Text
                            variant="indented"
                            fontSize={{ base: "14px", md: "15px" }}
                            lineHeight="tall"
                            color="gray.300"
                            textAlign="justify"
                        >
                            I developed this application by using Django Python web framework. The API is already provided
                            in public, so I just basically hit the endpoint, build to JsonResponse schema, and parse it to
                            HTML page. This application already deployed in Docker container with Gunicorn WSGI Server.
                            These containers represent isolated environments that provide everything necessary to run the application.
                        </Text>
                    </SlideIn>
                </Box>

                <Box mt={8} fontSize={{ base: "13px", md: "14px" }}>
                    <SlideIn delay={0.8} time={1} direction="left">
                        <Flex align="center" wrap="wrap" gap={2}>
                            <Text variant="projectLabel" fontFamily="mono" fontWeight="600" color="gray.400">
                                Output
                            </Text>
                            <Text color="gray.300">Web Application</Text>
                        </Flex>
                    </SlideIn>

                    <SlideIn delay={0.9} time={1} direction="right">
                        <Flex align="flex-start" wrap="wrap" gap={2} mt={2}>
                            <Text variant="projectLabel" fontFamily="mono" fontWeight="600" color="gray.400">
                                Scope of Tech
                            </Text>
                            <Text color="gray.300" flex="1">
                                Django, Docker, HTML, CSS, Javascript, Heroku.
                            </Text>
                        </Flex>
                    </SlideIn>

                    <SlideIn delay={1.0} time={1} direction="left">
                        <Flex align="center" wrap="wrap" gap={2} mt={2}>
                            <Text variant="projectLabel" fontFamily="mono" fontWeight="600" color="gray.400">
                                Source
                            </Text>
                            <NextLink href="https://github.com/nichoteloo/Dictionary-Apps" passHref>
                                <Link
                                    isExternal
                                    color="blue.400"
                                    fontWeight="500"
                                    _hover={{ color: "blue.300", textDecoration: "underline" }}
                                >
                                    GitHub
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                </Box>

                <Grow delay={1.3} time={1}>
                    <Box display="flex" justifyContent="center" mt={8}>
                        <Image
                            src={dictionary}
                            alt="Dictionary App - Web Interface"
                            borderRadius="lg"
                            shadow="lg"
                            maxW="100%"
                            h="auto"
                            objectFit="cover"
                            border="1px solid"
                            borderColor="gray.700"
                        />
                    </Box>
                </Grow>

                <Grow delay={1.9} time={1}>
                    <Box mt={12} textAlign="center">
                        <NextLink href="/projects" passHref>
                            <Button
                                leftIcon={<ChevronLeftIcon />}
                                colorScheme="blue"
                                variant="outline"
                                size="md"
                                fontFamily="mono"
                                fontWeight="500"
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                                }}
                                transition="all 0.2s"
                            >
                                Back to Projects
                            </Button>
                        </NextLink>
                    </Box>
                </Grow>
            </Container>
        </Main>
    );
};

export default Dictionary;