import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
   temp: userReducer,
  },
});
