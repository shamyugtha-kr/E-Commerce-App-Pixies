import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";

const Cart = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Cart")}>
      <Ionicons
        name="bag-handle-outline"
        size={24}
        color="black"
        style={{ marginHorizontal: 15 }}
      />
    </Pressable>
  );
};

export default Cart;

const styles = StyleSheet.create({});
