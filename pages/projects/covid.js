import Image from 'next/image';
import NextLink from 'next/link';
import { Button } from "@chakra-ui/button";
import Main from "../../components/layout/main";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Grow, SlideIn } from "../../components/animated";
import { Box, Container, Heading, Text, Flex, Link } from "@chakra-ui/layout";

import covid from '../../public/images/covid.png';
import covid2 from '../../public/images/covid2.png';

const Covid = () => {
    return (
        <Main title="Covid Monitoring">
            <Container px={5} pt={20} maxW='container.md'>
                <SlideIn delay={0} time={1} direction='right'>
                    <Box display='flex' flexDirection='row' alignItems='flex-end'>
                        <Heading as='h1' whiteSpace='nowrap'>
                            Covid Monitoring
                        </Heading>
                    </Box>
                </SlideIn>

                <Box mt={8}>
                    <SlideIn delay={0} time={1} direction='left'>
                        <Text variant='indented'>
                            The Covid monitoring project is intended to help clients to monitor the latest 
                            conditions of the Covid outbreak in the world. This application is present in 
                            the form of a web application that is able to filter data by country and case 
                            type (new case, death, or recovered). Data displayed in the top three boxes is 
                            the total number of new cases, death, and recovered based on country, meanwhile 
                            graph display depends on what case type that selected.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0} time={1} direction='right'>
                        <Text variant='indented'>
                            This application is developed with Flask Python web framework. Meanwhile, the front 
                            page or HTML page is developed from scratch. For graph visualization, I use the Plotly 
                            Python library. The file structures (API call function, configuration, template) are 
                            neatly organized and allow developers to make it more scalable.
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
                                Flask, Plotly, MySQL, HTML, CSS, Javascript, Docker.
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.0} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Source
                            </Text>
                            <NextLink href='https://github.com/nichoteloo/Covid-Monitoring' passHref>
                                <Link ml={2}>
                                    GitHub
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                </Box>

                <Grow delay={1.3} time={1}>
                    <Box display='flex' justifyContent='center' mt={8}>
                        <Image src={covid} alt='Covid-Number' />
                    </Box>
                </Grow>

                <Grow delay={1.3} time={1}>
                    <Box display='flex' justifyContent='center' mt={8}>
                        <Image src={covid2} alt='Covid-Chart' />
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

export default Covid;