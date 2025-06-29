import SvgGithub from './svg/SvgGithub';
import WorkSwiper from './WorkSwiper';
import WorkTarget from './WorkTarget';
import { useEffect, useRef, useState } from 'react';
import { Transition, TransitionChild } from '@headlessui/react';
import { useSwiperSlide } from 'swiper/react';
import useTranslatedMarkdown from '../hooks/useTranslatedMarkdown';
import altaPreviaIMG from '../../public/altaPrevia.jpeg';
import utopicxIMG from '../../public/utopicx.png';
import ratabboyIMG from '../../public/ratabboy.png';

const getImage = (title: string) => {
  switch (title) {
    case 'ALTA PREVIA':
      return altaPreviaIMG;
    case 'UTOPICX':
      return utopicxIMG;
    case 'RATABBOY':
      return ratabboyIMG;
    default:
      return utopicxIMG;
  }
};

const getDelay = (i: number) => {
  switch (i) {
    case 0:
      return 'delay-0';
    case 1:
      return 'delay-500';
    case 2:
      return 'delay-1000';
  }
};

const Works = () => {
  const divWorksBody = useRef<HTMLDivElement>(null);
  const swiperSlide = useSwiperSlide();
  const [isView, setIsView] = useState(swiperSlide.isActive);
  const { getT, getTMarkdown, i18n } = useTranslatedMarkdown({
    nameSpace: 'common',
  });
  const initApps = (
    getT('projects.apps', { returnObjects: true }) as Array<any>
  ).map((app: any) => ({ ...app, img: getImage(app.title) }));
  const [apps, setApps] = useState(initApps);

  useEffect(() => {
    setApps(
      (getT('projects.apps', { returnObjects: true }) as Array<any>).map(
        (app: any) => ({ ...app, img: getImage(app.title) })
      )
    );
  }, [getT, i18n.language]);

  useEffect(() => {
    if (swiperSlide.isActive) {
      setIsView(true);
    }
  }, [swiperSlide.isActive]);

  return (
    <section
      id="works"
      className="flex h-screen items-center md:justify-center md:px-16 md:py-16"
    >
      <div className="flex w-full flex-col md:w-auto md:p-4">
        <div
          className="pb-4 text-center text-4xl md:hidden"
          dangerouslySetInnerHTML={{ __html: getTMarkdown('projects.title') }}
        />
        <div ref={divWorksBody} className="workTargets grow">
          <Transition
            as="div"
            className="hidden md:grid md:grid-cols-3 md:gap-x-1 md:px-12 lg:gap-x-12"
            show={isView}
          >
            {(apps as Array<any>).map((app: any, i: number) => {
              const delay = getDelay(i);
              return (
                <TransitionChild
                  as="div"
                  className="relative"
                  key={`swiper-desktop-work-${app.title}`}
                  enter={`transition-all ease-out duration-1000 ${delay}`}
                  enterFrom="opacity-0 -translate-y-32"
                  enterTo="opacity-100 translate-y-0"
                >
                  <WorkTarget {...app} />
                </TransitionChild>
              );
            })}
          </Transition>
          <div className="no-hidden-swiper-button block md:hidden">
            <WorkSwiper works={apps} />
          </div>
        </div>
        <div className="flex justify-center pt-8 md:hidden">
          <a
            rel="noopener noreferrer"
            href="https://github.com/arielskap"
            target="_blank"
          >
            <div className="flex items-center">
              <SvgGithub className="w-10 fill-current object-contain text-white" />
              <span className="ml-2">github.com/arielskap</span>
            </div>
          </a>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 768px) and (max-height: 600px) {
          .workTargets {
            column-gap: 14rem;
          }
        }
        @media (min-width: 768px) and (min-height: 601px) and (max-height: 700px) {
          .workTargets {
            column-gap: 10rem;
          }
        }
        @media (min-width: 768px) and (min-height: 701px) and (max-height: 800px) {
          .workTargets {
            column-gap: 6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Works;
