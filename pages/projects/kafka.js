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
                            Kafka Event Stream
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
                            Kafka is designed for event-driven processing and delivering streaming data to applications.
                            Change Data Capture (CDC) turns databases into a streaming data source where each new transaction is delivered to
                            Kafka in real time, rather than grouping them in batches and introducing latency for the Kafka
                            consumers. CDC to Kafka minimizes the impact on source systems when done non-intrusively by
                            reading the database redo or transaction logs. Log-based CDC to Kafka avoids performance
                            degradation or modification for your production sources. (sources: www.striim.com)
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
                            In this project, I developed a configuration script for CDC deployment and provided a consumer node
                            to process events from a Kafka topic. I use the Debezium open-source distributed platform for
                            change data capture. Once CDC started, consumer node will be able to accommodate update and
                            insert event from kafka to stored in destination DB. It can be configured and modified by the
                            consumer node itself based on business needs.
                        </Text>
                    </SlideIn>
                </Box>

                <Box mt={8} fontSize={{ base: "13px", md: "14px" }}>
                    <SlideIn delay={0.8} time={1} direction="left">
                        <Flex align="center" wrap="wrap" gap={2}>
                            <Text variant="projectLabel" fontFamily="mono" fontWeight="600" color="gray.400">
                                Output
                            </Text>
                            <Text color="gray.300">App and Infrastructure</Text>
                        </Flex>
                    </SlideIn>

                    <SlideIn delay={0.9} time={1} direction="right">
                        <Flex align="flex-start" wrap="wrap" gap={2} mt={2}>
                            <Text variant="projectLabel" fontFamily="mono" fontWeight="600" color="gray.400">
                                Scope of Tech
                            </Text>
                            <Text color="gray.300" flex="1">
                                CDC, Python3, Apache Kafka, Docker, Shell Scripting, MySQL.
                            </Text>
                        </Flex>
                    </SlideIn>

                    <SlideIn delay={1.0} time={1} direction="left">
                        <Flex align="center" wrap="wrap" gap={2} mt={2}>
                            <Text variant="projectLabel" fontFamily="mono" fontWeight="600" color="gray.400">
                                Source
                            </Text>
                            <NextLink href="https://github.com/nichoteloo/Kafka-Event-Streaming" passHref>
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
                            src={kafka}
                            alt="Kafka Event Stream - CDC Architecture"
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

export default Kafka;