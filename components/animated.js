/**
 * @file animated.js
 * @author Nicolas C
 * @since 26/05/2022
 * @description Animated some of components
 */

 import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/system";

const AnimatedDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition';
    }
});

const SlideIn = ({ children, delay, time, direction }) => {
    let ix = 0, fx = 0; // initial and finish coordinate
    if (direction === 'left') 
        ix = 10;
    else if (direction === 'right')
        ix = -10;
    
    return (
        <AnimatedDiv initial={{ x: ix, opacity: 0 }} animate={{ x: fx, opacity: 1 }} transition={{ duration: time, delay }}>
            {children}
        </AnimatedDiv>
    );
};

const Grow = ({ children, delay, time }) => {
    return (
        <AnimatedDiv initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1.0, opacity: 1 }}
            transition={{ duration: time, delay }}>
            {children}
        </AnimatedDiv>
    );
};

export { SlideIn, Grow };