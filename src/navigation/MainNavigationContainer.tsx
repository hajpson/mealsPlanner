import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Navbar from "../components/Navbar";
import { MainScreen } from "../screens/MainScreen";
import { MealsScreen } from "../screens/MealsScreen";
import { ProductsScreen } from "../screens/ProductsScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { MainNavigationContainerProps } from "../types/props/MainNavigationContainerProps";
import { NAVIGATION_SCREEN_ID } from "../utils/constants";

const Tab = createBottomTabNavigator();

export const MainNavigationContainer = ({
  onReady,
}: MainNavigationContainerProps) => {
  return (
    <NavigationContainer onReady={onReady}>
      <Tab.Navigator
        initialRouteName={NAVIGATION_SCREEN_ID.MAIN}
        tabBar={(props) => <Navbar {...props} />}
      >
        <Tab.Screen
          name={NAVIGATION_SCREEN_ID.MAIN}
          component={MainScreen}
          options={{ headerShown: false, tabBarLabel: "Home" }}
        />
        <Tab.Screen
          name={NAVIGATION_SCREEN_ID.MEALS}
          component={MealsScreen}
          options={{ headerShown: false, tabBarLabel: "Meals" }}
        />
        <Tab.Screen
          name={NAVIGATION_SCREEN_ID.PRODUCTS}
          component={ProductsScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Products",
          }}
        />
        <Tab.Screen
          name={NAVIGATION_SCREEN_ID.SETTINGS}
          component={SettingsScreen}
          options={{ headerShown: false, tabBarLabel: "Settings" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
