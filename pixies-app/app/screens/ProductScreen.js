import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { deals } from "../data/DealsData";

import {
  Ionicons,
  FontAwesome,
  Entypo,
  MaterialIcons,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Like from "../components/Like";
import Addtocart from "../components/Addtocart";

const ProductScreen = ({ route }) => {
  const { id } = route.params;
  const selectedIndex = deals.findIndex((item) => item.id === id);
  const product = deals[selectedIndex];
  const screenwidth = useWindowDimensions("window").width;

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
          paddingBottom: 20,
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
          <Ionicons
            name="heart-outline"
            size={24}
            color="black"
            style={{ marginHorizontal: 15 }}
          />
          <Ionicons
            name="bag-handle-outline"
            size={24}
            color="black"
            style={{ marginHorizontal: 15 }}
          />
        </View>
      </View>
      <ScrollView>
        <FlatList
          data={product.carouselImages}
          renderItem={({ item }) => {
            return (
              <Image
                source={item}
                style={{
                  resizeMode: "cover",
                  width: screenwidth,
                  height: screenwidth,
                }}
              />
            );
          }}
          horizontal={true}
          pagingEnabled={true}
        ></FlatList>
        <View>
          <Text
            style={{
              marginHorizontal: 15,
              marginTop: 40,
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            {" "}
            {product.title}{" "}
          </Text>
          <Text
            style={{
              marginHorizontal: 15,
              marginTop: 10,
              fontSize: 15,
              fontWeight: 500,
              color: "grey",
            }}
          >
            {" "}
            {product.subtitle}{" "}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 15,
              marginTop: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "green",
                borderRadius: 5,
                width: 48,
                paddingVertical: 3,
                paddingHorizontal: 3,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  color: "white",
                }}
              >
                <Entypo name="star" size={15} color="white" /> {product.rating}
              </Text>
            </View>
            <Text style={{ padding: 10, color: "#bbb9b9", fontSize: 15 }}>
              |
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                name="verified"
                size={24}
                color="#00adef"
                style={{ paddingRight: 5 }}
              />
              <Text style={{ fontSize: 13, fontWeight: 500 }}>
                {" "}
                5000+ Verified Reviews
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 15,
              marginTop: 10,
              alignItems: "baseline",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 600 }}>
              ₹{product.price}
            </Text>
            <Text
              style={{
                textDecorationLine: "line-through",
                color: "#a3a3a3",
                fontWeight: 300,
                paddingHorizontal: 10,
                fontSize: 13,
              }}
            >
              ₹{product.oldPrice}
            </Text>
          </View>
          <View style={{ marginHorizontal: 15, marginTop: 10 }}>
            <Text
              style={{
                fontSize: 11,
                color: "grey",
              }}
            >
              INCLUSIVE OF ALL TAXES{" "}
            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
              flexDirection: "row",
              borderTopWidth: 1,
              borderTopColor: "#c3c3c3",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "grey",
                marginLeft: 15,
                paddingTop: 10,
              }}
            >
              Sold by :{" "}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "black",
                paddingTop: 10,
              }}
            >
              Pixies E retail limited
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#f4f4f4",
              height: 100,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                height: 50,
                flexDirection: "row",

                backgroundColor: "white",
                width: "100%",
                marginTop: 25,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderRightWidth: 1,
                  borderRightColor: "#fff1f5",
                  width: "50%",
                  justifyContent: "center",
                }}
              >
                <Octicons name="verified" size={24} color="#fd5780" />
                <Text style={{ paddingHorizontal: 10, fontWeight: 500 }}>
                  {" "}
                  100% Authentic
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderRightWidth: 1,
                  borderRightColor: "#fff1f5",
                  width: "50%",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="return-up-back" size={24} color="#fd5780" />
                <Text style={{ paddingHorizontal: 10, fontWeight: 500 }}>
                  {" "}
                  Easy Return Policy
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 25,
                marginTop: 10,
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "#c3c3c3",
                paddingBottom: 10,
              }}
            >
              <View>
                <MaterialIcons
                  name="domain-verification"
                  size={24}
                  color="green"
                />
              </View>
              <View style={{ paddingLeft: 15 }}>
                <Text style={{ fontSize: 14, fontWeight: 500 }}>
                  Delivery within 5 days
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "grey",
                    paddingTop: 5,
                  }}
                >
                  642126 - Coimbatore
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 25,
                marginTop: 10,
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="truck-delivery-outline"
                  size={24}
                  color="grey"
                />
                <View style={{ paddingLeft: 15 }}>
                  <Text style={{ fontWeight: 400, fontSize: 12 }}>
                    Free delivery
                  </Text>
                  <Text style={{ fontWeight: 400, fontSize: 12 }}>
                    above ₹299
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", paddingLeft: 100 }}>
                <MaterialCommunityIcons
                  name="account-cash-outline"
                  size={24}
                  color="gray"
                />
                <View style={{ paddingLeft: 15 }}>
                  <Text style={{ fontWeight: 400, fontSize: 12 }}>
                    COD on oders
                  </Text>
                  <Text style={{ fontWeight: 400, fontSize: 12 }}>
                    above ₹250
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ height: 25, backgroundColor: "#f4f4f4" }}></View>
        </View>
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>
            Product Description
          </Text>
          <Text
            style={{
              paddingTop: 10,
              textAlign: "justify",
              lineHeight: 25,
              color: "grey",
              fontWeight: 500,
            }}
          >
            {" "}
            {product.description}{" "}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: 600, paddingTop: 10 }}>
            Key Ingredients
          </Text>
          <Text
            style={{
              paddingTop: 10,
              textAlign: "justify",
              lineHeight: 25,
              color: "grey",
              fontWeight: 500,
            }}
          >
            {" "}
            {product.ingredients}{" "}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: 600, paddingTop: 10 }}>
            Additional Information
          </Text>
          <Text
            style={{
              paddingTop: 10,
              textAlign: "justify",
              lineHeight: 25,
              color: "grey",
              fontWeight: 500,
            }}
          >
            {" "}
            {product.additionalInfo}{" "}
          </Text>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Like
            customStyle={{
              marginTop: 15,
              marginHorizontal: 35,
            }}
            likesize={26}
            dealId={id}
          />
        </View>
        <View>
          <Addtocart
            customcart={{ width: "400%", alignItems: "center", height: 50 }}
            dealId={product.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
  },
  logoname: {
    width: 80,
    height: 38.4,
  },
});
