/**
 * @file education.js
 * @author Nicolas C
 * @since 26/05/2022
 * @description Allows easy addition of education in the form of date - description.
 */

import { Text } from "@chakra-ui/layout";
import { Flex, Box } from "@chakra-ui/react";
 
const EducationEntry = ({ date, expertise, title }) => {
    return (
        <Box mb={8}>
            <Flex direction="row" rounded="md" w={"full"} mt='2' my={{lg: 3, md: 0}}>
                <Text variant="year" w="24%" textAlign={{lg: "-moz-initial", md: "-moz-initial" }} fontSize={{ lg:"16px", md:"16px", sm:"14px" }}>
                    {date}
                </Text>
                
                <Text w="76%" textAlign="justify" fontSize={{ lg:"16px", md:"16px", sm:"15px" }}>
                    {expertise}
                    <Text mt={2} fontFamily="initial">
                        Thesis title: <i>{title}</i>
                    </Text>
                </Text>
            </Flex>
        </Box>
    );
}
 
export default EducationEntry;