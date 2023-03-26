import type { AppProps } from "next/app";
import { SliderProvider } from "../context/slider/Context";
import localFont from "next/font/local";
import nextSeo from "../../next-seo-config";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";

import "../styles/globals.css";

const inconsolata = localFont({
  src: "../../public/fonts/inconsolata/Inconsolata-VariableFont.ttf",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inconsolata.className}>
      <DefaultSeo {...nextSeo} />
      <SliderProvider>
        <Component {...pageProps} />
      </SliderProvider>
    </div>
  );
}

export default appWithTranslation(MyApp);
