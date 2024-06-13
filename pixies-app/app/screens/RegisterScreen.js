import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import YupValidation from "../components/YupValidatiom";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const handleRegister = async () => {
    try {
      await YupValidation.validate(
        { name, email, password },
        { abortEarly: false }
      );
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
      if (error.name === "ValidationError") {
        let validationError = {};
        error.inner.forEach((err) => {
          validationError[err.path] = err.message;
        });
        setErrors(validationError);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require("../assets/logo.png")} style={styles.img} />
      </View>

      <View>
        <KeyboardAvoidingView>
          <View style={styles.signup}>
            <Text style={styles.logtext}>Sign up</Text>
            <Text style={{ color: "#2e2b69", paddingTop: 1, marginBottom: 15 }}>
              Create your account
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>

      <View style={styles.inputcontainer}>
        <FontAwesome
          name="user"
          size={24}
          color="rgba(0,0,0,0.4)"
          style={{ paddingHorizontal: 5 }}
        />
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter your name"
          placeholderTextColor={"rgba(0,0,0,0.4)"}
          style={styles.inputText}
        />
      </View>
      {errors.name && <Text style={{ color: "red" }}> {errors.name} </Text>}
      <View style={styles.inputcontainer}>
        <MaterialIcons
          name="email"
          size={24}
          color="rgba(0,0,0,0.4)"
          style={{ paddingHorizontal: 5 }}
        />
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email"
          placeholderTextColor={"rgba(0,0,0,0.4)"}
          style={styles.inputText}
        />
      </View>
      {errors.email && <Text style={{ color: "red" }}> {errors.email} </Text>}
      <View style={styles.inputcontainer}>
        <MaterialIcons
          name="password"
          size={24}
          color="rgba(0,0,0,0.4)"
          style={{ paddingHorizontal: 5 }}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          placeholder="password"
          placeholderTextColor={"rgba(0,0,0,0.4)"}
          style={styles.inputText}
        />
      </View>
      {errors.password && (
        <Text style={{ color: "red" }}> {errors.password} </Text>
      )}
      <View style={styles.links}>
        <Text style={styles.policy}>
          By signing up, you agree to our
          <Text style={styles.terms}> Terms</Text>,
          <Text style={styles.terms}> Privacy Policy</Text> and
          <Text style={styles.terms}> Cookies Policy</Text>
        </Text>
      </View>

      <TouchableOpacity onPress={handleRegister}>
        <LinearGradient
          colors={["#b8cdf4", "#d37cd3"]}
          start={{ x: 0.1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.logbutton}
        >
          <Text logbuttext>SIGN UP</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Pressable
        style={styles.accsignup}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.signupText}>Already have an account? LogIn</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff1f5",
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 200,
    marginTop: 50,
  },
  inputcontainer: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "rgba(49,11,53,0.1)",
    width: 300,
    padding: 5,
    borderRadius: 5,
  },
  inputText: {
    paddingLeft: 1,
  },
  logtext: {
    fontSize: 20,
    fontWeight: "400",
    color: "#2e2b69",

    paddingBottom: 10,
  },
  links: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  logbutton: {
    width: 250,
    padding: 9,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 90,
  },
  logbuttext: {
    color: "#2e2b69",
  },
  accsignup: {
    color: "#2e2b69",
    paddingTop: 10,
  },
  signup: {
    alignItems: "center",
  },
  policy: {
    fontSize: 12,
    paddingTop: 5,
  },
  terms: {
    color: "#007fff",
  },
});
