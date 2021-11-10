import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import { useIsDesktop } from '../hooks/useIsDesktop'
import SpaceBgIMG from '../../public/spaceBg.jpg'

interface Props {
  children: React.ReactNode,
  title: string,
}

const Layout = ({ children, title }: Props) => {
  const [isDesktop] = useIsDesktop()
  return (
    <section className='relative min-h-screen bg-primary'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link href="/logo.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/logo.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#09173C" />
      </Head>
      <NextSeo
        title={title}
        description='Ariel Santiago Villarreal Gutierrez | Full-Stack Developer | React NextJS NodeJS Express MongoDB MySQL'
        canonical="https://www.arielvillarreal.mx/"
      />
      <Header/>
      {isDesktop && (
        <div className="absolute top-0 left-0 w-full h-full">
          <div className='relative w-full h-full'>
            <Image
              alt="space"
              src={SpaceBgIMG}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
              placeholder="blur"
            />
          </div>
        </div>
      )}
      <main>
        {children}
      </main>
      <Footer/>
    </section>
  )
}

export default Layout
