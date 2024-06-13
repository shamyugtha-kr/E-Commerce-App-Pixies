import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";
import Cart from "../components/Cart";

import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { deals } from "../data/DealsData";
import WishList from "../components/WishList";

import StarRate from "../components/StarRate";
import Like from "../components/Like";
import Addtocart from "../components/Addtocart";

const SearchResult = ({ route }) => {
  const { searchQuery } = route.params;
  const screenWidth = useWindowDimensions("window").width;
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "92%",
          alignItems: "center",
          marginLeft: 30,
          paddingTop: 15,
          paddingBottom: 10,
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginHorizontal: screenWidth * 0.05,
            marginTop: 5,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "grey", fontSize: 16, letterSpacing: 1 }}>
            Showing Search Results for{" "}
            <Text style={{ color: "#eb104e" }}>{searchQuery}</Text>
          </Text>
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
            .filter(
              (item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.subtitle
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                item.description
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
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
                        dealId={item.id}
                        bagsize={17}
                        customcart={{
                          padding: 5,
                          borderRadius: 5,
                          justifyContent: "center",
                          width: 115,
                          marginLeft: 5,
                        }}
                        carttext={13}
                      />
                    </View>
                  </View>
                </View>
              </Pressable>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchResult;

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
