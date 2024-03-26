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

import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import Like from "../components/Like";
import { list } from "../data/ListData";
import { banner } from "../data/BannerData";
import { deals } from "../data/DealsData";
import { useNavigation } from "@react-navigation/native";
import Addtocart from "../components/Addtocart";
import WishList from "../components/WishList";
import Cart from "../components/Cart";

const HomeScreen = ({ navigation }) => {
  const screenwidth = useWindowDimensions("window").width;
  const productpress = (productid) => {
    navigation.navigate("Product", { id: productid });
  };

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
        }}
      >
        <View>
          <Image
            source={require("../assets/logoname.png")}
            style={styles.logoname}
          />
          <Pressable style={styles.location}>
            <Ionicons
              name="location-outline"
              size={15}
              color="rgba(0,0,0,0.9)"
            />
            <Text
              style={{
                fontSize: 10.5,
                color: "rgba(0,0,0,0.9)",
                marginLeft: 3,
              }}
            >
              City - Coimbatore 642126
            </Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={15}
              color="rgba(0,0,0,0.9)"
            />
          </Pressable>
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
      <View style={{ alignItems: "center" }}>
        <Pressable style={styles.search}>
          <Ionicons name="search" size={24} color="#fd5780" />
          <TextInput
            placeholder="Search for Products"
            style={{ color: "#9092a4", paddingLeft: 10 }}
          ></TextInput>
        </Pressable>
      </View>
      <ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {list.map((item, index) => (
            <Pressable
              key={index}
              style={{
                marginLeft: 28,
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Image
                style={{
                  width: 65,
                  height: 65,
                  resizeMode: "contain",
                  borderRadius: 10,
                }}
                source={item.image}
              />

              <Text
                style={{
                  textAlign: "center",
                  fontSize: 11,
                  fontWeight: "400",
                  marginTop: 8,
                }}
              >
                {item?.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <FlatList
          data={banner}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginHorizontal: screenwidth * 0.05,
                  paddingTop: 25,
                  paddingBottom: 15,
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    resizeMode: "cover",
                    borderRadius: 15,
                    width: screenwidth * 0.9,
                    height: 200,
                  }}
                />
              </View>
            );
          }}
          horizontal={true}
          pagingEnabled={true}
        ></FlatList>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginLeft: 15,
            marginVertical: 20,
            gap: 15,
          }}
        >
          {deals.map((item, index) => (
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

                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: "green",
                      borderRadius: 5,
                      width: 40,
                      paddingVertical: 3,
                      paddingHorizontal: 3,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        color: "white",
                      }}
                    >
                      <Entypo name="star" size={10} color="white" />{" "}
                      {item.rating}
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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  search: {
    flexDirection: "row",
    padding: 10,
    width: 330,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 15,
  },
  logoname: {
    width: 80,
    height: 38.4,
  },
  location: {
    flexDirection: "row",
  },
});
