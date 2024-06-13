import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const VerificationScreen = ({ route }) => {
  const { name, email, password, verificationcode } = route.params;
  const [userCode, setUserCode] = useState("");

  const navigation = useNavigation();
  const handleVerification = async () => {
    if (userCode === verificationcode) {
      try {
        const response = await axios.post(
          `http://192.168.118.203:3000/verify`,
          {
            name: name,
            email: email,
            password: password,
          }
        );

        Alert.alert("Success", "Email verified successfully", [
          { text: "OK", onPress: () => navigation.navigate("Main") },
        ]);
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert("Wrong Code", "The code you entered seems to be wrong", [
        { text: "Retry", onPress: () => setUserCode("") },
      ]);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `http://192.168.118.203:3000/register`,
        {
          name: name,
          email: email,
          password: password,
        }
      );
      const { verificationcode } = response.data;
      navigation.navigate("Verify", {
        name,
        email,
        password,
        verificationcode,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff1f5",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: "#2e2b69",
          fontWeight: "700",
          marginBottom: 20,
        }}
      >
        Verify Your Email Account
      </Text>
      <Text
        style={{
          color: "#2e2b69",
          width: 295,
          textAlign: "justify",
          marginVertical: 10,
        }}
      >
        Enter the 6-digit verification code sent to your email account to
        proceed
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "rgba(49,11,53,0.1)",
          padding: 5,
          width: 300,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <MaterialCommunityIcons
          name="key-outline"
          size={24}
          color="rgba(0,0,0,0.4)"
          style={{ paddingLeft: 7 }}
        />
        <TextInput
          value={userCode}
          onChangeText={(text) => setUserCode(text)}
          placeholder="Enter your verification code"
          placeholderTextColor={"rgba(0,0,0,0.4)"}
          style={{
            paddingLeft: 10,
            color: "#2e2b69",
            width: "100%",
            marginHorizontal: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: 290,
          justifyContent: "space-between",
        }}
      >
        <Pressable onPress={handleRegister}>
          <Text style={{ color: "#008FFF", marginVertical: 10 }}>
            Resend code
          </Text>
        </Pressable>
        <Pressable>
          <Text style={{ color: "#2e2b69", marginVertical: 10, fontSize: 13 }}>
            Get Help?
          </Text>
        </Pressable>
      </View>

      <TouchableOpacity onPress={handleVerification}>
        <LinearGradient
          colors={["#b8cdf4", "#d37cd3"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            marginTop: 25,
            width: 150,
            alignItems: "center",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>Verify</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({});
