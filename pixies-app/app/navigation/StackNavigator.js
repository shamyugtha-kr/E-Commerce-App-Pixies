import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import ProductScreen from "../screens/ProductScreen";
import WishListScreen from "../screens/WishListScreen";
import CartScreen from "../screens/CartScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "grey" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="home" size={27} color="#fd5780" />
              ) : (
                <MaterialCommunityIcons
                  name="home-outline"
                  size={24}
                  color="black"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Categery"
          component={HomeScreen}
          options={{
            tabBarLabel: "Category",
            tabBarLabelStyle: { color: "grey" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="appstore1" size={23} color="#fd5780" />
              ) : (
                <AntDesign name="appstore-o" size={20} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={HomeScreen}
          options={{
            tabBarLabel: "Account",
            tabBarLabelStyle: { color: "grey" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name="account"
                  size={27}
                  color="#fd5780"
                />
              ) : (
                <MaterialCommunityIcons
                  name="account-outline"
                  size={24}
                  color="black"
                />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Wishlist"
          component={WishListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
