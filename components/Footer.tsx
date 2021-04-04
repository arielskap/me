import SvgEmail from "./svg/SvgEmail"
import SvgGithub from "./svg/SvgGithub"
import SvgLinkedin from "./svg/SvgLinkedin"
import SvgPhone from "./svg/SvgPhone"

const Footer: React.FunctionComponent = () => {
	return (
		<footer className='hidden md:z-20 md:absolute md:bottom-0 md:left-0 md:block md:w-full md:py-4 md:border-t-2 md:border-lightBlue-500 md:bg-black md:bg-opacity-50'>
			<div className='flex items-center justify-center space-x-12 '>
				<a aria-label="Email" rel="noopener" href='mailto:arielvillagu@hotmail.com'  target="_blank">
					<SvgEmail className='object-contain h-16 p-1 text-white border border-transparent rounded fill-current hover:border-lightBlue-500 hover:bg-black hover:bg-opacity-90' />
				</a>
				<a aria-label="Telphone" rel="noopener" href='tel:+5491121908368' target="_blank">
					<SvgPhone className='object-contain h-16 p-1 text-white border border-transparent rounded fill-current hover:border-lightBlue-500 hover:bg-black hover:bg-opacity-90' />
				</a>
				<a aria-label="Linkedin" rel="noopener" href='https://www.linkedin.com/in/ariel-villarreal' target='_blank'>
					<SvgLinkedin className='object-contain h-16 p-1 text-white border border-transparent rounded fill-current hover:border-lightBlue-500 hover:bg-black hover:bg-opacity-90' />
				</a>
				<a aria-label="Github" rel="noopener" href='https://github.com/arielskap' target='_blank'>
					<SvgGithub className='object-contain h-16 p-1 text-white border border-transparent rounded fill-current hover:border-lightBlue-500 hover:bg-black hover:bg-opacity-90' />
				</a>
			</div>
		</footer>
	)
}

export default Footer
