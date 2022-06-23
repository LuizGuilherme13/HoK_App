import * as React from "react";
import HeroScreen from "./src/views/Hero/HeroScreen";
import DiceScreen from "./src/views/Dice/DiceScreen";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NavigationContainer } from "@react-navigation/native";
import AttributesScreen from "./src/views/Attributes/AttributesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const myOptions = {
  title: "HERO OF KARDS",
  //headerShown: false,
  headerTitleAlign: "center",
  tabBarShowLabel: false,
  headerStyle: { backgroundColor: "#9898a2" },
  tabBarStyle: {
    backgroundColor: "#9898a2",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  headerRight: () => (
    <Icon
      name="d-and-d"
      size={35}
      style={{ alignSelf: "center", marginRight: 50 }}
    />
  ),
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Hero"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            size = 25;

            if (route.name === "Hero") {
              iconName = "hat-wizard";
              color = focused ? "gray" : "black";
            } else if (route.name === "Attributes") {
              iconName = "book-medical";
              color = focused ? "gray" : "black";
            } else {
              iconName = "dice";
              color = focused ? "gray" : "black";
            }

            return (
              <Icon
                name={iconName}
                color={color}
                size={size}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 9,
                  backgroundColor: "#FFFFFF",
                }}
              />
            );
          },
          ...myOptions,
        })}
      >
        <Tab.Screen name="Attributes" component={AttributesScreen} />

        <Tab.Screen name="Hero" component={HeroScreen} />

        <Tab.Screen name="Dice" component={DiceScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
