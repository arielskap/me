import type { AppProps } from 'next/app'
import { SliderProvider } from '../context/slider/Context'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <SliderProvider>
      <Component {...pageProps} />
    </SliderProvider>
  )
}

export default MyApp
