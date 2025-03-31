import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from "@react-navigation/native-stack";
import React from "react";
import BottomNavigatior from "./bottom-tabs.navigator";

export type AppNavigationParamList = {
  BottomTabNavigator: undefined;
};

export type AppNavigationProp =
  NativeStackNavigationProp<AppNavigationParamList>;

const AppStack = createNativeStackNavigator<AppNavigationParamList>();

function MainNavigatior(): React.ReactElement {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="BottomTabNavigator" component={BottomNavigatior} />
    </AppStack.Navigator>
  );
}

export default MainNavigatior;
