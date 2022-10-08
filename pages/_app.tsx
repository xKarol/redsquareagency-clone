import Head from "next/head";
import AppContext from "../context/app-context";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "../styles/theme.js";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const handleRouteChange = () => setFirstLoad(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Red Square — The agency for what comes next.</title>
        <meta name="theme-color" content="#111111" />
      </Head>
      <ThemeProvider>
        <AppContext.Provider value={{ firstLoad }}>
          {/*@ts-ignore */}
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;