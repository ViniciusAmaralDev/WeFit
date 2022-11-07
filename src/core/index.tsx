import React from "react";
import Router from "./router";
import theme from "@shared/theme";
import HookProvider from "./hooks";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [loadedFonts] = useFonts({
    "Montserrat-Regular": require("@assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("@assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Bold": require("@assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loadedFonts) return <></>;

  return (
    <ThemeProvider theme={theme}>
      <HookProvider>
        <Router />
      </HookProvider>
    </ThemeProvider>
  );
}
