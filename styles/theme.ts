import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    blueStreank: {
      "70": "#000058",
      "90": "#00002c",
    },
    purpleStreank: {
      "70": "#9c01f2",
    },
  },

  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.900",
      },
    },
  },
});
