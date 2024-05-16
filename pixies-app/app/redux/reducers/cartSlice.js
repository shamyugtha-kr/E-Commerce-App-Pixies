import { createSlice, createSelector } from "@reduxjs/toolkit";
import { deals } from "../../data/DealsData";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  dealsList: deals,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, action) => {
      const { id, userEmail } = action.payload;
      const item = state.dealsList.find((item) => item.id === id);
      if (item) {
        item.cart = !item.cart;
        savecartdata(state.dealsList, userEmail);
      }
    },
    setcartdata: (state, action) => {
      state.dealsList = action.payload;
    },
  },
});

export const { toggleCart, setcartdata } = cartSlice.actions;

export const selectDealsList = (state) => state.cart.dealsList;

export const selectcartItems = createSelector(selectDealsList, (dealsList) =>
  dealsList.filter((item) => item.cart)
);
const savecartdata = async (cartdata, userEmail) => {
  try {
    const cartstoragekey = `@MyApp:cart:${userEmail}`;
    console.log(userEmail);
    await AsyncStorage.setItem(cartstoragekey, JSON.stringify(cartdata));
  } catch (error) {
    console.log("Couldn't save cart data", error);
  }
};

export const loadcartdata = (mailID) => async (dispatch) => {
  try {
    const cartstoragekey = `@MyApp:cart:${mailID}`;
    console.log(mailID);
    const cartdata = await AsyncStorage.getItem(cartstoragekey);
    if (cartdata) {
      dispatch(setcartdata(JSON.parse(cartdata)));
    }
  } catch (error) {
    console.log("Couldn't load cart data", error);
  }
};

export default cartSlice.reducer;
