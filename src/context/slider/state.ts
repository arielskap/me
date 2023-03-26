import Swiper from "swiper";

export interface SliderState {
  swiper: Swiper | null;
}

export const initialSliderState: SliderState = {
  swiper: null,
};
