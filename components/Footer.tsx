import SvgEmail from "./svg/SvgEmail"
import SvgGithub from "./svg/SvgGithub"
import SvgPhone from "./svg/SvgPhone"

const Footer: React.FunctionComponent = () => {
	return (
		<footer className='hidden md:z-10 md:absolute md:bottom-0 md:left-0 md:block md:w-full md:py-4 md:border-t-2 md:border-lightBlue-500 md:bg-black md:bg-opacity-50'>
			<div className='flex items-center justify-center space-x-12'>
				<a href='mailto:arielvillagu@hotmail.com'  target="_blank">
					<SvgEmail className='object-contain h-16 text-white fill-current' />
				</a>
				<a href='tel:+5491121908368' target="_blank">
					<SvgPhone className='object-contain h-16 text-white fill-current' />
				</a>
				<a href='https://github.com/arielskap' target='_blank'>
					<SvgGithub className='object-contain h-16 text-white fill-current' />
				</a>
			</div>
		</footer>
	)
}

export default Footer
