import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Repositories from "@modules/repositories/screens";
// import Favorites from "@modules/favorites/screens";

const Tab = createBottomTabNavigator();

export default function BottomRouter() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Repositories" component={Repositories} />
      <Tab.Screen name="Favorites" component={Favorites} /> */}
    </Tab.Navigator>
  );
}
