import { createContext, Dispatch, useContext, useReducer } from 'react';
import { SliderAction } from './actions';
import { SliderReducer } from './reducer';
import { SliderState, initialSliderState } from './state';

const SliderContext = createContext<{
  state: SliderState;
  dispatch: Dispatch<SliderAction>;
}>({
  state: initialSliderState,
  dispatch: () => undefined,
});

const SliderProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(SliderReducer, initialSliderState);
  const value = { state, dispatch };

  return (
    <SliderContext.Provider value={value}>{children}</SliderContext.Provider>
  );
};

const useSlider = () => {
  const context = useContext(SliderContext);

  if (context === undefined) {
    throw new Error('useSlider must be used within a SliderProvider');
  }

  return { state: context.state, dispatch: context.dispatch };
};

export { SliderProvider, useSlider };
