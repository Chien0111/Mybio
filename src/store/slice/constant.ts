import { createSlice } from '@reduxjs/toolkit';

export const constantSlice = createSlice({
  name: 'constant',
  initialState: {
    language: 'Nguyen Xuan Chien',
    drakMode: false,
  },
  reducers: {
    handleVI(state) {
      state.language = 'A';
    },
    handleEN(state) {
      state.language = 'B';
    },
    handleDrakMode(state) {
      state.drakMode = !state.drakMode;
    },
  },
});

export const { handleDrakMode } = constantSlice.actions;
