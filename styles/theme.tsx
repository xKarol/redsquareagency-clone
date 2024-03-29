import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { GlobalStyles } from "./globals";

export type ThemeType = typeof defaultTheme;

export const defaultTheme = {
  colors: {
    black: "#111111",
    white: "#fefefe",
    red: "#e31e3c",
    gray: "#858585",
    dark: "#2E2E2E",
    blue: "#00BFFF",
    yellow: "#fff44f",
    placeholderColor: "#1c1c1c",
  },
  fonts: {
    main: "'Circular Book', sans-serif",
    mainBold: "'Circular Bold', sans-serif",
    second: "'YoungSerif', sans-serif",
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
}
