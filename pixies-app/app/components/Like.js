import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { toggleLike, toggleWishlist } from "../redux/reducers/dealSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppContext } from "./AppContext";

const Like = ({ customStyle, likesize, dealId }) => {
  const { wishlisted } = useSelector((state) =>
    state.deals.dealsList.find((item) => item.id === dealId)
  );
  const dispatch = useDispatch();
  const { userEmail } = useContext(AppContext);
  const handleLikePress = () => {
    dispatch(toggleWishlist({ id: dealId, userEmail }));
  };
  return (
    <Pressable onPress={handleLikePress} style={[customStyle, {}]}>
      {wishlisted ? (
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
