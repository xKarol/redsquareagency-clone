import Head from "next/head";
import GlobalStyles from "../styles/globals.js";
import Theme from "../styles/theme.js";
import AppContext from "../context/app-context";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
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
      <Theme>
        <GlobalStyles />
        <AppContext.Provider value={{ firstLoad }}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </AppContext.Provider>
      </Theme>
    </>
  );
}

export default MyApp;
