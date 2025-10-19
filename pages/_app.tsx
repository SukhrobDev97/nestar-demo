import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeOptions } from "@mui/material";
import { light } from "@/scss/MaterialTheme";
import { useState } from "react";
import "../scss/app.scss"

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(createTheme(light  as ThemeOptions));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
