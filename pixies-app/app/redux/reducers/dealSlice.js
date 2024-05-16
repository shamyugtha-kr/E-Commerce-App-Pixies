import { createSlice, createSelector } from "@reduxjs/toolkit";
import { deals } from "../../data/DealsData";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  dealsList: deals,
};

const dealSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const { id, userEmail } = action.payload;
      const item = state.dealsList.find((item) => item.id === id);
      if (item) {
        item.wishlisted = !item.wishlisted;
        savelikedata(state.dealsList, userEmail);
      }
    },
    setlikedata: (state, action) => {
      state.dealsList = action.payload;
    },
  },
});

export const { toggleWishlist, setlikedata } = dealSlice.actions;

export const selectDealsList = (state) => state.deals.dealsList;

export const selectWishlistedItems = createSelector(
  selectDealsList,
  (dealsList) => dealsList.filter((item) => item.wishlisted)
);
const savelikedata = async (likedata, userEmail) => {
  try {
    const likestoragekey = `@MyApp:like:${userEmail}`;
    console.log(userEmail);
    await AsyncStorage.setItem(likestoragekey, JSON.stringify(likedata));
  } catch (error) {
    console.log("Couldn't load like data", error);
  }
};

export const loadlikedata = (mailID) => async (dispatch) => {
  try {
    const likestoragekey = `@MyApp:like:${mailID}`;
    console.log(mailID);
    const likedata = await AsyncStorage.getItem(likestoragekey);
    if (likedata) {
      dispatch(setlikedata(JSON.parse(likedata)));
    }
  } catch (error) {
    console.log("Couldn't load like data", error);
  }
};

export default dealSlice.reducer;
