import { useRef, useState, useEffect } from "react";
import SwiperType, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import WorkTarget from "./WorkTarget";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { IWork } from "../../@types";

interface Props {
  works: Array<IWork>;
}

const WorkSwiper = ({ works }: Props) => {
  const divSwiper = useRef<HTMLDivElement>(null);
  const [swiper, setSwiper] = useState<SwiperType>();

  useEffect(() => {
    if (divSwiper.current && swiper) {
      const observer = new IntersectionObserver(
        (allElements) => {
          const isIntersecting = (element: IntersectionObserverEntry) => {
            return element.isIntersecting;
          };
          allElements.forEach((element) => {
            if (isIntersecting(element)) {
              swiper.autoplay?.start();
            } else {
              swiper.autoplay?.stop();
            }
          });
        },
        { threshold: 1 }
      );
      observer.observe(divSwiper.current);
    }
  }, [swiper]);

  return (
    <div ref={divSwiper} className="relative md:mx-auto md:max-w-xs">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        autoplay
        spaceBetween={50}
        onInit={(thisSwiper) => {
          setSwiper(thisSwiper);
        }}
      >
        {works.map((work) => {
          return (
            <SwiperSlide key={`slide-works-${work.title}`}>
              <div className="px-16 md:w-full md:max-w-xs">
                <WorkTarget {...work} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute right-2 top-2 z-0 h-full w-full px-16">
        <div className="h-full w-full rounded border border-sky-500" />
      </div>
    </div>
  );
};

export default WorkSwiper;
