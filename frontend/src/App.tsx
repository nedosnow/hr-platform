import "./App.css";

import Router from "./app/router/router";
import { themePalette } from "./app/palette/theme-palette";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <ThemeProvider theme={themePalette}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
