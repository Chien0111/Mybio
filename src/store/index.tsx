import { configureStore } from '@reduxjs/toolkit';
import { constantSlice } from './slice/constant';

const store = configureStore({
  reducer: {
    constant: constantSlice.reducer,
  },
});

export default store;
