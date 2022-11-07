import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomRouter from "./Bottom.router";
// import Details from "@modules/details/screens";

const Stack = createStackNavigator();

export default function StackRouter() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomRouter" component={BottomRouter} />
      {/* <Stack.Screen name="Details" component={Details} /> */}
    </Stack.Navigator>
  );
}
