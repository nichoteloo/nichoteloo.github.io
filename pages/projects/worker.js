import Image from 'next/image';
import NextLink from 'next/link';
import { Button } from "@chakra-ui/button";
import Main from "../../components/layout/main";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Grow, SlideIn } from "../../components/animated";
import { Box, Container, Heading, Text, Flex, Link } from "@chakra-ui/layout";

import worker from '../../public/images/worker.png';

const Worker = () => {
    return (
        <Main title="Worker Pattern">
            <Container px={5} pt={20} maxW='container.md' fontSize={{ lg:"16px", md:"16px", sm:"15px" }}>
                <SlideIn delay={0} time={1} direction='right'>
                    <Box display='flex' flexDirection='row' alignItems='flex-end'>
                        <Heading as='h1' whiteSpace='nowrap' fontSize={{ lg:"32px", md:"28px", sm:"24px" }}>
                            ETL Worker Pattern
                        </Heading>
                    </Box>
                </SlideIn>

                <Box mt={8}>
                    <SlideIn delay={0} time={1} direction='left'>
                        <Text variant='indented'>
                            In order to process large CSV file(s), we need to tackle the write operation issue 
                            at the database level which most of the time is very time-consuming. To improve the performance,
                            a newly created worker is spawned to process the write operation. That means multi rows
                            can be processed/written at the same time into the database. We use golang for this 
                            purpose as this language has the power to use worker patterns asynchronously.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0} time={1} direction='right'>
                        <Text variant='indented'>
                            Initially, worker interface is created with only one method, as well as one single 
                            purpose. Next, we create a WorkerPool which contains several workers to receive
                            jobs and processing tasks. WorkerPool has an array of workers which later will be 
                            chosen and process given jobs in a separate goroutine.  Those jobs will be executed 
                            without blocking each other and this is the secret of program acceleration.
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
                                Golang, PostgreSQL, Worker Pattern, Concurrency.
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.0} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Source
                            </Text>
                            <NextLink href='https://github.com/nichoteloo/etl-worker-pattern' passHref>
                                <Link ml={2}>
                                    GitHub
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                </Box>

                <Grow delay={1.3} time={1}>
                    <Box display='flex' justifyContent='center' mt={8}>
                        <Image src={worker} alt='Worker-Pattern' />
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

export default Worker;