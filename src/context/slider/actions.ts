import Swiper from "swiper";

export enum SliderActionKind {
  SET_SWIPER,
}

export interface Init {
  type: SliderActionKind.SET_SWIPER;
  payload: {
    swiper: Swiper;
  };
}

export type SliderAction = Init;
