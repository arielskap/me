import Image from 'next/image'
import SvgEmail from './svg/SvgEmail'
import SvgPhone from './svg/SvgPhone'
import colors from 'tailwindcss/colors'

const Contact = () => {
	return (
		<section id="contact" className="pt-16 md:pt-0 md:h-screen md:flex md:items-center md:justify-center">
			<div className='md:p-4 md:border md:border-lightBlue-500 md:shadow-2xl md:bg-primary md:bg-opacity-90 md:rounded-md md:max-w-md md:w-full'>
				<h2 className='pb-4 text-4xl text-center md:hidden'>Contacto</h2>
				<div className='w-1/2 pb-4 mx-auto md:w-full md:pb-12'>
					<div className='relative w-full h-36 md:h-52'>
						<Image
							src="/me.jpg" alt="Ariel Villarreal mirando al horizonte"
							layout="fill"
							objectFit="cover"
							objectPosition="right"
							className='rounded-full md:rounded-md'
							priority={true}
						/>
						<div id='img-border' className='absolute top-0 left-0 w-full h-full rounded-full' />
					</div>
				</div>
				<div className='space-y-4'>
					<div>
						<a href='mailto:arielvillagu@hotmail.com'  target="_blank">
							<div className='flex items-center px-2 py-1 border border-lightBlue-800 hover:border-lightBlue-500 hover:bg-black hover:bg-opacity-90'>
								<SvgEmail className='object-contain w-10 fill-current text-lightBlue-500' />
								<span className='ml-2'>arielvillagu@hotmail.com</span>
							</div>
						</a>
					</div>
					<div>
						<a href='tel:+5491121908368' target="_blank">
							<div className='flex items-center px-2 py-1 border border-lightBlue-800 hover:border-lightBlue-500 hover:bg-black hover:bg-opacity-90'>
								<SvgPhone className='object-contain w-10 fill-current text-lightBlue-500' />
								<span className='ml-2'>+5491121908368</span>
							</div>
						</a>
					</div>
				</div>
				<div className='flex justify-center pt-8'>
					<div className='relative flex'>
						<a className='z-10 w-full h-full' href='/Ariel Villarreal Curriculum.pdf' target='blank'>
							<div className='px-4 py-2 border rounded border-lightBlue-500 md:border-lightBlue-800 hover:border-lightBlue-500 hover:bg-black hover:bg-opacity-90'>
								<span>Obtener CV</span>
							</div>
						</a>
						<div className='absolute w-full h-full border-b border-l rounded border-lightBlue-500 md:border-lightBlue-800 right-1 top-1' />
					</div>
				</div>
			</div>
			<style jsx>{`
				#img-border {
					border-right: 1px solid ${colors.lightBlue[500]};
					border-bottom: 1px solid ${colors.lightBlue[500]};
					border-left: 1px solid ${colors.pink[500]};
					border-top: 1px solid ${colors.pink[500]};
				}
				@media (min-width: 768px) {
					#img-border {
						border-style: none;
					}
				}
			`}</style>
		</section>
	)
}

export default Contact
