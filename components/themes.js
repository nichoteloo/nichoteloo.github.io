/**
 * @file themes.js
 * @author Nicolas Christianto
 * @since 26/05/2022
 * @description Contains theme information for ChakraUI.
 */

import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const fonts = {
  body: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const config = {
  initialColorMode: "dark",
  useColorModeValue: true,
};

const components = {
  Divider: {
    defaultProps: { size: "md" },
    sizes: {
      lg: { borderWidth: "4px" },
      md: { borderWidth: "2px" },
      sm: { borderWidth: "1px" },
    },
    colors: {
      w: "white",
      g: "gray.500"
    }
  },
  Heading: {
    variants: {
      sectionTitle: {
        fontSize: 24,
        textDecoration: "underline",
        textUnderlineOffset: 5,
        textDecorationThickness: 4,
        textDecorationColor: "gray.700",
        marginBottom: 5,
      },
      projectDate: {
        fontSize: 20,
        padding: 1,
        opacity: 0.75,
        background: "whiteAlpha.300",
      },
    },
  },
  Text: {
    variants: {
      indented: {
        textIndent: "2rem",
        textAlign: "justify",
      },
      year: {
        fontWeight: "bold",
      },
      projectLabel: {
        color: "red.200",
        background: "red.800",
        padding: 1,
        whiteSpace: "nowrap",
      },
    },
  },
  Link: {
    baseStyle: () => ({
      color: "gray.500", 
      padding: "4px",
      _hover: {
        textDecoration: "none",
        background: "whiteAlpha.200", 
        color: "gray.100" 
      },
    }),
  },
  Button: {
    baseStyle: {
      color: "black",
    },
  },
};

const styles = {
  global: () => ({
    body: {
      bg: "bg.dark",
    },
  }),
};

const colors = {
  bg: {
    dark: "#15181c",
  },
  gray: {
    900: "#15181c",
    800: "#35383c",
    700: "#53565b",
    600: "#666a6f",
    500: "#8e9297",
    400: "#aeb2b7",
    300: "#d2d6dc",
    200: "#e3e7ed",
    100: "#edf1f7",
    50: "#f5f9fe",
  },
  blue: {
    900: "#0e1f36",
    800: "#21324d",
    700: "#304463",
    600: "#405679",
    500: "#4e6389",
    400: "#66799d",
    300: "#7f8fb2",
    200: "#a0afcd",
    100: "#c0cfea",
    50: "#e5eaff",
  },
};

const theme = extendTheme({ config, fonts, colors, components, styles });

export default theme;