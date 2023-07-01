import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home";
import DetailView from "../components/cardDetail";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Detail"
        component={DetailView}
        options={({ route }) => ({
          title: route.params.data.title,
          headerTitleAlign: 'center'

        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
