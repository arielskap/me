import { createContext, useState, useContext } from "react"
import { Swiper } from "swiper"

const SwiperContext = createContext<{ swiper: Swiper | null, setSwiper: React.Dispatch<React.SetStateAction<Swiper | null>> } | undefined>(undefined)

const SwiperProvider: React.FC = ({children}) => {
	const [swiper, setSwiper] = useState<null | Swiper>(null)
	const value = { swiper, setSwiper }

	return <SwiperContext.Provider value={value}>{children}</SwiperContext.Provider>
}

const useSwiper = () => {
	const context = useContext(SwiperContext)
	if (context === undefined) {
		throw new Error('useSwiper must be used within a SwiperProvider')
	}

	return context
}

export {
	SwiperProvider,
	useSwiper
}
