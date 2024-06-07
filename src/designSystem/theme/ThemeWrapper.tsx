"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "@/designSystem/theme";
import { ReactNode } from "react";
import GlobalStyle from "./GlobalStyle";

export default function ThemeWrapper(props: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  );
}
