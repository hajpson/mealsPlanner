import { View } from "react-native";
import ItemsList from "../components/List";
import { styles } from "../utils/styles";
import * as SplashScreen from "expo-splash-screen";
import { CustomInput } from "../components/CustomInput";
import { CustomSafeAreaView } from "../components/CustomSafeAreaView";

SplashScreen.preventAutoHideAsync();

export const MealsScreen = () => {
  return (
    <CustomSafeAreaView>
      <View
        style={[
          styles.container,
          styles.listPageContainer
        ]}
      >
        <CustomInput />
        <ItemsList />
      </View>
    </CustomSafeAreaView>
  );
};
