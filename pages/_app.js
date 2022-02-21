import Head from "next/head";
import GlobalStyles from "../styles/globals.js";
import Theme from "../styles/theme.js";
import AppContext from "../context/app-context";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [firstLoad, setFirstLoad] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setFirstLoad(false);
    router.events.on("routeChangeStart", handleRouteChange);

    router.beforePopState(() => {
      return true;
    });

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Red Square — The agency for what comes next.</title>
      </Head>
      <Theme>
        <GlobalStyles />
        <AppContext.Provider value={{ firstLoad }}>
          <Component {...pageProps} />
        </AppContext.Provider>
      </Theme>
    </>
  );
}

export default MyApp;
