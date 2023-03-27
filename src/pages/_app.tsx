import type { AppProps } from "next/app";
import { SliderProvider } from "../context/slider/Context";
import localFont from "next/font/local";
import nextSeo from "../../next-seo-config";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";

const inconsolata = localFont({
  src: "../../public/fonts/inconsolata/Inconsolata-VariableFont.ttf",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...nextSeo} />
      <SliderProvider>
        <div className={inconsolata.className}>
          <Component {...pageProps} />
        </div>
      </SliderProvider>
      <Analytics />
    </>
  );
}

export default appWithTranslation(MyApp);
