/**
 * @file expentry.js
 * @author Nicolas C
 * @since 26/05/2022
 * @description Allows easy addition of experience in the form of date - description.
 */

import { Text } from "@chakra-ui/layout";
import { Flex, Box, UnorderedList, ListItem } from "@chakra-ui/react";

const ExperienceEntry = ({
    date,
    role,
    company,
    indent,
    client,
    mb,
    responsibilities,
    status
}) => {
    return (
        <Box mb={mb || 6}>
            <Flex
                direction={{ base: "column", sm: "row" }}
                gap={{ base: 3, sm: 6 }}
                rounded="md"
                w="full"
                mt={2}
                py={3}
                _hover={{ bg: "whiteAlpha.50", transition: "all 0.2s" }}
            >
                <Text
                    variant="year"
                    w={{ base: "full", sm: "22%" }}
                    fontSize={{ base: "13px", md: "14px" }}
                    fontWeight="500"
                    fontFamily="mono"
                    color="gray.400"
                    letterSpacing="0.02em"
                >
                    {date || "—"}
                </Text>

                <Box w={{ base: "full", sm: "78%" }}>
                    <Text fontSize={{ base: "14px", md: "15px" }} fontWeight="bold" color="gray.100">
                        {role || "Untitled Role"} @ {company || "Unknown Company"}
                        <Text
                            as="span"
                            display="inline"
                            fontSize="11px"
                            fontWeight="normal"
                            fontStyle="italic"
                            ml={2}
                            color="gray.500"
                        >
                            — {status || "ongoing"}
                        </Text>
                    </Text>

                    {client && (
                        <Text mt={2} fontWeight="semibold" fontSize="13px" color="gray.300" fontFamily="mono">
                            {client}
                        </Text>
                    )}

                    <UnorderedList ml={indent || 4} mt={2} spacing={1.5}>
                        {responsibilities.map((item, idx) => (
                            <ListItem
                                key={idx}
                                fontSize={{ base: "13px", md: "14px" }}
                                color="gray.300"
                                lineHeight="6"
                            >
                                {item}
                            </ListItem>
                        ))}
                    </UnorderedList>
                </Box>
            </Flex>
        </Box>
    );
};

export default ExperienceEntry;