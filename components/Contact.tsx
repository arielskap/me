import Image from 'next/image'
import SvgEmail from './svg/SvgEmail'
import SvgPhone from './svg/SvgPhone'

const Contact = () => {
	return (
		<section className='pt-16'>
			<h2 className='pb-4 text-4xl text-center'>Contacto</h2>
			<div className='w-1/2 pb-4 mx-auto'>
				<div className='relative w-full' style={{ height: '150px' }}>
					<Image
						src="/me.jpg" alt="Ariel Villarreal mirando al horizonte"
						layout="fill"
						objectFit="cover"
						objectPosition="right"
						className='rounded-full'
						/>
						<div className='absolute top-0 left-0 w-full h-full border rounded-full border-lightBlue-500' />
				</div>
			</div>
			<div className='space-y-4'>
				<div>
					<a href='mailto:arielvillagu@hotmail.com'  target="_blank">
						<div className='flex items-center'>
							<SvgEmail className='object-contain w-10 fill-current text-lightBlue-500' />
							<span className='ml-2'>arielvillagu@hotmail.com</span>
						</div>
					</a>
				</div>
				<div>
					<a href='tel:+5491121908368' target="_blank">
						<div className='flex items-center'>
							<SvgPhone className='object-contain w-10 fill-current text-lightBlue-500' />
							<span className='ml-2'>+5491121908368</span>
						</div>
					</a>
				</div>
			</div>
			<div className='flex justify-center pt-8'>
				<div className='relative flex'>
					<a className='w-full h-full' href='/Ariel Villarreal Curriculum.pdf' target='blank'>
						<div className='px-4 py-2 border rounded border-lightBlue-500'>
							<span>Obtener CV</span>
						</div>
					</a>
					<div style={{ zIndex: -10 }} className='absolute w-full h-full border-b border-l rounded border-lightBlue-500 right-1 top-1' />
				</div>
			</div>
		</section>
	)
}

export default Contact
