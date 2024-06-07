import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#11223D",
    secondary: "#435d19",
    tertiary: "#550BC9",
    background: "#F9F9F9",
    textPrimary: "#2d2d2d",
    textSecondary: "#555",
    error: "#d32f2f",
    warning: "#ffa000",
    success: "#388e3c",
    info: "#1976d2",
  },
  grid: {
    small: {
      margin: 16,
      gutter: 16,
      columns: 6,
    },
    medium: {
      margin: 24,
      gutter: 20,
      columns: 12,
    },
    large: {
      margin: 32,
      gutter: 24,
      columns: 12,
      width: 1200,
    },
  },
  breakpoints: {
    medium: 768,
    large: 1200,
  },
};
