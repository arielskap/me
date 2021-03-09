import SvgMeditation from "./svg/SvgMeditation"

const Home = () => {
	return (
		<section className='flex flex-col pt-16'>
			<p className='text-blue-300'>¡Hola, Mundo! Mi nombre es</p>
			<h1 className='text-3xl'>Ariel Villarreal.</h1>
			<p className='pb-4 text-red-300'>Y me especializo en el desarrollo web.</p>
			<p className='pb-4 text-blue-300'>Tengo experiencia hace más de 4 años en el desarrollo de software. Siempre estoy construyendo el futuro, aprendiendo de la gente que me rodea e innovando en el camino.</p>
			<SvgMeditation className='flex-grow object-contain' />
		</section>
	)
}

export default Home
