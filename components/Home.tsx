import SvgMeditation from "./svg/SvgMeditation"

const Home = () => {
	return (
		<section className='pt-16 md:pt-0 md:h-screen md:flex md:items-center md:justify-center md:px-16'>
			<div className='flex flex-col p-4 md:border md:border-lightBlue-500 md:shadow-2xl md:bg-primary md:bg-opacity-90 md:flex-row md:space-x-4 md:rounded-md'>
				<div className='md:flex md:flex-col md:justify-center'>
					<p className='text-blue-300'>¡Hola, Mundo! Mi nombre es</p>
					<h1 className='text-2xl sm:text-3xl md:text-7xl'>Ariel Villarreal.</h1>
					<p className='pb-1 text-red-300 sm:pb-4 md:text-2xl'>Y me especializo en el desarrollo web.</p>
					<p className='pb-1 text-blue-300 sm:pb-4 md:text-3xl'>Tengo experiencia hace más de 4 años en el desarrollo de software. Siempre estoy construyendo el futuro, aprendiendo de la gente que me rodea e innovando en el camino.</p>
				</div>
				<SvgMeditation className='flex-grow object-contain md:max-w-xl md:mx-auto' />
			</div>
		</section>
	)
}

export default Home
