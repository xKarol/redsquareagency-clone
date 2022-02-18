import Head from "next/head";
import GlobalStyles from "../styles/globals.js";
import Theme from "../styles/theme.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="http://fonts.cdnfonts.com/css/circular-book"
          rel="stylesheet"
        />
        <link
          href="http://fonts.cdnfonts.com/css/youngserif"
          rel="stylesheet"
        />
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
