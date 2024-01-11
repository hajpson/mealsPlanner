import { Text, View } from "react-native"
import { CustomSafeAreaView } from "../components/CustomSafeAreaView"
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export const LoginScreen = () => {
    return (
        <CustomSafeAreaView>
            <View>
                <Text>Test s</Text>
            </View>
        </CustomSafeAreaView>
    )
}