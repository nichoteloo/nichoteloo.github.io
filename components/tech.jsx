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
            mx={1}
            my={1}
            fontSize={{ lg: "15px", md: "13px", sm: "13px" }}
            colorScheme={color}
        >
            {title}
        </Badge>
    );
};

export default Expertise;