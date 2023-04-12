import { createSlice } from '@reduxjs/toolkit';

export const constantSlice = createSlice({
  name: 'constant',
  initialState: {
    language: 'Nguyen Xuan Chien',
  },
  reducers: {
    handleVI(state) {
      state.language = 'A';
    },
    handleEN(state) {
      state.language = 'B';
    },
  },
});
