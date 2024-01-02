import Nav from "@/components/nav/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import taxi from "../assets/taxi.ico";
import { ThemeProvider, createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: { main: "#FCCB06" },
    secondary: { main: "#000000" },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Taxi Rental Helper</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Nav>
          <div className="pb-20 font-segoe">
            <Component {...pageProps} />
          </div>
        </Nav>
      </ThemeProvider>
    </>
  );
}
