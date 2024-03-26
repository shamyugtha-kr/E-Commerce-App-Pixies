import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { toggleLike, toggleWishlist } from "../redux/reducers/dealSlice";
import { useSelector, useDispatch } from "react-redux";

const Like = ({ customStyle, likesize, dealId }) => {
  const { like } = useSelector((state) =>
    state.deals.dealsList.find((item) => item.id === dealId)
  );
  const dispatch = useDispatch();
  const handleLikePress = () => {
    dispatch(toggleLike({ id: dealId }));
    dispatch(toggleWishlist({ id: dealId }));
  };
  return (
    <Pressable onPress={handleLikePress} style={[customStyle, {}]}>
      {like ? (
        <MaterialCommunityIcons
          name="cards-heart"
          size={likesize}
          color="#fd5780"
        />
      ) : (
        <MaterialCommunityIcons
          name="heart-plus-outline"
          size={likesize}
          color="#fd5780"
        />
      )}
    </Pressable>
  );
};

export default Like;

const styles = StyleSheet.create({});
