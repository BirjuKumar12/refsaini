import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

// Example theme (optional)
const theme = {
  colors: {
    primary: "#007bff",
    background: "#f8f9fa",
  },
};

// ✅ A global decorator to wrap your React components
export const withAppProviders = (Story) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div style={{ background: theme.colors.background, padding: "20px" }}>
        <Story />
      </div>
    </BrowserRouter>
  </ThemeProvider>
);