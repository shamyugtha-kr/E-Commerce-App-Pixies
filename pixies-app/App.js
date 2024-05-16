import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import StackNavigator from "./app/navigation/StackNavigator.js";
import LoginScreen from "./app/screens/LoginScreen";
import { Provider } from "react-redux";
import store from "./app/redux/store.js";
import { AppProvider } from "./app/components/AppContext.js";

export default function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <StackNavigator />
      </AppProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
