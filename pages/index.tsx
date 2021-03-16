import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from "../components/Layout"
import Home from "../components/Home"
import Works from '../components/Works'
import { useContext } from 'react'
import { Context } from '../SliderContext'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import { GetStaticProps } from 'next'
import { calcBirthday } from '../lib/functions'

interface Props {
	birthday: number
}

const Index: React.FC<Props> = ({ birthday }) => {
	let { setSwiper } = useContext(Context)

	return (
		<Layout title='Home'>
			<div className='container px-2 mx-auto text-white'>
				<Swiper direction='vertical' onInit={(thisSwiper) => { setSwiper && setSwiper(thisSwiper) }}>
					<SwiperSlide>
						<Home/>
					</SwiperSlide>
					<SwiperSlide>
						<Works/>
					</SwiperSlide>
					<SwiperSlide>
						<AboutMe birthday={birthday} />
					</SwiperSlide>
					<SwiperSlide>
						<Contact/>
					</SwiperSlide>
				</Swiper>
			</div>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
  const birthday = calcBirthday('03/09/1998')
  return { props: { birthday } }
}

export default Index
