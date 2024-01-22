import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LookingFor from "./screens/LookingFor";
import BuyerRegister from "./screens/Buyer/BuyerRegister";
import SellerRegister from "./screens/Seller/SellerRegister";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LookingFor"
          component={LookingFor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterBuyer"
          component={BuyerRegister}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterSeller"
          component={SellerRegister}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
