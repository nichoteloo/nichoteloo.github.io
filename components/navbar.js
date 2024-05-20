/**
 * @file navbar.js
 * @author Nicolas C
 * @since 26/05/2022
 * @description Navigation bar at the top of the page, links for full size.
 */

import NextLink from 'next/link';
import { useState } from 'react';
import { IconButton } from '@chakra-ui/button';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import {Box, Container, Flex, Heading, Link, Stack, Spacer, Text} from '@chakra-ui/layout';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Box position='fixed' 
             as='nav' 
             w='100%' 
             zIndex={999} 
             transition='background 1s ease' 
             backdropFilter='blur(20px)'
             >
            <Container maxW='container.md' display='flex' alignItems='center' justifyContent={{ base: 'space-between', md: 'space-evenly' }} p={3}>
                <Flex ml={1.5}>
                    <Heading as='h1' size='lg' whiteSpace='nowrap'>
                        <NextLink href='/' passHref>
                            <Link p={0} color='white' variant="logo">
                                <Text fontFamily="monospace">TeloTech</Text>
                            </Link>
                        </NextLink>
                    </Heading>
                </Flex>

                <Spacer />
                    
                <Stack display={{ base: 'none', md: 'flex' }} mb={1} direction='row' justify='flex-start' align='center'>
                    <NextLink href='/projects' passHref>
                        <Link color='white' fontFamily="inherit">Projects</Link>
                    </NextLink>
                </Stack>

                <Box>
                    <Box display={{ base: 'inline-block', md: 'none' }} ml={3}>
                        <Menu id="navbar-dropdown" isLazy onOpen={() => setMenuOpen(true)} onClose={() => setMenuOpen(false)}>
                            <MenuButton 
                                as={IconButton} 
                                icon={menuOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} 
                                aria-label='menu'/>
                            <MenuList color='white' fontFamily="body" w="1xl" bgColor='gray.900'>
                                <NextLink href="/projects" passHref>
                                    <MenuItem color="white" _focus={ { bg: "charcoal.50" } }>Projects</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
