import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from "../components/Layout"
import Home from "../components/Home"
import Works from '../components/Works'

const Index = () => {
	return (
		<Layout title='Home'>
			<div className='container px-2 mx-auto text-white'>
				<Swiper direction='vertical'>
					<SwiperSlide>
						<Home/>
					</SwiperSlide>
					<SwiperSlide>
						<Works/>
					</SwiperSlide>
					<SwiperSlide>
						<section id='aboutMe' className='pt-6'>
							<h1>Sorbe mi</h1>
						</section>
					</SwiperSlide>
					<SwiperSlide>
						<section id='contact' className='pt-6'>
							<h1>Cotnacto</h1>
						</section>
					</SwiperSlide>
				</Swiper>
			</div>
		</Layout>
	)
}

export default Index
