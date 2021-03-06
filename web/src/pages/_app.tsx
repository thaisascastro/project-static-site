import "../styles/login.styles.css";
import "../styles/footer.styles.css";
import "../styles/header.styles.css";
import "../styles/search.styles.css";
import "../styles/carousel.styles.css";
import "../styles/register.styles.css";
import "../styles/revison.styles.css";
import "../styles/headerSchool.styles.css";

import "antd/dist/antd.css";

import "react-multi-carousel/lib/styles.css";

import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
