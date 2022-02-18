import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="http://fonts.cdnfonts.com/css/circular-book"
          rel="stylesheet"
        />
        <link
          href="http://fonts.cdnfonts.com/css/youngserif"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
