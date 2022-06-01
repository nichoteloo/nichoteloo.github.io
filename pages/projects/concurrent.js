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
            <Container px={5} pt={20} maxW='container.md'>
                <SlideIn delay={0} time={1} direction='right'>
                    <Box display='flex' flexDirection='row' alignItems='flex-end'>
                        <Heading as='h1' whiteSpace='nowrap'>
                            Concurrent ETL
                        </Heading>
                    </Box>
                </SlideIn>

                <Box mt={8}>
                    <SlideIn delay={0} time={1} direction='left'>
                        <Text variant='indented'>
                            Concurrency and parallelism have already changed the landscape of software
                            applications. Concurrency means increasing the overall performance of an
                            application and parallelism means executing multiple sets of instructions
                            at the same time in completely different process.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0} time={1} direction='right'>
                        <Text variant='indented'>
                            In first scenario, I conduct benchmarking test over several Python modules 
                            which underlying concurrency and parallelism, including asyncio, threadpoolexecutor,
                            and processpoolexecutor. Based on scenario (processing multiple files), processpoolexecutor come as a winner
                            with lowest time execution. In another scenario, I develop multithread approach
                            to process one file and separate each record by its chunk size. This approach
                            is very beneficial especially when processing large records in on file.
                        </Text>
                    </SlideIn>
                </Box>

                <Box mt={8}>
                    <SlideIn delay={0.8} time={1} direction='left'>
                        <Flex align='center'>
                            <Text variant='projectLabel'>
                                Output
                            </Text>
                            <Text ml={2}>
                                Method and Algorithm
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={0.9} time={1} direction='right'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Tech Stack
                            </Text>
                            <Text ml={2}>
                                Python3, Asyncio, Threadpoolexecutor, Processpoolexecutor, Pandas.
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.0} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Source
                            </Text>
                            <NextLink href='https://github.com/nichoteloo/concurrent-etl' passHref>
                                <Link ml={2}>
                                    GitHub
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                </Box>

                <Grow delay={1.3} time={1}>
                    <Box display='flex' justifyContent='center' mt={8}>
                        <Image src={concurrent} alt='Concurrent' />
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

export default Concurrent;