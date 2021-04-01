import { useIsDesktop } from '../hooks/useIsDesktop';
import SvgGithub from './svg/SvgGithub';
import WorkSwiper from './WorkSwiper';
import dataWorks from '../json/works.json'
import WorkTarjet from './WorkTarjet';

const Works = () => {
	const [isDesktop] = useIsDesktop()

	return (
		<section id="works" className="pt-16 md:pt-0 md:h-screen md:flex md:items-center md:justify-center">
			<div className='flex flex-col p-4'>
				<h2 className='pb-4 text-4xl text-center md:hidden'>Trabajos</h2>
				<div className='flex-grow px-12 md:grid md:grid-cols-4 md:gap-x-12'>
					{isDesktop ?
						dataWorks.map((work) => {
							return (
								<div className='relative' key={`swiper-desktop-work-${work.title}`}>
									<WorkTarjet {...work} />
								</div>
							)
						})
					: <WorkSwiper works={dataWorks} />}
				</div>
				<div className='flex justify-center pt-8 md:hidden'>
					<a href='https://github.com/arielskap' target='_blank'>
						<div className='flex items-center'>
							<SvgGithub className='object-contain w-10 text-white fill-current' />
						<span className='ml-2'>github.com/arielskap</span>
						</div>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Works
