import { useIsDesktop } from '../hooks/useIsDesktop'
import SvgGithub from './svg/SvgGithub'
import WorkSwiper from './WorkSwiper'
import dataWorks from '../json/works.json'
import WorkTarjet from './WorkTarjet'
import { useEffect, useRef } from 'react'
import { generateObserver } from '../lib/functions'

const Works = () => {
  const divWorksBody = useRef<HTMLDivElement>(null)
  const [isDesktop] = useIsDesktop()

  useEffect(() => {
    if (isDesktop && divWorksBody.current) {
      generateObserver((e) => {
        const firstChild: HTMLDivElement = e.firstChild as HTMLDivElement

        firstChild.classList.add('translateY')
        firstChild.classList.replace('opacity-0', 'opacity-100')
        e.childNodes.forEach((child, i) => {
          if (i !== 0) {
            ;
            e.childNodes[i - 1].addEventListener('animationend', () => {
              (child as HTMLDivElement).classList.add('translateY');
              (child as HTMLDivElement).classList.replace('opacity-0', 'opacity-100')
            }, { once: true })
          }
        })
      }, { threshold: 1 }).observe(divWorksBody.current)
    }
  }, [isDesktop])

  return (
    <section id="works" className="pt-16 md:py-16 md:h-screen md:flex md:items-center md:justify-center md:px-16">
      <div className='flex flex-col md:p-4'>
        <h2 className='pb-4 text-4xl text-center md:hidden'>Trabajos</h2>
        <div ref={divWorksBody} className='flex-grow workTarjets md:px-12 md:grid md:grid-cols-3 md:gap-x-12'>
          {isDesktop
            ? dataWorks.map((work) => {
              return (
                <div className='relative opacity-0' key={`swiper-desktop-work-${work.title}`}>
                  <WorkTarjet {...work} />
                </div>
              )
            })
            : isDesktop === false && <WorkSwiper works={dataWorks} />}
        </div>
        <div className='flex justify-center pt-8 md:hidden'>
          <a rel="noopener noreferrer" href='https://github.com/arielskap' target='_blank'>
            <div className='flex items-center'>
              <SvgGithub className='object-contain w-10 text-white fill-current' />
            <span className='ml-2'>github.com/arielskap</span>
            </div>
          </a>
        </div>
      </div>
      <style jsx>{`
        .translateY {
          animation: translateY 0.5s ease-out;
        }
        @keyframes translateY {
          0% {
            transform: translateY(-8rem);
            opacity: 0%;
          }
          100% {
            transform: translateY(0rem);
            opacity: 100%;
          }
        }
        @media (min-width: 768px) and (max-height: 600px) {
          .workTarjets {
            column-gap: 14rem;
          }
        }
        @media (min-width: 768px) and (min-height: 601px) and (max-height: 700px) {
          .workTarjets {
            column-gap: 10rem;
          }
        }
        @media (min-width: 768px) and (min-height: 701px) and (max-height: 800px) {
          .workTarjets {
            column-gap: 6rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Works
