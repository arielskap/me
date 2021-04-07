import { useContext, useEffect, useRef } from 'react'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from "../components/Layout"
import Home from "../components/Home"
import Works from '../components/Works'
import { Context } from '../SliderContext'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import { GetStaticProps } from 'next'
import { calcBirthday } from '../lib/functions'
import { useIsDesktop } from '../hooks/useIsDesktop'
import SvgArrowBottom from '../components/svg/SvgArrowBottom';

interface Props {
	birthday: number
}

SwiperCore.use([Navigation]);

const Index: React.FC<Props> = ({ birthday }) => {
	const buttonArrowBottom = useRef<HTMLButtonElement>(null)
	let { swiper, setSwiper } = useContext(Context)
	const [isDesktop] = useIsDesktop()

	useEffect(() => {
		if (swiper && isDesktop === false) {
			swiper.on("slideChange", (swiperLocal) => {
				if (swiperLocal.activeIndex === 0) {
					buttonArrowBottom.current?.classList.add("buttonArrowBottomAnimation")
				} else {
					buttonArrowBottom.current?.classList.remove("buttonArrowBottomAnimation")
				}
				if (swiperLocal.isEnd) {
					buttonArrowBottom.current?.classList.add("opacity-0")
				} else if(buttonArrowBottom.current?.classList.contains("opacity-0")) {
					buttonArrowBottom.current?.classList.remove("opacity-0")
				}
			})
		}
	}, [swiper, isDesktop])

	return (
		<Layout title='Home'>
			<div className='container relative px-2 mx-auto text-white'>
				<Swiper
					navigation
					spaceBetween={isDesktop ? 30 : isDesktop === false ? 0 : undefined}
					direction={isDesktop ? 'horizontal': isDesktop === false ? 'vertical' : undefined}
					onInit={(thisSwiper) => { setSwiper && setSwiper(thisSwiper) }}
				>
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
				<div className="fixed bottom-0 left-0 z-10 flex justify-center w-full md:hidden">
					<button aria-label="Change Slide" ref={buttonArrowBottom} className="transition-opacity buttonArrowBottomAnimation text-lightBlue-500" type="button" onClick={() => { swiper?.slideNext(); }}>
						<SvgArrowBottom style={{strokeWidth: 8}} className="object-contain w-10 stroke-current" />
					</button>
				</div>
			</div>
			<style jsx>{`
				.buttonArrowBottomAnimation {
					animation: translateY 1.5s linear infinite;
				}
				@keyframes translateY {
					0% {
						transform: translateY(-1rem);
					}
					100% {
						transform: translateY(0rem);
					}
				}
			`}</style>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
  const birthday = calcBirthday('03/09/1998')
  return { props: { birthday } }
}

export default Index
