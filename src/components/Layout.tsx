import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import SpaceBgIMG from '../../public/spaceBg.jpg';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <section className="relative min-h-screen bg-primary">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link href="/logo.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/logo.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#09173C" />
      </Head>
      <NextSeo
        description="Ariel Santiago Villarreal Gutierrez | Full-Stack Developer | React NextJS NodeJS Express MongoDB MySQL"
        canonical="https://www.arielvillarreal.mx/"
      />
      <Header />
      <div className="absolute top-0 left-0 hidden h-full w-full md:block">
        <div className="relative h-full w-full">
          <Image
            className="h-full w-full object-cover"
            alt="space"
            src={SpaceBgIMG}
            priority
            placeholder="blur"
          />
        </div>
      </div>
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
