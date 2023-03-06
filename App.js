import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
// import * as SplashScreen from "expo-splash-screen";
// SplashScreen.preventAutoHideAsync();

const routing = useRoute(true);

export default App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <NavigationContainer>{routing}</NavigationContainer>;
};
