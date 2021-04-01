import { NextSeo } from 'next-seo'
import Header from "./Header"
import Footer from "./Footer"
import Head from "next/head"

interface Props {
	children: React.ReactNode,
	title: string,
}

const Layout: React.FunctionComponent<Props> = ({ children, title }) => {
	return (
		<section className='min-h-screen bg-primary bg-app'>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link href="/logoweb.png" rel="shortcut icon" />
				<link href="/logoweb.png" rel="icon" type="image/png" sizes="16x16" />
				<link href="/logoweb.png" rel="icon" type="image/png" sizes="32x32" />
				<link rel="apple-touch-icon" href="/logoweb.png" />
				<meta name="theme-color" content="#000000" />
			</Head>
			<NextSeo
				title={title}
				description='Ariel Santiago Villarreal Gutierrez | Full-Stack Developer | React NextJS NodeJS Express MongoDB MySQL'
				canonical="https://www.arielvillarreal.com"
			/>
			<Header/>
			<main>
				{children}
			</main>
			<Footer/>
			<style jsx>{`
				@media (min-width: 768px) {
					.bg-app {
						background-image: url("/space2.jpg");
						background-repeat: no-repeat;
						background-position: center;
						background-size: cover;
					}
				}
			`}</style>
		</section>
	)
}

export default Layout
