import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import "react-native-reanimated";

import "react-native-gesture-handler";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { EatingGoalProvider } from "./src/context/EatingGoalContext";
import { MainNavigationContainer } from "./src/navigation/MainNavigationContainer";
import { LoginScreen } from "./src/screens/LoginScreen";
import { FLAGS } from "./src/utils/constants";
import { MMKVProvider } from "./src/context/mmkvContext";
import { ToastProvider } from "./src/context/ToastContext";
import { Toast } from "./src/components/Toast";

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
    return (
      <SafeAreaProvider>
        <ToastProvider>
          <LoginScreen />
          <Toast />
        </ToastProvider>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <MMKVProvider>
        <EatingGoalProvider>
          <ToastProvider>
            <MainNavigationContainer onReady={onContainerReady} />
            <Toast />
          </ToastProvider>
        </EatingGoalProvider>
      </MMKVProvider>
    </SafeAreaProvider>
  );
}
