
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
      main: "#BF27D9",
    },
    warning: {
      main: "#D9AC32",
    },
    info: {
      main: "#5271D9",
    },
    success: {
      main: "#95D948",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const styleConfig = {
  theme: theme,
};

export default styleConfig;
