import Nav from "@/components/nav/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Nav>
      <div className="pt-4 pb-20">
        <Component {...pageProps} />
      </div>
    </Nav>
  );
}
