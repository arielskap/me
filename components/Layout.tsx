import { NextSeo } from 'next-seo'
import Header from "./Header"
import Footer from "./Footer"

interface Props {
	children: React.ReactNode,
	title: string,
}

const Layout: React.FunctionComponent<Props> = ({ children, title }) => {
	return (
		<section className='min-h-screen bg-primary'>
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
		</section>
	)
}

export default Layout
