import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomRouter from "./Bottom.router";
import { Details } from "@modules/repositories/screens/details";
import { DetailScreenHeader } from "@shared/components/detailScreenHeader";

export type StackRootParamList = {
  BottomRouter: undefined;
  Details: { id: number };
};

const Stack = createStackNavigator<StackRootParamList>();

export default function StackRouter() {
  return (
    <Stack.Navigator>
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
