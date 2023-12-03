import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "styled-components";
import { light_theme } from "./theme/theme";
import "./main.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProvider theme={light_theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
);
