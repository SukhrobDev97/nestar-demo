import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeOptions } from "@mui/material";
import { light } from "@/scss/MaterialTheme";
import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo/client";

import "../scss/app.scss"
import "../scss/pc/main.scss"
import "../scss/mobile/main.scss"

export default function App({ Component, pageProps }: AppProps) {
  //@ts-ignore
  const [theme, setTheme] = useState(createTheme(light  as ThemeOptions));

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </ApolloProvider>
    
  );
}
