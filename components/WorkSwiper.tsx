import { useRef, useState, useEffect } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import { IWork } from '../interface/IWork';
import WorkTarjet from './WorkTarjet';

SwiperCore.use([Autoplay])

interface Props {
	works: IWork[]
}

const WorkSwiper: React.FC<Props> = ({ works }) => {
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
		<div ref={divSwiper} className='relative md:max-w-xs md:mx-auto'>
			<Swiper autoplay spaceBetween={50} onInit={(thisSwiper) => { setSwiper(thisSwiper) }}>
				{works.map((work) => {
					return (
						<SwiperSlide key={`slide-works-${work.title}`}>
							<div className='md:w-full md:max-w-xs'>
								<WorkTarjet {...work} />
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
			<div className='absolute z-0 w-full h-full border rounded right-4 top-4 border-lightBlue-500' />
		</div>
	)
}

export default WorkSwiper
