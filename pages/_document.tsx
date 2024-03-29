import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@250;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
