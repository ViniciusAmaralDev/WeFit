import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Repositories from "@modules/repositories/screens";
import { useTheme } from "styled-components";
// import Favorites from "@modules/favorites/screens";

const Tab = createBottomTabNavigator();

export default function BottomRouter() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.medium,
          // color: theme.colors.primary_text,
        },
      }}
    >
      <Tab.Screen
        name="Repositories"
        component={Repositories}
        options={{
          tabBarLabel: "Repositórios",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="github" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
