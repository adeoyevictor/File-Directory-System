import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppContextProvider } from "./context/AppContext";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily:
            "Euclid Circular A, system-ui, Avenir, Helvetica, Arial, sans-serif",
        }}
      >
        <Router>
          <App />
        </Router>
      </MantineProvider>
    </AppContextProvider>
  </React.StrictMode>
);
