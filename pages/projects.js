/**
 * @file projects.js
 * @author Nicolas C
 * @since 26/05/2022
 * @description Projects page, displays list of projects as tiles.
 */

import NextLink from "next/link";
import Main from "../components/layout/main"
import { SlideIn, Grow } from "../components/animated";
import { Flex, LinkBox, Image, Heading, Container, Box, Text, SimpleGrid } from "@chakra-ui/react";

const Projects = () => {
    const ProjectItem = ({children, id, date, title}) => {
        return (
            <Flex w="100%" direction="column" justify="flex-start" align="center">
                <NextLink href={`projects/${id}`} passHref>
                <LinkBox
                    cursor="pointer"
                    textAlign="initial"
                    transition="color 1s ease"
                    _hover={{ color: "gray.500" }}
                >
                    <Text mt={3}>
                        |&nbsp; {date}
                    </Text>
                    <Heading fontSize="20px" fontFamily="body" mt={2.5}>
                        {title}
                    </Heading>
                    <Text mt={1} fontFamily="initial" fontSize="16px" textAlign="justify" color="gray.400">
                        {children}
                    </Text>
                </LinkBox>
                </NextLink>
            </Flex>
        );
    };

    return (
        <Main title="Projects">
            <Container px={8} pt={20} maxW={{ lg:"container.md", md:"container.md", sm:"container.sm" }}>
                <SlideIn delay={0} time={0} direction="right">
                    <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                        <Heading fontSize={{ lg: "35px", md:"32px", sm:"32px"}} fontFamily="monospace">
                            Projects
                        </Heading>

                        <Text mt={3} fontFamily="inherit" fontSize="18px" textAlign="justify" color="gray.400">
                            All of my long-form thoughts on software architecture and methodology, collected in chronological order. Happy reading!
                        </Text>
                    </Box>
                </SlideIn>

                <SimpleGrid mt={8} columns={{ lg:"1", md:"1", sm:"1" }} gap={8}>
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