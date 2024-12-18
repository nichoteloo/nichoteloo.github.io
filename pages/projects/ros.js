import Image from 'next/image';
import NextLink from 'next/link';
import { Button } from "@chakra-ui/button";
import Main from "../../components/layout/main";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Grow, SlideIn } from "../../components/animated";
import { Box, Container, Heading, Text, Flex, Link } from "@chakra-ui/layout";

import ros from '../../public/images/ros.png';

const ROS = () => {
    return (
        <Main title="ROS TurtleBot3">
            <Container px={5} pt={20} maxW='container.md' fontSize={{ lg:"16px", md:"16px", sm:"15px" }}>
                <SlideIn delay={0} time={1} direction='right'>
                    <Box display='flex' flexDirection='row' alignItems='flex-end'>
                        <Heading as='h1' whiteSpace='nowrap' fontSize={{ lg:"32px", md:"28px", sm:"24px" }}>
                            ROS TurtleBot3
                        </Heading>
                    </Box>
                </SlideIn>

                <Box mt={8}>
                    <SlideIn delay={0} time={1} direction='left'>
                        <Text variant='indented'>
                            Robot Operating System (ROS) is one of the popular open-source robotics 
                            software framework and it gained vast acceptance in the robotics community.
                            Noetic is the new L.T.S release of ROS distribution. Noetic primary support 
                            is for Ubuntu 20.04 (Focal). It was released in May 23rd. 2020.
                            In ROS Noetic development, I buila a robot from scratch. ROS Noetic 
                            already supported by Python3 and TurtleBot3 Stack.
                        </Text>
                    </SlideIn>
                    <SlideIn delay={0} time={1} direction='right'>
                        <Text variant='indented'>
                            TurtleBot is a ROS standard platform robot. There are 3 versions of the TurtleBot model
                            and TurtleBot3 is the most recent one. TurtleBot3 is a small, affordable, programmable, 
                            ROS-based mobile robot for use in education, research, hobby, and product prototyping.
                            Apart from build a robot, I also develop robot movement scenario for navigation and SLAM.
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
                                Prototype
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={0.9} time={1} direction='right'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Scope of Tech
                            </Text>
                            <Text ml={2}>
                                ROS Noetic, Linux Ubuntu 20.04, Python3, TurtleBot3 Stack.
                            </Text>
                        </Flex>
                    </SlideIn>
                    <SlideIn delay={1.0} time={1} direction='left'>
                        <Flex align='center' mt={1}>
                            <Text variant='projectLabel'>
                                Source
                            </Text>
                            <NextLink href='https://github.com/nichoteloo/ROS-Noetic-devel' passHref>
                                <Link ml={2}>
                                    GitHub
                                </Link>
                            </NextLink>
                        </Flex>
                    </SlideIn>
                </Box>

                <Grow delay={1.3} time={1}>
                    <Box display='flex' justifyContent='center' mt={8}>
                        <Image src={ros} alt='ROS-TurtleBot3' />
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

export default ROS;