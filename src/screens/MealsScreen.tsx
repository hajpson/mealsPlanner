import { View } from "react-native";
import ItemsList from "../components/List";
import { uniStyles } from "../utils/styles";
import * as SplashScreen from "expo-splash-screen";
import { Layout } from "../components/Layout";

SplashScreen.preventAutoHideAsync();

export const MealsScreen = () => {
  return (
    <Layout
      style={[
        uniStyles.container,
        uniStyles.mainPageContainer
      ]}
      skipBottomInset
    >
      {/* <CustomInput placeholderText="Look for wanted meal" /> */}
      <ItemsList />
    </Layout>
  );
};
