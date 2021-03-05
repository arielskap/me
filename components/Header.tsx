import { useEffect, useRef, useState } from "react"
import colors from 'tailwindcss/colors'

const Header: React.FunctionComponent = () => {
	const [menuOpen, setMenuOpen] = useState(null)
	const open = useRef(false)
	const navBgMenu = useRef<HTMLElement>(null)
	const pIconMenu = useRef<HTMLParagraphElement>(null)
	const divContainerMenu = useRef<HTMLDivElement>(null)

	const handleMenuState = (setMenuState: React.Dispatch<React.SetStateAction<boolean>>) => {
		setMenuState(!menuOpen)
	}

	useEffect(() => {
		if (menuOpen) {
			pIconMenu.current.classList.replace('text-pink-500', 'text-white')
			navBgMenu.current.classList.replace('animate-slideOutUp', 'animate-slideInDown')
			navBgMenu.current.classList.replace('hidden', 'block')
			divContainerMenu.current.classList.replace('bg-primary', 'bg-transparent')
		} else if(menuOpen === false) {
			pIconMenu.current.classList.replace('text-white', 'text-pink-500')
			navBgMenu.current.classList.replace('animate-slideInDown', 'animate-slideOutUp')
			navBgMenu.current.addEventListener('animationend', () => {
				navBgMenu.current.classList.replace('block', 'hidden')
				divContainerMenu.current.classList.replace('bg-transparent', 'bg-primary')
			}, { once: true })
		}
		open.current = menuOpen
	}, [menuOpen])

	const handleChangePage = (page: string, changeMenuState = true) => {
		document.querySelector(`#${page}`).scrollIntoView({
			behavior: 'smooth'
		});
		if (changeMenuState) {
			handleMenuState(setMenuOpen)
		}
	}

	return (
		<header className='sticky top-0 left-0 z-10 w-full h-px'>
			<div ref={divContainerMenu} className='container absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 mx-auto bg-primary'>
				<button type='button' onClick={() => handleChangePage('home', false)} className='p-1 border-b-2 border-r-2 border-pink-500 border-dotted rounded-full'>
					<p ref={pIconMenu}  className='w-6 h-6 font-bold text-center text-pink-500'>AV</p>
				</button>
				<button type='button' className={`relative w-6 h-4 cursor-pointer menuIcon ${menuOpen ? 'open' : 'close' }`} onClick={() => handleMenuState(setMenuOpen)}/>
			</div>
			<nav ref={navBgMenu} className='absolute top-0 z-10 hidden w-screen h-screen text-white animate-slideOutUp bg-gradient-to-r from-secondary via-pink-700 to-red-500'>
				<ul className='flex flex-col items-center justify-center h-full space-y-6 text-5xl'>
					<li>
						<button type='button' onClick={() => handleChangePage('home')}>Home</button>
					</li>
					<li>
						<button type='button' onClick={() => handleChangePage('works')}>Works</button>
					</li>
					<li>
						<button type='button' onClick={() => handleChangePage('aboutMe')}>About Me</button>
					</li>
					<li>
						<button type='button' onClick={() => handleChangePage('contact')}>Contact</button>
					</li>
				</ul>
			</nav>
			<style jsx>{`
				.menuIcon:before {
					content: "";
					width: 100%;
					height: 3px;
					background-color: ${colors.white};
					position: absolute;
					right: 0;
					transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
				}
				.menuIcon:after {
					content: "";
					width: 100%;
					height: 3px;
					background-color: ${colors.white};
					position: absolute;
					right: 0;
					top: 0;
					transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
				}
				.menuIcon.close:before {
					bottom: 0;
					background-color: ${colors.pink[500]};
				}
				.menuIcon.close:after {
					top: 0;
					background-color: ${colors.pink[500]};
				}
				.menuIcon.open:before {
					bottom: 50%;
					transform: rotate(-45deg) translate3d(0, 50%, 0);
				}
				.menuIcon.open:after {
					top: 50%;
					transform: rotate(45deg) translate3d(0, -50%, 0);
				}

			`}</style>
		</header>
	)
}

export default Header
