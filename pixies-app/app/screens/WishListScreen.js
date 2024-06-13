import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React from "react";
import StarRate from "../components/StarRate";

import {
  Entypo,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import Like from "../components/Like";
import { list } from "../data/ListData";
import { banner } from "../data/BannerData";
import { deals } from "../data/DealsData";
import { useNavigation } from "@react-navigation/native";
import Addtocart from "../components/Addtocart";
import WishList from "../components/WishList";
import Cart from "../components/Cart";
import { selectWishlistedItems } from "../redux/reducers/dealSlice";
import { useSelector } from "react-redux";

const WishListScreen = ({ navigation }) => {
  const WishListedItems = useSelector(selectWishlistedItems);
  const productpress = (productid) => {
    navigation.navigate("Product", { id: productid });
  };
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "92%",
          alignItems: "center",
          marginLeft: 30,
          paddingTop: 15,
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
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginLeft: 15,
          marginVertical: 20,
          gap: 15,
        }}
      >
        {deals
          .filter((item) =>
            WishListedItems.some((matchitem) => matchitem.id === item.id)
          )
          .map((item, index) => (
            <Pressable key={index} onPress={() => productpress(item.id)}>
              <View>
                <Image
                  source={item.image}
                  style={{
                    width: 170,
                    height: 170,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  }}
                />
                <View
                  style={{
                    maxWidth: 170,
                    backgroundColor: "white",
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    padding: 10,
                  }}
                >
                  <Text numberOfLines={1} style={{ fontWeight: 600 }}>
                    {item.title}
                  </Text>
                  <View style={{ minHeight: 35 }}>
                    <Text
                      numberOfLines={2}
                      style={{ fontSize: 12, paddingTop: 5 }}
                    >
                      {item.subtitle}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ paddingTop: 5, fontWeight: 500 }}>
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

                  <View>
                    <Text
                      style={{
                        fontSize: 10,
                        color: "white",
                      }}
                    >
                      <StarRate
                        rating={item.rating}
                        starSize={12}
                        fullStarColor={"#fd5780"}
                      />
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: 8,
                    }}
                  >
                    <Like
                      customStyle={{
                        borderColor: "#c3c3c3",
                        borderRadius: 5,
                        borderWidth: 1,
                        padding: 5,
                      }}
                      likesize={17}
                      dealId={item.id}
                    />
                    <Addtocart
                      bagsize={17}
                      customcart={{
                        padding: 5,
                        borderRadius: 5,

                        justifyContent: "center",
                        width: 115,
                        marginLeft: 5,
                      }}
                      carttext={13}
                      dealId={item.id}
                    />
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
      </View>
    </SafeAreaView>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  logoname: {
    width: 80,
    height: 38.4,
  },
});
