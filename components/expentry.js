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
            <Flex direction="row" rounded="md" w={"full"} mt='2' my={{base: 3, md: 0}}>
                <Text variant="year" w="24%" textAlign={{base: "-moz-initial", md: "-moz-initial" }}>
                    {date ? date : ''}
                </Text>
                
                <Text w="76%" textAlign="justify">
                    <b><i>{role ? role : ''}</i> {company ? company : ''}</b>
                    <Text fontSize={16} mt={2} fontFamily="initial">
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