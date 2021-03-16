import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import dataWorks from '../json/works.json'

SwiperCore.use([Autoplay])

const Works = () => {
	return (
		<section className='pt-16'>
			<h2 className='pb-4 text-4xl text-center'>Trabajos</h2>
			<div className='px-12'>
				<div className='relative'>
					<Swiper autoplay spaceBetween={50}>
						{dataWorks.map(({ title, href, img, alt }) => {
							return (
								<SwiperSlide key={`slide-works-${title}`}>
									<div>
										<a target="_blank" href={href}>
											<div className='relative p-1 border rounded border-lightBlue-500'>
												<img className='rounded' src={img} alt={alt}/>
												<div className='absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full bg-black bg-opacity-75 rounded hover:bg-opacity-25'>
													<p className='px-2 text-2xl text-center text-blue-300 bg-black rounded bg-opacity-90'>{title}</p>
												</div>
											</div>
										</a>
									</div>
								</SwiperSlide>
							)
						})}
					</Swiper>
					<div className='absolute z-0 w-full h-full border rounded right-4 top-4 border-lightBlue-500' />
				</div>
			</div>
		</section>
	)
}

export default Works
