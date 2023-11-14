import Nav from "@/components/nav/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import taxi from "../assets/taxi.ico";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Taxi Driver Helper</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <Nav>
        <div className="pb-20 font-segoe">
          <Component {...pageProps} />
        </div>
      </Nav>
    </>
  );
}
