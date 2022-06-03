/**
 * @file tech.js
 * @author Nicolas C
 * @since 26/05/2022
 * @description Allows easy addition of tech stacks.
 */

import { Badge } from "@chakra-ui/react";

const Tech = ({ title, color }) => {
    return (
        <Badge
            mx={1}
            my={1}
            fontSize={{ lg: "16px", md: "15px", sm: "13px" }}
            colorScheme={color}
        >
            {title}
        </Badge>
    );
};

export default Tech;