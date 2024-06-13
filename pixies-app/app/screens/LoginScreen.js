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
import React, { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext } from "../components/AppContext";
import { useDispatch } from "react-redux";
import { loadcartdata } from "../redux/reducers/cartSlice";
import { loadlikedata } from "../redux/reducers/dealSlice";

const LoginScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const { setUserName, setUserEmail } = useContext(AppContext);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://192.168.118.203:3000/login`, {
        email: email,
        password: password,
      });
      const { token, userName, userEmail } = response.data;

      setUserName(userName);

      setUserEmail(userEmail);
      dispatch(loadcartdata(userEmail));
      dispatch(loadlikedata(userEmail));
      await AsyncStorage.setItem("token", token);
      navigation.navigate("Main");
    } catch (error) {
      console.error(error);
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
            <Text style={{ color: "#2e2b69", padding: 10 }}> Welcome Back</Text>
            <Text style={styles.logtext}>Log In to your account</Text>
          </View>
        </KeyboardAvoidingView>
      </View>

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

      <TouchableOpacity onPress={handleLogin}>
        <LinearGradient
          colors={["#b8cdf4", "#d37cd3"]}
          start={{ x: 0.1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.logbutton}
        >
          <Text logbuttext>LOG IN</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Pressable
        style={styles.accsignup}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.signupText}>Don't have an account? Signup</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
    paddingBottom: 40,
  },
  policy: {
    fontSize: 12,
    paddingTop: 5,
  },
  terms: {
    color: "#007fff",
  },
});
