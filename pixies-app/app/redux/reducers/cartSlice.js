import { createSlice, createSelector } from "@reduxjs/toolkit";
import { deals } from "../../data/DealsData";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  cartList: deals,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, action) => {
      const { id, userEmail } = action.payload;
      const item = state.cartList.find((item) => item.id === id);
      if (item) {
        if (item.cart === false) {
          item.quantity = 1;
        } else {
          item.quantity = 0;
        }
        item.cart = !item.cart;
        savecartdata(state.cartList, userEmail);
      }
    },
    setcartdata: (state, action) => {
      state.cartList = action.payload;
    },
    incrementCount: (state, action) => {
      const { id, userEmail } = action.payload;
      const item = state.cartList.find((item) => item.id === id);
      if (item) {
        item.quantity = item.quantity + 1;
        savecartdata(state.cartList, userEmail);
      }
    },
    decrementCount: (state, action) => {
      const { id, userEmail } = action.payload;
      const item = state.cartList.find((item) => item.id === id);
      if (item) {
        if (item.quantity <= 1) {
          item.quantity = 0;
          item.cart = !item.cart;
        } else {
          item.quantity = item.quantity - 1;
        }
        savecartdata(state.cartList, userEmail);
      }
    },
    resetCartItemsCount: (state, action) => {
      const { userEmail } = action.payload;
      state.cartList.forEach((item) => {
        item.quantity = 0;
        item.cart = false;
      });
      savecartdata(state.cartList, userEmail);
    },
  },
});

export const {
  toggleCart,
  setcartdata,
  incrementCount,
  decrementCount,
  resetCartItemsCount,
} = cartSlice.actions;

export const selectcartList = (state) => state.cart.cartList;

export const selectcartItems = createSelector(selectcartList, (cartList) =>
  cartList.filter((item) => item.cart)
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
