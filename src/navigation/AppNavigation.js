import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import JobsScreen from "../screens/JobsScreen";
import JobDetailsScreen from "../screens/JobDetailsScreen";
import BookmarksScreen from "../screens/BookmarksScreen";

const Tab = createBottomTabNavigator();
const JobsStack = createStackNavigator();

function JobsStackNavigator() {
  return (
    <JobsStack.Navigator>
      <JobsStack.Screen name="Jobs For You" component={JobsScreen} />
      <JobsStack.Screen
        name="JobDetails"
        component={JobDetailsScreen}
        options={{ title: "Job Details" }}
      />
    </JobsStack.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Jobs" component={JobsStackNavigator} />
        <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
