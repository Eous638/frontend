import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./components/tab.js";
import { enableScreens } from "react-native-screens";
enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
