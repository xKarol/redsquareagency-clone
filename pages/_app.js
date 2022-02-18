import Head from "next/head";
import GlobalStyles from "../styles/globals.js";
import Theme from "../styles/theme.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Red Square — The agency for what comes next.</title>
      </Head>
      <Theme>
        <GlobalStyles />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;
