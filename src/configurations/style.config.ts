
"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D9CE3D",
    },
    secondary: {
      main: "#59533F",
    },
    error: {
      main: "#b12b63",
    },
    warning: {
      main: "#8e5e00",
    },
    info: {
      main: "#006ec0",
    },
    success: {
      main: "#008127",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const styleConfig = {
  theme: theme,
};

export default styleConfig;
