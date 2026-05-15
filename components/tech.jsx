/**
 * @file tech.js
 * @author Nicolas C
 * @since 26/05/2022
 * @description Allows easy addition of tech stacks.
 */

import { Badge } from "@chakra-ui/react";

const Expertise = ({ title, color }) => {
    return (
        <Badge
            px={3}
            py={1.5}
            fontSize={{ base: "12px", md: "13px", lg: "14px" }}
            fontFamily="mono"
            fontWeight="500"
            letterSpacing="0.02em"
            colorScheme={color}
            variant="outline"
            borderRadius="full"
            transition="all 0.2s"
            cursor="default"
            _hover={{
                transform: "translateY(-2px)",
                bg: `${color}.900`,
                color: `${color}.200`,
                borderColor: `${color}.500`,
            }}
        >
            {title}
        </Badge>
    );
};

export default Expertise;