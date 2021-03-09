import { Swiper } from "swiper";

type ContextType = {
  swiper: Swiper | null
  setSwiper: React.Dispatch<React.SetStateAction<Swiper | null>>
}