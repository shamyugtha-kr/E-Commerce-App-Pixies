import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";

const WishList = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Wishlist")}>
      <Ionicons
        name="heart-outline"
        size={24}
        color="black"
        style={{ marginHorizontal: 15 }}
      />
    </Pressable>
  );
};

export default WishList;

const styles = StyleSheet.create({});
