import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "./components/detailsScreen";
import Home from "./pages/homeScreen";
import About from "./pages/aboutScreen";
import Direction from "./pages/directionScreen";
import Tours from "./pages/toursScreen";
import Locations from "./pages/locationsScreen";
import Language from "./pages/languageScreen";
import Icon_Home from "react-native-vector-icons/AntDesign";
import Icon_Tours from "react-native-vector-icons/Ionicons";
import Icon_Locations from "react-native-vector-icons/Ionicons";
import Icon_Language from "react-native-vector-icons/Ionicons";
import Icon_About from "react-native-vector-icons/Ionicons";

const Tab = createMaterialBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#16b8f3"
      inactiveColor="#2F2F2F"
      barStyle={{ backgroundColor: "#fff", paddingBottom: 5 }}
    >
      <Tab.Screen
        name="Language"
        component={Language}
        options={{
          tabBarLabel: "Language",
          tabBarIcon: ({ color }) => (
            <Icon_Language name="language-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Tours"
        component={Tours}
        options={{
          tabBarLabel: "Tours",
          tabBarIcon: ({ color }) => (
            <Icon_Tours name="ios-map-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon_Home name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Locations"
        component={Locations}
        options={{
          tabBarLabel: "Locations",
          tabBarIcon: ({ color }) => (
            <Icon_Locations
              name="ios-location-outline"
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About Us"
        component={About}
        options={{
          tabBarLabel: "About Us",
          tabBarIcon: ({ color }) => (
            <Icon_About name="md-school-outline" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

enableScreens();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={TabNavigator} options={{headerShown: false}} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{headerShown: false}} />
        <Stack.Screen name="Direction" component={Direction} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
