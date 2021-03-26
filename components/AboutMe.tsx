import { useEffect, useRef } from "react"
import SvgGalaxy from "./svg/SvgGalaxy"
import SvgShootingStars from "./svg/SvgShootingStars"
import { generateObserver } from '../lib/functions'

interface Props {
	birthday: number
}

const AboutMe: React.FC<Props> = ({birthday}) => {
	const divSvgGalaxy = useRef<HTMLDivElement>(null)
	const divSvgShootingStars = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const timeOut = Math.floor(Math.random() * (8000 - 2000)) + 2000;
		if (divSvgGalaxy.current) {
			generateObserver(() => {
				setTimeout(() => {
					if (divSvgShootingStars.current) {
						divSvgShootingStars.current.classList.toggle('hidden')
						divSvgShootingStars.current.classList.add('animate-shootingStar')
						divSvgShootingStars.current.addEventListener('animationend', () => {
							divSvgShootingStars.current?.classList.toggle('hidden')
						})
					}
				}, timeOut);
			}, { threshold: 1 }).observe(divSvgGalaxy.current)
		}
	}, [])
	return (
		<section className='min-h-screen'>
			<h2 className='pt-16 pb-4 text-4xl text-center'>Sobre Mí</h2>
			<div className='md:grid md:grid-cols-2'>
				<p className='md:text-2xl'>Nací en Buenos Aires, Argentina. Tengo {birthday} Años. Mis actividades favoritas son salir con amigos, leer y programar. Mi objetivo es explorar más allá de lo que alguna vez algun humano haya llegado.</p>
				<div>
					<div className='flex items-center py-8'>
						<div className='relative w-1/2 mx-auto'>
							<div ref={divSvgShootingStars} className='absolute z-10 hidden w-24 h-24 rounded-tl-full rounded-br-full'>
								<SvgShootingStars/>
							</div>
							<div ref={divSvgGalaxy} className='w-full md:max-w-xs md:mx-auto animate-rotate'>
								<SvgGalaxy />
							</div>
						</div>
					</div>
					<p className='italic text-center'>- Hay que hacer posible lo imposible</p>
				</div>
			</div>
		</section>
	)
}


export default AboutMe
