import type { AppProps } from 'next/app'
import SliderContext from '../SliderContext'
import '../styles/globals.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SliderContext.Provider>
      <Component {...pageProps} />
    </SliderContext.Provider>
  )
}

export default MyApp