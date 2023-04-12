import { useEffect, useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Works from "../components/Works";
import { useSlider } from "../context/slider/Context";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import { GetStaticProps, NextPage } from "next";
import { calcBirthday } from "../lib/functions";
import SvgArrowBottom from "../components/svg/SvgArrowBottom";
import { SliderActionKind } from "../context/slider/actions";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import "swiper/css";
import "swiper/css/navigation";

interface Props {
  birthday: number;
}

const Old: NextPage<Props> = ({ birthday }) => {
  const buttonArrowBottom = useRef<HTMLButtonElement>(null);
  const { state, dispatch } = useSlider();

  useEffect(() => {
    if (state.swiper) {
      state.swiper.on("slideChange", (swiperLocal) => {
        if (swiperLocal.currentBreakpoint !== 768) {
          const buttonArrow = buttonArrowBottom.current;
          if (buttonArrow) {
            if (swiperLocal.activeIndex === 0) {
              buttonArrow.classList.add("buttonArrowBottomAnimation");
            } else {
              buttonArrow.classList.remove("buttonArrowBottomAnimation");
            }
            if (swiperLocal.isEnd) {
              buttonArrow.classList.add("opacity-0");
            } else if (buttonArrow.classList.contains("opacity-0")) {
              buttonArrow.classList.remove("opacity-0");
            }
          }
        }
      });
    }
  }, [state.swiper]);

  return (
    <Layout>
      <section className="container relative mx-auto h-screen px-2 text-white">
        <Swiper
          modules={[Navigation]}
          direction="vertical"
          onInit={(thisSwiper) => {
            dispatch({
              type: SliderActionKind.SET_SWIPER,
              payload: { swiper: thisSwiper },
            });
          }}
          navigation
          grabCursor
          breakpoints={{
            768: {
              spaceBetween: 30,
              direction: "horizontal",
            },
          }}
        >
          <SwiperSlide>
            <Home />
          </SwiperSlide>
          <SwiperSlide>
            <Works />
          </SwiperSlide>
          <SwiperSlide>
            <AboutMe birthday={birthday} />
          </SwiperSlide>
          <SwiperSlide>
            <Contact />
          </SwiperSlide>
        </Swiper>
        <div className="fixed bottom-0 left-0 z-10 flex w-full justify-center md:hidden">
          <button
            aria-label="Change Slide"
            ref={buttonArrowBottom}
            className="buttonArrowBottomAnimation text-sky-500 transition-opacity"
            type="button"
            onClick={() => {
              state.swiper?.slideNext();
            }}
          >
            <SvgArrowBottom
              style={{ strokeWidth: 8 }}
              className="w-10 stroke-current object-contain"
            />
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
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const birthday = calcBirthday("03/09/1998");
  return {
    props: {
      birthday,
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};

export default Old;
