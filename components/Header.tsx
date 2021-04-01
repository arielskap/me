import { useContext, useEffect, useRef, useState } from "react"
import colors from 'tailwindcss/colors'
import { EMenu } from "../enums/EMenu";
import { Context } from "../SliderContext"

let flag = false;

const Header: React.FunctionComponent = () => {
	const { swiper } = useContext(Context)
	const [menuOpen, setMenuOpen] = useState<boolean>(false)
	const navBgMenu = useRef<HTMLElement>(null)
	const pIconMenu = useRef<HTMLParagraphElement>(null)
	const divContainerMenu = useRef<HTMLDivElement>(null)
	const [title, setTitle] = useState("")

	const handleMenuState = (setMenuState: React.Dispatch<React.SetStateAction<boolean>>) => {
		setMenuState(!menuOpen)
	}

	useEffect(() => {
		if (flag) {
			if (menuOpen) {
				pIconMenu.current?.classList.replace('text-pink-500', 'text-white')
				navBgMenu.current?.classList.replace('animate-slideOutUp', 'animate-slideInDown')
				navBgMenu.current?.classList.replace('hidden', 'block')
				divContainerMenu.current?.classList.replace('bg-primary', 'bg-transparent')
			} else if(!menuOpen) {
				pIconMenu.current?.classList.replace('text-white', 'text-pink-500')
				navBgMenu.current?.classList.replace('animate-slideInDown', 'animate-slideOutUp')
				navBgMenu.current?.addEventListener('animationend', () => {
					navBgMenu.current?.classList.replace('block', 'hidden')
					divContainerMenu.current?.classList.replace('bg-transparent', 'bg-primary')
				}, { once: true })
			}
		} else flag = true
	}, [menuOpen])

	useEffect(() => {
		console.log(swiper);
		if (swiper) {
			swiper.on("slideChange", (s) => {
				setTitle(EMenu[swiper.activeIndex])
			})
		}
	}, [swiper])

	const handleChangePage = (numberPage: number, changeMenuState = true) => {
		if (swiper) {
			swiper.slideTo(numberPage, 500)
		}
		if (changeMenuState) {
			handleMenuState(setMenuOpen)
		}
	}

	return (
		<header className='sticky top-0 left-0 z-10 w-full h-px'>
			<div ref={divContainerMenu} className='container absolute top-0 left-0 right-0 z-20 flex items-center justify-between mx-auto transition-colors duration-300 border-b border-l border-r border-transparent bg-primary md:rounded-br-3xl md:rounded-bl-3xl md:border-lightBlue-500'>
				<div className='p-4'>
					<button type='button' onClick={() => handleChangePage(0, false)} className='p-1 border-b-2 border-r-2 border-pink-500 border-dotted rounded-full'>
						<p ref={pIconMenu}  className='w-6 h-6 font-bold text-center text-pink-500'>AV</p>
					</button>
				</div>
				<div className="hidden md:block">
					<h2 className='text-4xl text-center text-white'>{title}</h2>
				</div>
				<div className='flex p-4'>
					<button type='button' className={`relative w-6 h-4 cursor-pointer menuIcon ${menuOpen ? 'open' : 'close' }`} onClick={() => handleMenuState(setMenuOpen)}/>
				</div>
			</div>
			<nav ref={navBgMenu} className='absolute top-0 left-0 z-10 hidden w-screen h-screen text-white navBgMenu animate-slideOutUp bg-secondary'>
				<ul className='flex flex-col items-center justify-center h-full space-y-6 text-5xl bg-black bg-opacity-40 md:pb-24'>
					{Array.from( { length: ( Object.keys(EMenu).length  / 2 ) } ).map((_ , i) => {
						return (
							<li>
								<button type='button' onClick={() => handleChangePage(i)}>{EMenu[i]}</button>
							</li>
						)
					})}
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
				.navBgMenu {
					background-image: url("/spacePink.jpg");
					background-repeat: no-repeat;
					background-position: center;
					background-size: cover;
				}
			`}</style>
		</header>
	)
}

export default Header
