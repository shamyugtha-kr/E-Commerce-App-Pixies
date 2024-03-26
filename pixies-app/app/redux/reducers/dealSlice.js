import { createSlice, createSelector } from "@reduxjs/toolkit";
import { deals } from "../../data/DealsData";

const initialState = {
  dealsList: deals,
};

const dealSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const { id } = action.payload;
      const item = state.dealsList.find((item) => item.id === id);
      if (item) {
        item.like = !item.like;
      }
    },
    toggleWishlist: (state, action) => {
      const { id } = action.payload;
      const item = state.dealsList.find((item) => item.id === id);
      if (item) {
        item.wishlisted = !item.wishlisted;
      }
    },
  },
});

export const { toggleLike, toggleWishlist } = dealSlice.actions;

export const selectDealsList = (state) => state.deals.dealsList;

export const selectWishlistedItems = createSelector(
  selectDealsList,
  (dealsList) => dealsList.filter((item) => item.wishlisted)
);

export default dealSlice.reducer;
