import Image from 'next/image';
import NextLink from 'next/link';
import { Button } from "@chakra-ui/button";
import Main from "../../components/layout/main";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Grow, SlideIn } from "../../components/animated";
import { Box, Container, Heading, Text, Flex, Link } from "@chakra-ui/layout";

import wifi from '../../public/images/wifi-fingerprint.png';
import wifi2 from '../../public/images/wifi-fingerprint2.png';

const WiFi = () => {
    return (
        <Main title="WiFi Fingerprint">
            <Container px={5} pt={20} maxW='container.md' fontSize={{ lg:"16px", md:"16px", sm:"15px" }}>
                <SlideIn delay={0} time={1} direction='right'>
                    <Box display='flex' flexDirection='row' alignItems='flex-end'>
                        <Heading as='h1' whiteSpace='nowrap' fontSize={{ lg:"32px", md:"28px", sm:"24px" }}>
                            WiFi Fingerprint
                        </Heading>
                    </Box>
                </SlideIn>

                <Box mt={8}>
                    <SlideIn delay={0} time={1} direction='left'>
                        <Text variant='indented'>
                            The development of positioning technology has become a vibrant topic in wireless communication research,
                            especially for some location-based service (LBS) applications in public areas. However, the use of indoor 
                            LBS still encounters several limitations due to the destructive factors experienced by the signal such as 
                            blocking objects and multipath effects. Fingerprint/scene analysis methods are well-known techniques for 
                            indoor positioning applications. The fingerprint method is divided into two stages, the offline and online 
                            stage. Data is collected during offline stage to establish a database which will be used in online stage.
                            In the online stage, the user obtains an online data from the specified position and matches it with the 
                            offline data previously obtained in the database. 
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0} time={1} direction='right'>
                        <Text variant='indented'>
                            In this project, we proposed a new framework for fingerprint-based indoor positioning methods, i.e., DB-K Means 
                            with Improved WKNN (DB-K-IWKNN). We apply hybrid solutions which incorporate DBSCAN and K-means clustering
                            in the offline stage and combine both physical and spatial data representation in the online stage. By the implementation 
                            of DBSCAN and combined data representation, technically, our framework is comprehensively improve the positioning 
                            performance since it will reduce the outlier data very well both for offline or online stage in fingerprint-based 
                            indoor positioning technique.
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
                                Proof of Concept
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={0.9} time={1} direction='right'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Scope of Tech
                            </Text>
                            <Text ml={2}>
                                Python3, Pandas, Plotly, Scikit-learn, InfluxDB, Grafana, NodeRed, Linux Ubuntu.
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.0} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Source
                            </Text>
                            <NextLink href='https://drive.google.com/file/d/1Pu03fcxgsrEIA_ZJjRmqaWjvWJ16DbBk/view?usp=sharing' passHref>
                                <Link ml={2}>
                                    Google Drive
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                </Box>

                <Grow delay={1.3} time={1}>
                    <Box display='flex' justifyContent='center' mt={8}>
                        <Image src={wifi} alt='Wifi-Schema' />
                    </Box>
                </Grow>

                <Grow delay={1.3} time={1}>
                    <Box display='flex' justifyContent='center' mt={8}>
                        <Image src={wifi2} alt='Wifi-Schema' />
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

export default WiFi;