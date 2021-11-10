import { useEffect, useRef } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from '../components/Layout'
import Home from '../components/Home'
import Works from '../components/Works'
import { useSlider } from '../context/slider/Context'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import { GetStaticProps } from 'next'
import { calcBirthday } from '../lib/functions'
import { useIsDesktop } from '../hooks/useIsDesktop'
import SvgArrowBottom from '../components/svg/SvgArrowBottom'
import { SliderActionKind } from '../context/slider/actions'
import 'swiper/css'
import 'swiper/css/navigation'

interface Props {
  birthday: number
}

const Index = ({ birthday }: Props) => {
  const buttonArrowBottom = useRef<HTMLButtonElement>(null)
  const { state, dispatch } = useSlider()
  const [isDesktop] = useIsDesktop()

  useEffect(() => {
    if (state.swiper && isDesktop === false) {
      state.swiper.on('slideChange', (swiperLocal) => {
        const buttonArrow = buttonArrowBottom.current
        if (buttonArrow) {
          if (swiperLocal.activeIndex === 0) {
            buttonArrow.classList.add('buttonArrowBottomAnimation')
          } else {
            buttonArrow.classList.remove('buttonArrowBottomAnimation')
          }
          if (swiperLocal.isEnd) {
            buttonArrow.classList.add('opacity-0')
          } else if (buttonArrow.classList.contains('opacity-0')) {
            buttonArrow.classList.remove('opacity-0')
          }
        }
      })
    }
  }, [state.swiper, isDesktop])

  return (
    <Layout title='Home'>
      <section className='container relative h-screen px-2 mx-auto text-white'>
        <Swiper
          modules={[Navigation]}
          navigation={!!isDesktop}
          spaceBetween={isDesktop ? 30 : isDesktop === false ? 0 : undefined}
          direction={isDesktop ? 'horizontal' : isDesktop === false ? 'vertical' : undefined}
          onInit={(thisSwiper) => { dispatch({ type: SliderActionKind.SET_SWIPER, payload: { swiper: thisSwiper } }) }}
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
          <button aria-label="Change Slide" ref={buttonArrowBottom} className="transition-opacity buttonArrowBottomAnimation text-sky-500" type="button" onClick={() => { state.swiper?.slideNext() }}>
            <SvgArrowBottom style={{ strokeWidth: 8 }} className="object-contain w-10 stroke-current" />
          </button>
        </div>
      </section>
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
