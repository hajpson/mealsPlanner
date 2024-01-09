import { SafeAreaView, TextInput, View } from "react-native";
import ItemsList from "../components/List";
import { styles } from "../utils/styles";
import * as SplashScreen from "expo-splash-screen";
import { getSafeAreaInsetsPadding } from "../helpers/getSafeAreaInsetsPadding";
import { CustomInput } from "../components/CustomInput";

SplashScreen.preventAutoHideAsync();

export const MealsScreen = () => {
  const { paddingTop, paddingBottom } = getSafeAreaInsetsPadding();

  return (
    <View
      style={[
        styles.container,
        styles.listPageContainer,
        { paddingTop, paddingBottom },
      ]}
    >
      <CustomInput />
      <ItemsList />
    </View>
  );
};
