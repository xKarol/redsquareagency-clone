import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyles } from "./globals";

export const defaultTheme = {
  colors: {
    black: "#111111",
    white: "#fefefe",
    red: "#e31e3c",
    gray: "#858585",
    blue: "#00BFFF",
    yellow: "#fff44f",
  },
  fonts: {
    main: "'Circular Book', sans-serif",
    mainBold: "'Circular Bold', sans-serif",
    second: "'YoungSerif', sans-serif",
  },
};

export function ThemeProvider({ children }) {
  return (
    <StyledThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
}
