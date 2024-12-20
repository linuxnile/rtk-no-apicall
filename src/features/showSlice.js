import { createSlice } from "@reduxjs/toolkit";

const initialState = { number: 0 };

const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    showData: (state) => {
      console.log(state.number);
    },

    increment: (state) => {
      state.number = state.number + 1;
    },

    incrementByValue: (state, action) => {
      state.number = state.number + action.payload;
    },
  },
});

export const { showData, increment, incrementByValue } = showSlice.actions;
export default showSlice.reducer;
