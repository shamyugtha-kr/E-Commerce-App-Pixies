import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Platform,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Octicons,
  FontAwesome5,
  Feather,
  MaterialIcons,
  FontAwesome,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

import Cart from "../components/Cart";
import { AppContext } from "../components/AppContext";
import { useNavigation } from "@react-navigation/native";
import WishList from "../components/WishList";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
  const { userName, userEmail } = useContext(AppContext);
  const screenWidth = useWindowDimensions("window").width;
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "92%",
          alignItems: "center",
          marginLeft: 30,
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
          flex: 1,
          alignItems: "center",
          gap: 20,
          marginHorizontal: screenWidth * 0.05,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            backgroundColor: "#fd5780",
            borderRadius: 10,
            marginTop: 30,
            width: 320,
            marginBottom: 5,

            ...Platform.select({
              ios: {},
              android: {},
            }),
          }}
        >
          <View
            style={{
              borderRadius: 1000,
              marginVertical: 10,
              marginHorizontal: 20,
              borderWidth: 1.2,
              borderColor: "white",
              padding: 3,
            }}
          ></View>
          <View style={{ marginVertical: 10, justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>
              Hello {userName} !
            </Text>

            <Text
              numberOfLines={1}
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 9.5,
                fontWeight: "400",
                overflow: "hidden",
                maxWidth: 200,
                marginBottom: 5,
                marginTop: 2,
                marginHorizontal: 1,
              }}
            >
              {userEmail}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              marginVertical: 15,
              padding: 5,
              right: 10,
            }}
          >
            <MaterialIcons
              name="keyboard-arrow-right"
              size={28}
              color="white"
            />
          </View>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
            alignItems: "center",
            marginVertical: 5,
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("Wishlist")}
            style={{
              width: 155,
              backgroundColor: "rgba(255,255,255,1)",
              padding: 22,
              borderRadius: 9,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <FontAwesome5 name="heart" size={17} color="rgba(0,0,0,1)" />
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Wishlist</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Cart")}
            style={{
              width: 155,
              backgroundColor: "rgba(255,255,255,1)",
              padding: 22,
              borderRadius: 9,
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              flexDirection: "row",
            }}
          >
            <Feather name="shopping-bag" size={18} color="rgba(0,0,0,1)" />
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Cart</Text>
          </Pressable>
        </View>
        <View
          style={{
            width: "100%",
            gap: 20,
            position: "absolute",
            bottom: 35,
            alignItems: "left",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("PageNotReady")}
            style={{ flexDirection: "row", gap: 15, alignItems: "center" }}
          >
            <MaterialIcons name="help-outline" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              Help & Support
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("PageNotReady")}
            style={{ flexDirection: "row", gap: 14, alignItems: "center" }}
          >
            <Ionicons name="document-text-outline" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              Terms and Conditions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("PageNotReady")}
            style={{ flexDirection: "row", gap: 15, alignItems: "center" }}
          >
            <Ionicons name="chatbubbles-outline" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", gap: 15, alignItems: "center" }}
            onPress={() => navigation.navigate("PageNotReady")}
          >
            <Ionicons name="mail-outline" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Email Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", gap: 16, alignItems: "center" }}
            onPress={async () => {
              await AsyncStorage.removeItem("token");
              navigation.replace("Login");
            }}
          >
            <Feather name="log-out" size={23} color="#ff0000" />
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#ff0000" }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

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
