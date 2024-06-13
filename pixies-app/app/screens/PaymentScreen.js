import { StyleSheet, View, Image } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const PaymentScreen = () => {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly" }}
    >
      <View style={{ marginTop: 10 }}>
        <Image
          source={require("../assets/OrderPlaced.png")}
          style={{ width: 200, height: 60 }}
        />
      </View>
      <View style={{}}>
        <LottieView
          source={require("../assets/OrderConfirmed.json")}
          autoPlay
          style={{ width: 350, height: 350 }}
        />
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
