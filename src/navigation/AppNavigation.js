import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import JobsScreen from "../screens/JobsScreen";
import BookmarksScreen from "../screens/BookmarksScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Jobs" component={JobsScreen} />
        <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
