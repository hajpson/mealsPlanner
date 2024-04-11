import { NavigationContainer } from "@react-navigation/native";
import { MealsScreen } from "./src/screens/MealsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Navbar from "./src/components/Navbar";
import * as SplashScreen from "expo-splash-screen";
import { NAVIGATION_SCREEN_ID, FLAGS } from "./src/utils/constants";
import { ProductsScreen } from "./src/screens/ProductsScreen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { SettingsScreen } from "./src/screens/SettingsScreen";
import { LoginScreen } from "./src/screens/LoginScreen";

import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { MMKVProvider } from "./src/context/mmkvContext";
import { MainScreen } from "./src/screens/MainScreen";

const Tab = createBottomTabNavigator();
const isInLoginMode = FLAGS.IS_USING_LOGIN_SCREEN;

export default function App() {
  const [fontsLoaded] = useFonts({
    LexendLight: require("./assets/fonts/Lexend-Light.ttf"),
    Lexend: require("./assets/fonts/Lexend-Regular.ttf"),
    LexendMedium: require("./assets/fonts/Lexend-Medium.ttf"),
    LexendSemiBold: require("./assets/fonts/Lexend-SemiBold.ttf"),
  });

  const onContainerReady = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if (isInLoginMode) {
    onContainerReady();
    return <LoginScreen />;
  }

  return (
    <MMKVProvider>
      <NavigationContainer onReady={onContainerReady}>
        <Tab.Navigator
          initialRouteName={NAVIGATION_SCREEN_ID.MEALS}
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
              tabBarLabel: "Products"
            }}
          />
          <Tab.Screen
            name={NAVIGATION_SCREEN_ID.SETTINGS}
            component={SettingsScreen}
            options={{ headerShown: false, tabBarLabel: "Settings" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </MMKVProvider>
  )
}
