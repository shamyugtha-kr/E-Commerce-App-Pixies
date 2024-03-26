import { createSlice, createSelector } from "@reduxjs/toolkit";
import { deals } from "../../data/DealsData";

const initialState = {
  dealsList: deals,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, action) => {
      const { id } = action.payload;
      const item = state.dealsList.find((item) => item.id === id);
      if (item) {
        item.cart = !item.cart;
      }
    },
  },
});

export const { togglecart } = cartSlice.actions;

export const selectDealsList = (state) => state.cart.dealsList;

export const selectcartItems = createSelector(selectDealsList, (dealsList) =>
  dealsList.filter((item) => item.cart)
);

export default cartSlice.reducer;
