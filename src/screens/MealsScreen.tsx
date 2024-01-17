import { View } from "react-native";
import ItemsList from "../components/List";
import { uniStyles } from "../utils/styles";
import * as SplashScreen from "expo-splash-screen";
import { CustomInput } from "../components/CustomInput";
import { CustomSafeAreaView } from "../components/CustomSafeAreaView";

SplashScreen.preventAutoHideAsync();

export const MealsScreen = () => {
  return (
    <CustomSafeAreaView>
      <View
        style={[
          uniStyles.container,
          uniStyles.mainPageContainer
        ]}
      >
        <CustomInput placeholderText="Look for wanted meal" />
        <ItemsList />
      </View>
    </CustomSafeAreaView>
  );
};
