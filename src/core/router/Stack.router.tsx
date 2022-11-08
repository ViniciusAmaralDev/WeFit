import "react-native-gesture-handler";
import React from "react";
import BottomRouter from "./Bottom.router";
import { createStackNavigator } from "@react-navigation/stack";

import { Splash } from "@modules/splash";
import { Details } from "@modules/repositories/screens/details";
import { DetailScreenHeader } from "@shared/components/detailScreenHeader";

export type StackRootParamList = {
  Splash: undefined;
  BottomRouter: undefined;
  Details: { id: number; favorite: boolean };
};

const Stack = createStackNavigator<StackRootParamList>();

export default function StackRouter() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomRouter"
        component={BottomRouter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ header: () => <DetailScreenHeader /> }}
      />
    </Stack.Navigator>
  );
}
