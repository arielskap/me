import { createContext, useState } from "react"
import { Swiper } from "swiper"
import { ContextType } from "./type"

export const Context = createContext<Partial<ContextType>>({})

export const Provider: React.FC = ( { children } ) => {
	const [swiper, setSwiper] = useState<null | Swiper>(null)

	const value = {
		swiper,
		setSwiper
	}

	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	)
}

export default {
	Provider,
	Consumer: Context.Consumer
}
