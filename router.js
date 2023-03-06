import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainTab = createBottomTabNavigator();
const Stack = createStackNavigator();

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import PostsScreen from "./Screens/mainScreen/PostsScreen";
import CreateScreen from "./Screens/mainScreen/CreateScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const authorize = true;

export const useRoute = () => {
  if (authorize) {
    return (
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ title: "Головна сторінка" }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    );
  }

  return (
    <MainTab.Navigator screenOptions={{ showLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Entypo name="plus" size={size} color={color} />
          ),
        }}
        name="Create"
        component={CreateScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
