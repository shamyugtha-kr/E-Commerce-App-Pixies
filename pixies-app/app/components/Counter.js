import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  incrementCount,
  toggleCart,
} from "../redux/reducers/cartSlice";
import { AppContext } from "./AppContext";

const Counter = ({ itemid }) => {
  const { quantity } = useSelector(
    (state) => state.cart.cartList.find((item) => item.id === itemid) || {}
  );
  const dispatch = useDispatch();
  const { userEmail } = useContext(AppContext);
  const handleIncrement = () => {
    dispatch(incrementCount({ id: itemid, userEmail }));
  };
  0;

  const handleDecrement = () => {
    dispatch(decrementCount({ id: itemid, userEmail }));
  };

  return (
    <View style={styles.counterContainer}>
      <Pressable style={styles.counterButton} onPress={handleDecrement}>
        <Entypo name="minus" size={19} color="black" />
      </Pressable>
      <View style={styles.counterValue}>
        <Text>{quantity}</Text>
      </View>
      <Pressable style={styles.counterButton} onPress={handleIncrement}>
        <Entypo name="plus" size={18} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#fd5780",
    paddingVertical: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  counterButton: {
    margin: 4,
  },
  counterValue: {
    paddingHorizontal: 16,
    padding: 4,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#fd5780",
  },
});

export default Counter;
