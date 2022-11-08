import React from "react";
import { useTheme } from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { Header } from "@modules/repositories/components/header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Repositories from "@modules/repositories/screens";
import Favorites from "@modules/favorites/screens";
import { useRepository } from "@modules/repositories/hook";

const Tab = createBottomTabNavigator();

export default function BottomRouter() {
  const theme = useTheme();
  const { toggleModalOfSelectRepository } = useRepository();

  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <Header title="WeFit" onPress={toggleModalOfSelectRepository} />,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.medium,
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
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="star" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
