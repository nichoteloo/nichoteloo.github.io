/**
 * @file expentry.js
 * @author Nicolas C
 * @since 26/05/2022
 * @description Allows easy addition of experience in the form of date - description.
 */

import { Text } from "@chakra-ui/layout";
import { Flex, Box, UnorderedList, ListItem } from "@chakra-ui/react";

const ExperienceEntry = ({ date, role, company, indent, client, mb, responsibilities }) => {
    return (
        <Box mb={mb}>
            <Flex direction="row" rounded="md" w={"full"} mt='2' my={{lg: 3, md: 0}}>
                <Text variant="year" w="24%" textAlign={{lg: "-moz-initial", md: "-moz-initial" }} fontSize={{ lg:"16px", md:"16px", sm:"14px" }}>
                    {date ? date : ''}
                </Text>
                
                <Text w="76%" textAlign="justify" fontSize={{ lg:"16px", md:"16px", sm:"15px" }}>
                    <b><i>{role ? role : ''}</i> {company ? company : ''}</b>
                    <Text mt={2} fontFamily="initial">
                        <Text mb={1}>
                            <b>{client ? client : ''}</b>
                        </Text>
                        <UnorderedList ml={indent}>
                            {responsibilities.map((i) => {
                                return (
                                    <ListItem key={i}>
                                        {i}
                                    </ListItem>
                                );
                            })}
                        </UnorderedList>
                    </Text>
                </Text>
            </Flex>
        </Box>
    );
}

export default ExperienceEntry;