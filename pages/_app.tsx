import type { AppProps } from 'next/app'
import { SwiperProvider } from '../SliderContext'
import '../styles/globals.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SwiperProvider>
      <Component {...pageProps} />
    </SwiperProvider>
  )
}

export default MyApp