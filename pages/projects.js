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

import styles from "../components/styles/images.module.css";

const Projects = () => {
    const ProjectItem = ({children, image, id, title}) => {
        return (
            <Flex w="100%" direction="column" justify="flex-start" align="center">
                <NextLink href={`projects/${id}`} passHref>
                <LinkBox
                    cursor="pointer"
                    textAlign="initial"
                    transition="color 1s ease"
                    _hover={{ color: "gray.500" }}
                >
                    <Image
                    className={styles.projectCard}
                    src={image}
                    alt={title}
                    placeholder="blur"
                    loading="lazy"
                    layout="intrinsic"
                    w="80"
                    h="52"
                    />
                    <Heading as="h3" fontSize="2xl" fontFamily="body" mt={3}>
                        {title}
                    </Heading>
                    <Text mt={1} fontFamily="initial">
                        {children}
                    </Text>
                </LinkBox>
                </NextLink>
            </Flex>
        );
    };

    return (
        <Main title="Projects">
            <Container px={8} pt={20} maxW="container.md">
                <SlideIn delay={0} time={1.5} direction="right">
                    <Box display="flex" flexDirection="column">
                        <Heading as="h1" fontSize={{ base: "5xl" }} fontFamily="initial">
                            Projects
                        </Heading>
                        <Text fontSize={{ base: "kg", md: "xl" }} fontFamily="body">
                            These are a collection of my recent projects.
                        </Text>
                    </Box>
                </SlideIn>

                <SimpleGrid mt={8} columns={[1, 2, 2, 2]} gap={8}>
                    <Grow delay={0} time={1.8}>
                        <ProjectItem image="/images/kafka.png" title="Kafka Event Stream" id="kafka">
                            Kafka event streaming between MySQL database. Created a change data capture (CDC) 
                            service that captures data changes MySQL binary log.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={0} time={1.8}>
                        <ProjectItem image="/images/concurrent.png" title="Concurrent ETL" id="concurrent">
                            Perform concurrency and parallelism to process several files in ETL scenarios. 
                            Benchmarking test over several underlying Python modules.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={0} time={1.8}>
                        <ProjectItem image="/images/wifi-fingerprint.png" title="WiFi Fingerprint" id="wifi">
                            Framework optimization with the use of hybrid clustering and improved WKNN algorithm 
                            for data preprocessing in WiFi indoor positioning.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={0} time={1.8}>
                        <ProjectItem image="/images/lymphoblast.png" title="Lymphoblast Counter" id="lympho">
                            Simplified and scalable API for the image classification machine learning model. 
                            Configured and deployed in the google cloud ecosystem.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={0} time={1.8}>
                        <ProjectItem image="/images/covid.png" title="Covid Monitoring" id="covid">
                            Dashboard for covid case monitoring purposes. Access public API and return the total 
                            number based on selected country and visualize it.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={0} time={1.8}>
                        <ProjectItem image="/images/dictionary.png" title="Dictionary App" id="dictionary">
                            An application that helps me with my scientific paraphrasing needs. Find similar 
                            words and their example sentences.
                        </ProjectItem>
                    </Grow>
                    <Grow delay={0} time={1.8}>
                        <ProjectItem image="/images/ros.png" title="ROS TurtleBot3" id="ros">
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