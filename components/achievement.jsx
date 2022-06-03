/**
 * @file achievement.js
 * @author Nicolas C
 * @since 26/05/2022
 * @description Allows easy addition of achievement.
 */

import { Text } from "@chakra-ui/layout";
import { GiAchievement } from "react-icons/gi";
import { Flex, Heading, Box } from "@chakra-ui/react";

const AchievementEntry = ({ title, issuer }) => {
    return (
        <Flex justifyContent="center" alignItems="start" align="start" py={3} px={3} bgColor="gray.700" flexDir={{ lg:"row", md:"row", sm:"column" }}>
            <Box w="10%" alignContent="start">
                <GiAchievement size={31}/>
            </Box>

            <Flex w="90%" rounded="md" justifyContent="space-between" flexDirection="column" alignItems={{ lg:"start", md:"start", sm:"start" }} mt={{ lg:"0px", md:"0px", sm:"5px" }} ml={{ lg:"0px", md:"0px", sm:"6px" }}>
                <Heading fontSize="16" fontFamily="Work Sans, sans-serif">
                    {title}
                </Heading>
                <Text fontSize={14} fontFamily="cursive" mt={1}>
                    {issuer}
                </Text>
            </Flex>
        </Flex>
    );
};

export default AchievementEntry