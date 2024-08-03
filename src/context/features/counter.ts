import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  counter: number;
};

const initialState: InitialState = {
  counter: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1;
    },
    decrememnt: (state) => {
      state.counter = state.counter - 1;
    },
    reset: (state) => {
      state.counter = 0;
    }
  }
});

export const { increment, decrememnt, reset } = counterSlice.actions;

export default counterSlice.reducer;
