import SvgMeditation from "./svg/SvgMeditation"

const Home = () => {
	return (
		<section className='flex flex-col pt-16' id='home'>
			<p className='text-blue-300'>¡Hola, Mundo! Mi nombre es</p>
			<h2 className='text-3xl'>Ariel Villarreal.</h2>
			<p className='pb-4 text-red-300'>Y me especializo en el desarrollo web.</p>
			<p className='pb-4 text-blue-300'>Tengo experiencia hace más de 4 años en el desarrollo de software. Siempre intentado construir el futuro, aprender del resto e innovar en el camino.</p>
			<SvgMeditation className='flex-grow object-contain' />
		</section>
	)
}

export default Home
