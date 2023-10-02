import { configureStore } from '@reduxjs/toolkit';
import greetReducer from './store/reducer/greetSlice'


export const store = configureStore({
  reducer: {
    message: greetReducer,
  },
});

export default store;
