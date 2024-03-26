import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableNativeFeedbackBase,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { toggleCart } from "../redux/reducers/cartSlice.js";
import { useSelector, useDispatch } from "react-redux";

const Addtocart = ({ customcart, bagsize, carttext, dealId }) => {
  const { cart } = useSelector((state) =>
    state.deals.dealsList.find((item) => item.id === dealId)
  );
  const dispatch = useDispatch();
  const handleCartPress = () => {
    dispatch(toggleCart({ id: dealId }));
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
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: 500,
              fontSize: carttext,
            }}
          >
            Add to Cart
          </Text>
          <Ionicons name="location-outline" size={15} color="rgba(0,0,0,0.9)" />
        </View>
      ) : (
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: 500,
              fontSize: carttext,
            }}
          >
            Added to Cart
          </Text>
          <Ionicons name="location-outline" size={15} color="rgba(0,0,0,0.9)" />
        </View>
      )}
    </Pressable>
  );
};

export default Addtocart;

const styles = StyleSheet.create({});
