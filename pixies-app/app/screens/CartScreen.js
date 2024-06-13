import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import StarRate from "../components/StarRate";
import Counter from "../components/Counter";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import WishList from "../components/WishList";
import Cart from "../components/Cart";
import { resetCartItemsCount, toggleCart } from "../redux/reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectcartItems } from "../redux/reducers/cartSlice";
import { AppContext } from "../components/AppContext";

const CartScreen = ({ navigation }) => {
  const CartItems = useSelector(selectcartItems);
  const dispatch = useDispatch();
  const { userEmail } = useContext(AppContext);

  const handleRemoveItem = (id) => {
    dispatch(toggleCart({ id, userEmail }));
  };

  const productpress = (productid) => {
    navigation.navigate("Product", { id: productid });
  };

  // Log CartItems for debugging
  console.log("CartItems:", CartItems);

  const totalAmount = CartItems.reduce((total, item) => {
    console.log("Item price:", item.price, "Item quantity:", item.quantity); // Debugging log
    return total + item.price * item.quantity;
  }, 0);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "92%",
          alignItems: "center",
          marginLeft: 30,

          paddingTop: 60,
        }}
      >
        <View>
          <Image
            source={require("../assets/logoname.png")}
            style={styles.logoname}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome
            name="bell-o"
            size={21}
            color="black"
            style={{ marginHorizontal: 15 }}
          />

          <WishList />
          <Cart />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              marginTop: 20,
              gap: 15,
              alignItems: "center",
              paddingBottom: 150, // Ensure padding at the bottom for total amount view
            }}
          >
            {CartItems.map((item, index) => (
              <Pressable key={index} onPress={() => productpress(item.id)}>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    borderRadius: 10,
                    backgroundColor: "white",
                  }}
                >
                  <View>
                    <Image
                      style={{
                        width: 157,
                        height: 157,
                        resizeMode: "contain",
                        borderBottomLeftRadius: 10,
                        borderTopLeftRadius: 10,
                      }}
                      source={item.image}
                    />
                  </View>
                  <View style={{ marginLeft: 15, width: 180, margin: 10 }}>
                    <Text numberOfLines={1} style={{ fontWeight: "600" }}>
                      {item.title}
                    </Text>
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          paddingTop: 5,
                        }}
                      >
                        {item.subtitle}
                      </Text>
                    </View>

                    <View style={{ marginTop: 5 }}>
                      <StarRate
                        rating={item.rating}
                        starSize={12}
                        fullStarColor={"#fd5780"}
                      />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ paddingTop: 5, fontWeight: "500" }}>
                        ₹{item.price}
                      </Text>
                      <Text
                        style={{
                          textDecorationLine: "line-through",
                          color: "#a3a3a3",
                          paddingTop: 5,
                          paddingBottom: 5,
                        }}
                      >
                        {" "}
                        ₹{item.oldPrice}
                      </Text>
                    </View>

                    <View
                      style={{
                        position: "absolute",
                        bottom: 0,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      <View style={{ width: 120 }}>
                        <Counter itemid={item.id} />
                      </View>
                      <Pressable
                        onPress={() => handleRemoveItem(item.id)}
                        style={{ alignItems: "center", marginHorizontal: 16 }}
                      >
                        <FontAwesome5
                          name="trash-alt"
                          size={22}
                          color="#fd5780"
                        />
                      </Pressable>
                    </View>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
        <View style={{ flexDirection: "row", minWidth: "100%" }}>
          <View
            style={{
              backgroundColor: "white",
              minWidth: "30%",
              paddingTop: 10,
              paddingBottom: 30,
              paddingLeft: 20,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
              }}
            >
              ₹{totalAmount}
            </Text>
            <Text
              style={{
                color: "grey",
                fontWeight: "500",
              }}
            >
              Grand Total
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              minWidth: "70%",
              paddingTop: 10,
              paddingBottom: 30,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#fd5780",
                height: 45,
                flexDirection: "row",
                marginRight: 20,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
              onPress={() => {
                if (totalAmount !== 0) {
                  navigation.navigate("Payment");
                  dispatch(resetCartItemsCount({ userEmail }));
                }
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "500",
                  marginRight: 10,
                }}
              >
                Proceed and Pay
              </Text>
              <AntDesign name="arrowright" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  logoname: {
    width: 80,
    height: 38.4,
  },
});
