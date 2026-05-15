import Image from 'next/image';
import NextLink from 'next/link';
import { Button } from "@chakra-ui/button";
import Main from "../../components/layout/main";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Grow, SlideIn } from "../../components/animated";
import { Box, Container, Heading, Text, Flex, Link } from "@chakra-ui/layout";

import concurrent from '../../public/images/concurrent.png';

const Concurrent = () => {
    return (
        <Main title="Concurrent ETL">
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
                            Concurrent ETL
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
                            Concurrency and parallelism have already changed the landscape of software
                            applications. Concurrency means increasing the overall performance of an
                            application and parallelism means executing multiple sets of instructions
                            at the same time in completely different process.
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
                            In first scenario, I conducted benchmarking test over several Python modules
                            which underlying concurrency and parallelism, including asyncio, threadpoolexecutor,
                            and processpoolexecutor. Based on scenario (processing multiple files), processpoolexecutor come as a winner
                            with lowest time execution. In another scenario, I developed multithread approach
                            to process one file and separate each record by its chunk size. This approach is very beneficial
                            especially when processing large records file.
                        </Text>
                    </SlideIn>
                </Box>

                <Box mt={8} fontSize={{ base: "13px", md: "14px" }}>
                    <SlideIn delay={0.8} time={1} direction="left">
                        <Flex align="center" wrap="wrap" gap={2}>
                            <Text variant="projectLabel" fontFamily="mono" fontWeight="600" color="gray.400">
                                Output
                            </Text>
                            <Text color="gray.300">Proof of Concept</Text>
                        </Flex>
                    </SlideIn>

                    <SlideIn delay={0.9} time={1} direction="right">
                        <Flex align="flex-start" wrap="wrap" gap={2} mt={2}>
                            <Text variant="projectLabel" fontFamily="mono" fontWeight="600" color="gray.400">
                                Scope of Tech
                            </Text>
                            <Text color="gray.300" flex="1">
                                Python3, Asyncio, Threadpoolexecutor, Processpoolexecutor, Pandas.
                            </Text>
                        </Flex>
                    </SlideIn>

                    <SlideIn delay={1.0} time={1} direction="left">
                        <Flex align="center" wrap="wrap" gap={2} mt={2}>
                            <Text variant="projectLabel" fontFamily="mono" fontWeight="600" color="gray.400">
                                Source
                            </Text>
                            <NextLink href="https://github.com/nichoteloo/concurrent-etl" passHref>
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
                            src={concurrent}
                            alt="Concurrent ETL Benchmark Results"
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

export default Concurrent;