/**
 * @file navbar.js
 * @author Nicolas C
 * @since 26/05/2022
 * @description Navigation bar at the top of the page, links for full size.
 */

import NextLink from 'next/link';
import { useState } from 'react';
import { IconButton } from '@chakra-ui/button';
import { AiOutlineDownload } from 'react-icons/ai';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
import { Box, Container, Flex, Heading, Link, Stack, Spacer, Text } from '@chakra-ui/layout';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            zIndex={999}
            bg="rgba(10, 10, 11, 0.85)"
            backdropFilter="blur(12px)"
            borderBottom="1px solid"
            borderColor="whiteAlpha.100"
        >
            <Container
                maxW="container.md"
                display="flex"
                alignItems="center"
                justifyContent={{ base: 'space-between', md: 'space-evenly' }}
                py={2}
                px={4}
            >
                <Flex ml={1}>
                    <Heading as="h1" size="md" whiteSpace="nowrap" fontFamily="heading">
                        <NextLink href="/" passHref>
                            <Link variant="logo">
                                <Text
                                    as="span"
                                    fontFamily="heading"
                                    fontWeight="700"
                                    fontSize={{ lg: "20px", md: "18px", sm: "16px" }}
                                    letterSpacing="-0.03em"
                                    color="white"
                                    _hover={{ color: 'gray.400' }}
                                >
                                    TeloTech
                                </Text>
                            </Link>
                        </NextLink>
                    </Heading>
                </Flex>

                <Spacer />

                <Stack display={{ base: 'none', md: 'flex' }} direction="row" align="center" spacing={0}>
                    <NextLink href="/projects" passHref>
                        <Link
                            display="inline-flex"
                            alignItems="center"
                            gap={2}
                            px={3}
                            py={1.5}
                            borderRadius="md"
                            fontFamily="heading"
                            fontWeight="700"
                            fontSize={{ lg: "15px", md: "14px", sm: "13px" }}
                            color="gray.300"
                            bg="transparent"
                            transition="all 0.2s"
                            _hover={{
                                bg: 'gray.700',
                                color: 'white',
                                textDecoration: 'none'
                            }}
                            _focus={{ outline: 'none', boxShadow: 'none' }}
                            _focusVisible={{ boxShadow: '0 0 0 2px #333338' }}
                        >
                            Projects
                        </Link>
                    </NextLink>

                    <NextLink
                        href="https://drive.google.com/file/d/149pa08OiH0RxjwTDCj-O_aMastwAOYKL/view?usp=sharing"
                        passHref
                    >
                        <Link
                            as="a"
                            target="_blank"
                            rel="noopener noreferrer"
                            display="inline-flex"
                            alignItems="center"
                            gap={2}
                            px={3}
                            py={1.5}
                            borderRadius="md"
                            fontFamily="heading"
                            fontWeight="700"
                            fontSize={{ lg: "15px", md: "14px", sm: "13px" }}
                            color="gray.300"
                            bg="transparent"
                            transition="all 0.2s"
                            _hover={{
                                bg: 'gray.700',
                                color: 'white',
                                textDecoration: 'none'
                            }}
                            _focus={{ outline: 'none', boxShadow: 'none' }}
                            _focusVisible={{ boxShadow: '0 0 0 2px #333338' }}
                        >
                            Resume
                            <AiOutlineDownload />
                        </Link>
                    </NextLink>
                </Stack>

                <Box display={{ base: 'inline-block', md: 'none' }} ml={2}>
                    <Menu isLazy onOpen={() => setMenuOpen(true)} onClose={() => setMenuOpen(false)}>
                        <MenuButton
                            as={IconButton}
                            icon={menuOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            aria-label="menu"
                            variant="ghost"
                            color="gray.300"
                            _hover={{ bg: 'whiteAlpha.100' }}
                            _focus={{ boxShadow: 'none' }}
                            _focusVisible={{ outline: '2px solid', outlineColor: 'gray.600', outlineOffset: '2px' }}
                        />

                        <MenuList bg="gray.900" borderColor="gray.700" minW="10rem" p={1}>
                            <NextLink href="/projects" passHref>
                                <MenuItem
                                    display="inline-flex"
                                    alignItems="center"
                                    gap={2}
                                    px={3}
                                    py={1.5}
                                    mb={1}
                                    borderRadius="md"
                                    fontFamily="heading"
                                    fontWeight="700"
                                    fontSize={{ lg: "15px", md: "14px", sm: "13px" }}
                                    color="gray.300"
                                    bg="transparent"
                                    transition="all 0.2s"
                                    _hover={{
                                        bg: 'gray.700',
                                        color: 'white',
                                        textDecoration: 'none'
                                    }}
                                    _focus={{ bg: 'transparent', outline: 'none', boxShadow: 'none' }}
                                    _focusVisible={{ boxShadow: '0 0 0 2px #333338' }}
                                >
                                    Projects
                                </MenuItem>
                            </NextLink>

                            <MenuItem
                                as="a"
                                href="https://drive.google.com/file/d/149pa08OiH0RxjwTDCj-O_aMastwAOYKL/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                display="inline-flex"
                                alignItems="center"
                                gap={2}
                                px={3}
                                py={1.5}
                                mb={1}
                                borderRadius="md"
                                fontFamily="heading"
                                fontWeight="700"
                                fontSize={{ lg: "15px", md: "14px", sm: "13px" }}
                                color="gray.300"
                                bg="transparent"
                                transition="all 0.2s"
                                _hover={{
                                    bg: 'gray.700',
                                    color: 'white',
                                    textDecoration: 'none'
                                }}
                                _focus={{ bg: 'transparent', outline: 'none', boxShadow: 'none' }}
                                _focusVisible={{ boxShadow: '0 0 0 2px #333338' }}
                            >
                                Resume
                                <AiOutlineDownload />
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
