import { createTheme, Theme } from "@mui/material/styles";

export const themePalette: Theme = createTheme({
  typography: {
    fontFamily: ["Rubik", "Roboto", "sans-serif"].join(","),
  },
  palette: {
    background: {
      default: "#ededed",
      paper: "#FEFDFD",
    },
    primary: {
      main: "#100B08",
    },
    secondary: {
      main: "#f8f8f8",
    },
    info: { main: "#ffff" },
  },
  spacing: 4,
});
