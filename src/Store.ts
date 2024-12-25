import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/slices/Counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
