import { ThemeProvider } from "styled-components";

function Theme({ children }) {
  const theme = {
    colors: {
      black: "#111111",
      white: "#fefefe",
      red: "#e31e3c",
      gray: "#858585",
    },
    fonts: {
      main: "'Circular Book', sans-serif",
      mainBold: "'Circular Bold', sans-serif",
      second: "'YoungSerif', sans-serif",
    },
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
