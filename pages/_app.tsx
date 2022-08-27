import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AppContextProvider } from "../context";
import Header from "../components/header";
import Container from "../components/container";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import GlobalStyle from "../styles/globalStyle";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  let white;
  const router = useRouter();
  const whiteThemedPaths = ["/auth", "/items", "/items/[category]", "/items/[category]/[name]"];
  if (whiteThemedPaths.includes(router.pathname)) {
    white = true;
  }

  return (
    <AppContextProvider>
      <GlobalStyle />
      <Header white={white} />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </AppContextProvider>
  );
}

export default MyApp;
