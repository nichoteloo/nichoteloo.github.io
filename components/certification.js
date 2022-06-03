/**
 * @file certification.js
 * @author Nicolas C
 * @since 26/05/2022
 * @description Allows easy addition of certification.
 */

import { Text } from "@chakra-ui/layout";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { HStack, Box } from "@chakra-ui/react";

const CertificationEntry = ({ title, issuer }) => {
    return (
        <HStack m={1}>
            <Box p={1} position="relative" >
                <AiFillSafetyCertificate/>
            </Box>
            <Box>
                <Text fontSize={{ lg:"16px", md:"16px", sm:"15px" }} mb={1}>{title} issued by <b>{issuer}</b></Text>
            </Box>
        </HStack>
    );
};

export default CertificationEntry;