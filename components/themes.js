/**
 * @file themes.js
 * @author Nicolas Christianto
 * @since 26/05/2022
 * @description Contains theme information for ChakraUI.
 */

import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: '200px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
}

const fonts = {
  heading: "'Space Grotesk', system-ui, sans-serif",
  body: "'Inter', system-ui, sans-serif",
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
    baseStyle: {
      fontFamily: "heading",
      fontWeight: "600",
      letterSpacing: "-0.03em",
      lineHeight: "1.2",
    },
    variants: {
      sectionTitle: {
        fontSize: { base: "md", md: "lg" },
        fontWeight: "700",
        textDecoration: "none",
        borderBottom: "1px solid",
        borderColor: "gray.300",
        pb: 1.5,
        mt: 10,
        mb: 3,
      },
      projectDate: {
        fontSize: 20,
        padding: 1,
        opacity: 0.75,
        background: "whiteAlpha.100",
      },
    },
  },
  Text: {
    baseStyle: {
      fontFamily: "body",
      lineHeight: "1.7",
    },
    variants: {
      indented: {
        textIndent: "2rem",
        textAlign: "justify",
      },
      year: {
        fontWeight: "600",
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
    baseStyle: {
      color: "gray.400",
      padding: "6px 10px",
      borderRadius: "md",
      transition: "color 0.15s ease, background 0.15s ease",
      _hover: {
        textDecoration: "none",
        background: "whiteAlpha.100",
        color: "gray.100",
      },
      _focus: {
        boxShadow: "none",
        outline: "none",
      },
      _focusVisible: {
        boxShadow: "none",
        outline: "2px solid",
        outlineColor: "gray.600",
        outlineOffset: "2px",
      },
    },
    variants: {
      logo: {
        display: "inline-block",
        p: 0,
        m: 0,
        borderRadius: 0,
        fontFamily: "heading",
        color: "white",
        bg: "transparent",
        lineHeight: "1",
        _hover: {
          color: "gray.400",
          bg: "transparent",
          textDecoration: "none",
        },
        _active: {
          bg: "transparent",
          color: "gray.300",
        },
        _focus: {
          boxShadow: "none",
          outline: "none",
          bg: "transparent",
        },
        _focusVisible: {
          boxShadow: "none",
          outline: "none",
          bg: "transparent",
        },
      },
      nav: {
        fontFamily: "body",
        color: "gray.500",
        fontWeight: "500",
        fontSize: "sm",
        letterSpacing: "-0.01em",
        _hover: {
          color: "gray.200",
          bg: "transparent",
          textDecoration: "none",
        },
      },
    },
  },
  Button: {
    baseStyle: {
      fontFamily: "body",
      fontWeight: "500",
      _focus: {
        outline: "none",
        boxShadow: "none",
      },
      _focusVisible: {
        outline: "none",
        boxShadow: "0 0 0 2px #333338",
      },
    },
    variants: {
      cta: {
        bg: "gray.200",
        color: "gray.900",
        _hover: {
          bg: "gray.300",
          color: "gray.900",
        },
        _active: {
          bg: "gray.400",
          color: "gray.900",
        },
      },
      ctaOutline: {
        bg: "transparent",
        color: "gray.200",
        border: "1px solid",
        borderColor: "gray.600",
        _hover: {
          bg: "gray.800",
          color: "white",
          borderColor: "gray.500",
        },
        _active: {
          bg: "gray.700",
          color: "white",
        },
      },
    },
  },
};

const styles = {
  global: () => ({
    "html, body": {
      scrollBehavior: "smooth",
    },
    body: {
      bg: "bg.dark",
      color: "gray.100",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
    "a:focus": {
      outline: "none",
    },
    "a:focus:not(:focus-visible)": {
      boxShadow: "none",
    },
    "a:focus-visible": {
      outline: "2px solid #333338",
      outlineOffset: "2px",
    },
  }),
};

const colors = {
  bg: {
    dark: "#0A0A0B",
  },
  gray: {
    900: "#161618",
    800: "#232326",
    700: "#333338",
    600: "#4A4A4F",
    500: "#71717A",
    400: "#A1A1AA",
    300: "#D4D4D8",
    200: "#E4E4E7",
    100: "#F4F4F5",
    50: "#FAFAFA",
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

const theme = extendTheme({ config, fonts, colors, components, styles, breakpoints });

export default theme;
