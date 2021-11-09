import { SliderAction, SliderActionKind } from './actions'
import { SliderState } from './state'

export const SliderReducer = (state: SliderState, action: SliderAction) => {
  switch (action.type) {
    case SliderActionKind.SET_SWIPER:
      return {
        ...state,
        swiper: action.payload.swiper
      }
    default:
      return state
  }
}
