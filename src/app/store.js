import { configureStore } from "@reduxjs/toolkit";
// autocomplete problem fault, remove bracket from below
import showReducer from "../features/showSlice";

const store = configureStore({
  reducer: {
    show: showReducer,
  },
});

export default store;
