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
        <HStack>
            <Box p={1.5} position="relative" overflow="hidden">
                <AiFillSafetyCertificate/>
            </Box>
            <Box>
                <Text ml={1}>{title} issued by <b>{issuer}</b></Text>
            </Box>
        </HStack>
    );
};

export default CertificationEntry;