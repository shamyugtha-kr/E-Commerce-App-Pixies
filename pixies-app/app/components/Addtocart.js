import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableNativeFeedbackBase,
} from "react-native";
import React, { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { toggleCart } from "../redux/reducers/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppContext } from "./AppContext";

const Addtocart = ({ customcart, bagsize, carttext, dealId }) => {
  const { cart } = useSelector(
    (state) => state.cart.cartList.find((item) => item.id === dealId) || {}
  );
  const dispatch = useDispatch();
  const { userEmail } = useContext(AppContext);
  const handleCartPress = () => {
    dispatch(toggleCart({ id: dealId, userEmail }));
  };
  return (
    <Pressable
      onPress={handleCartPress}
      style={[
        customcart,
        {
          backgroundColor: "#fd5780",
          flexDirection: "row",
        },
      ]}
    >
      {cart ? (
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: 500,
              fontSize: carttext,
              marginRight: 10,
            }}
          >
            Remove
          </Text>
          <Ionicons
            name="bag-handle-outline"
            size={bagsize}
            color="white"
            style={{}}
          />
        </View>
      ) : (
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: 500,
              fontSize: carttext,
              marginRight: 10,
            }}
          >
            Add to Bag
          </Text>
          <Ionicons
            name="bag-handle-outline"
            size={bagsize}
            color="white"
            style={{}}
          />
        </View>
      )}
    </Pressable>
  );
};

export default Addtocart;

const styles = StyleSheet.create({});
