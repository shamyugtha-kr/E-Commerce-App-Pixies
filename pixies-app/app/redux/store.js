import { configureStore } from "@reduxjs/toolkit";
import dealReducer from "./reducers/dealSlice";

const store = configureStore({
  reducer: {
    deals: dealReducer,
  },
});

export default store;
