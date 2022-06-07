import Icon from "react-native-vector-icons/FontAwesome5";
import * as React from "react";
import AttributesScreen from "./src/views/AttributesScreen";
import HomeScreen from "./src/views/HomeScreen";
import ItemsScreen from "./src/views/ItemsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Hero">
        <Tab.Screen
          name="Attributes"
          component={AttributesScreen}
          options={{
            tabBarIcon: () => (
              <>
                <Icon name="book-medical" size={25} />
              </>
            ),
          }}
        />

        <Tab.Screen
          name="Hero"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <>
                <Icon name="hat-wizard" size={25} />
              </>
            ),
          }}
        />

        <Tab.Screen
          name="Itens"
          component={ItemsScreen}
          options={{
            tabBarIcon: () => (
              <>
                <Icon name="box" size={25} />
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
