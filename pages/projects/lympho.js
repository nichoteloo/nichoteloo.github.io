import Image from 'next/image';
import NextLink from 'next/link';
import { Button } from "@chakra-ui/button";
import Main from "../../components/layout/main";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Grow, SlideIn } from "../../components/animated";
import { Box, Container, Heading, Text, Flex, Link } from "@chakra-ui/layout";

import lympho from '../../public/images/lymphoblast.png';

const Lympho = () => {
    return (
        <Main title="Lymphoblast Counter">
            <Container px={5} pt={20} maxW='container.md' fontSize={{ lg:"16px", md:"16px", sm:"15px" }}>
                <SlideIn delay={0} time={1} direction='right'>
                    <Box display='flex' flexDirection='row' alignItems='flex-end'>
                        <Heading as='h1' whiteSpace='nowrap' fontSize={{ lg:"32px", md:"28px", sm:"24px" }}>
                            Lymphoblast Counter
                        </Heading>
                    </Box>
                </SlideIn>

                <Box mt={8}>
                    <SlideIn delay={0} time={1} direction='left'>
                        <Text variant='indented'>
                            We built a healthcare application that may help doctors to diagnose a number of lymphoblast cells encountered in 
                            leukemia patients. Traditionally, the counting process still be done without any confirmation 
                            and/or affirmation from any parties. By using the image classification model we can help doctors 
                            or medical officers to verify the number of lymphoblast cell.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0} time={1} direction='right'>
                        <Text variant='indented'>
                            This project was initiated to help our machine learning engineer to maintain our MobileNet V2 model. 
                            I created a simplified and scalable API in the containerized ecosystem, which was then deployed in 
                            Cloud Run (Google Cloud Platform Service). Furthermore, I built a web-based application to assist 
                            clients in processing images from their Personal Computers (PC). By using the Cloud Run service we are able to run 
                            stateless containers that are invocable via HTTP requests. It&apos;s serverless by abstracting away all 
                            infrastructure management.
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
                                API and Infrastructure
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={0.9} time={1} direction='right'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Scope of Tech
                            </Text>
                            <Text ml={2}>
                                Flask, Tensorflow, FastAPI, Jupyter Notebook, Docker, Heroku, Gunicorn, Swagger UI.
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.0} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Source
                            </Text>
                            <NextLink href='https://github.com/nichoteloo/API-Lymphoblast-Counter' passHref>
                                <Link ml={2}>
                                    GitHub
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                </Box>

                <Grow delay={1.3} time={1}>
                    <Box display='flex' justifyContent='center' mt={8}>
                        <Image src={lympho} alt='Lymphoblast-Counter' />
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

export default Lympho;