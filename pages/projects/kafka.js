import Image from 'next/image';
import NextLink from 'next/link';
import { Button } from "@chakra-ui/button";
import Main from "../../components/layout/main";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Grow, SlideIn } from "../../components/animated";
import { Box, Container, Heading, Text, Flex, Link } from "@chakra-ui/layout";

import kafka from '../../public/images/kafka.png';

const Kafka = () => {
    return (
        <Main title="Kafka Event Stream">
            <Container px={5} pt={20} maxW='container.md' fontSize={{ lg:"16px", md:"16px", sm:"15px" }}>
                <SlideIn delay={0} time={1} direction='right'>
                    <Box display='flex' flexDirection='row' alignItems='flex-end'>
                        <Heading as='h1' whiteSpace='nowrap' fontSize={{ lg:"32px", md:"28px", sm:"24px" }}>
                            Kafka Event Stream
                        </Heading>
                    </Box>
                </SlideIn>

                <Box mt={8}>
                    <SlideIn delay={0} time={1} direction='left'>
                        <Text variant='indented'>
                            Kafka is designed for event-driven processing and delivering streaming data to applications. 
                            Change Data Capture (CDC) turns databases into a streaming data source where each new transaction is delivered to 
                            Kafka in real time, rather than grouping them in batches and introducing latency for the Kafka 
                            consumers. CDC to Kafka minimizes the impact on source systems when done non-intrusively by 
                            reading the database redo or transaction logs. Log-based CDC to Kafka avoids performance 
                            degradation or modification for your production sources. (sources: www.striim.com)
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0} time={1} direction='right'>
                        <Text variant='indented'>
                            In this project, I developed a configuration script for CDC deployment and provided a consumer node 
                            to process events from a Kafka topic. I use the Debezium open-source distributed platform for 
                            change data capture. Once CDC started, consumer node will be able to accomodate update and 
                            insert event from kafka to stored in destination DB. It can be configured and modified by the 
                            consumer node itself based on business needs.
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
                                App and Infrastructure
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={0.9} time={1} direction='right'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Scope of Tech
                            </Text>
                            <Text ml={2}>
                                CDC, Python3, Apache Kafka, Docker, Shell Scripting, MySQL.
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.0} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Source
                            </Text>
                            <NextLink href='https://github.com/nichoteloo/Kafka-Event-Streaming' passHref>
                                <Link ml={2}>
                                    GitHub
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                </Box>

                <Grow delay={1.3} time={1}>
                    <Box display='flex' justifyContent='center' mt={8}>
                        <Image src={kafka} alt='Kafka'/>
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

export default Kafka;