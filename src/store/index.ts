import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counter';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

type GetStateFnType = typeof store.getState;
type IRootStore = ReturnType<GetStateFnType>;

export const useAppSelector: TypedUseSelectorHook<IRootStore> = useSelector;

export default store;
