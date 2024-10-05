import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { ThemeProvider } from "@mui/material/styles";

import { themePalette } from "./app/palette/theme-palette";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/registration",
    element: <div>registration</div>,
  },
  {
    path: "/authentification",
    element: <div>authentification</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={themePalette}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
