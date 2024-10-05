import { ThemeProvider } from "@mui/material";
import "./App.css";

import Router from "./app/router/router";
import { themePalette } from "./app/palette/theme-palette";

function App() {
  return (
    <ThemeProvider theme={themePalette}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
