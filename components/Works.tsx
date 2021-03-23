import { useEffect, useRef, useState } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import dataWorks from '../json/works.json'
import SvgGithub from './svg/SvgGithub';

SwiperCore.use([Autoplay])

const Works = () => {
	const divSwiper = useRef<HTMLDivElement>(null)
	const [swiper, setSwiper] = useState<SwiperCore>()

	useEffect(() => {
		if (divSwiper.current && swiper) {
			const observer = new IntersectionObserver( ( allElements ) => {
				const isIntersecting = ( element: IntersectionObserverEntry ) => {
					return element.isIntersecting
				}
				allElements
					.forEach( ( element ) => {
						if (isIntersecting(element)) {
							swiper.autoplay.start()
						} else {
							swiper.autoplay.stop()
						}
					} )
			}, { threshold: 1 } )
			observer.observe(divSwiper.current)
		}
	}, [swiper])

	return (
		<section className='flex flex-col pt-16'>
			<h2 className='pb-4 text-4xl text-center'>Trabajos</h2>
			<div className='flex-grow px-12'>
				<div ref={divSwiper} className='relative'>
					<Swiper autoplay spaceBetween={50} onInit={(thisSwiper) => { setSwiper(thisSwiper) }}>
						{dataWorks.map(({ title, href, img, alt }) => {
							return (
								<SwiperSlide key={`slide-works-${title}`}>
									<div>
										<a target="_blank" href={href}>
											<div className='relative p-1 border rounded border-lightBlue-500'>
												<img className='object-contain rounded' src={img} alt={alt}/>
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
			<div className='flex justify-center pt-8'>
				<a href='https://github.com/arielskap' target='_blank'>
					<div className='flex items-center'>
						<SvgGithub className='object-contain w-10 text-white fill-current' />
					<span className='ml-2'>github.com/arielskap</span>
					</div>
				</a>
			</div>
		</section>
	)
}

export default Works
