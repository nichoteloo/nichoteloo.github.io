/**
 * @file projects.js
 * @author Nicolas C
 * @since 26/05/2022
 * @description Projects page, displays list of projects as tiles.
 */

import NextLink from "next/link";
import Main from "../components/layout/main"
import { SlideIn, Grow } from "../components/animated";
import { LinkBox, Heading, Container, Box, Text, SimpleGrid } from "@chakra-ui/react";

const Projects = () => {
    const ProjectItem = ({ children, id, date, title }) => {
        return (
            <Box
                w="100%"
                p={5}
                borderWidth="1px"
                borderStyle="solid"
                borderColor="gray.700"
                borderRadius="lg"
                bg="gray.900"
                transition="all 0.25s ease-in-out"
                _hover={{
                    borderColor: "gray.500",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                    transform: "translateY(-4px)",
                }}
            >
                <NextLink href={`/projects/${id}`} passHref>
                    <LinkBox cursor="pointer" textAlign="initial" _focus={{ outline: "none" }}>
                        <Text
                            fontSize={{ base: "11px", md: "12px" }}
                            fontFamily="mono"
                            letterSpacing="0.02em"
                            color="gray.500"
                            fontWeight="500"
                        >
                            {date}
                        </Text>
                        <Heading
                            as="h3"
                            fontSize={{ base: "md", md: "lg" }}
                            fontWeight="600"
                            mt={2}
                            color="gray.100"
                            lineHeight="1.4"
                        >
                            {title}
                        </Heading>
                        <Text
                            mt={2}
                            fontSize={{ base: "13px", md: "14px" }}
                            textAlign="justify"
                            color="gray.400"
                            lineHeight="1.6"
                        >
                            {children}
                        </Text>
                        <Text
                            mt={3}
                            fontSize="xs"
                            fontFamily="mono"
                            color="blue.400"
                            opacity={0.7}
                            _groupHover={{ opacity: 1 }}
                        >
                            Read more →
                        </Text>
                    </LinkBox>
                </NextLink>
            </Box>
        );
    };

    return (
        <Main title="Projects">
            <Container px={8} pt={20} maxW={{ lg: "container.md", md: "container.md", sm: "container.sm" }}>
                <SlideIn delay={0} time={0} direction="right">
                    <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                        <Heading fontSize={{ lg: "28px", md: "26px", sm: "24px" }} fontFamily="heading" fontWeight="700" letterSpacing="-0.03em">
                            Projects
                        </Heading>
                    </Box>
                </SlideIn>

                <SimpleGrid mt={8} columns={{ base: 1, md: 1, lg: 1 }} gap={8}>
                    <Grow delay={0} time={0.8}>
                        <ProjectItem title="ETL Worker Pattern" id="worker" date="Aug 21, 2022">
                            Implementing worker pattern for ETL operation. Exploit several workers to process
                            million records from CSV file to PostgreSQL database.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={0.2} time={0.8}>
                        <ProjectItem title="WiFi Fingerprint" id="wifi" date="Jun 12, 2022">
                            Framework optimization with the use of hybrid clustering and improved WKNN algorithm
                            for data preprocessing in WiFi indoor positioning.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={0.4} time={0.8}>
                        <ProjectItem title="Covid Monitoring" id="covid" date="Jun 02, 2022">
                            Dashboard for covid case monitoring purposes. Access public API and return the total
                            number based on selected country and visualize it.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={0.6} time={0.8}>
                        <ProjectItem title="Kafka Event Stream" id="kafka" date="Apr 29, 2022">
                            Kafka event streaming between MySQL database. Created a change data capture (CDC)
                            service that captures data changes MySQL binary log.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={0.8} time={0.8}>
                        <ProjectItem title="Concurrent ETL" id="concurrent" date="Apr 04, 2022">
                            Perform concurrency and parallelism to process several files in ETL scenarios.
                            Benchmarking test over several underlying Python modules.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={1.0} time={0.8}>
                        <ProjectItem title="Lymphoblast Counter" id="lympho" date="Dec 19, 2021">
                            Simplified and scalable API for the image classification machine learning model.
                            Configured and deployed in the google cloud ecosystem.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={1.2} time={0.8}>
                        <ProjectItem title="Dictionary App" id="dictionary" date="Jun 17, 2021">
                            An application that helps me with my scientific paraphrasing needs. Find similar
                            words and their example sentences.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={1.4} time={0.8}>
                        <ProjectItem title="ROS TurtleBot3" id="ros" date="Jun 03, 2021">
                            Developing robot movement in ROS Noetic ecosystem. Run in Linux Ubuntu 20.04 and
                            supported by Python3 and TurtleBot3 stack.
                        </ProjectItem>
                    </Grow>
                </SimpleGrid>
            </Container>
        </Main>
    );
};

export default Projects;