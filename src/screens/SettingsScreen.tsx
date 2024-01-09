import { View } from "react-native";
import { CustomText } from "../components/CustomText";
import { getSafeAreaInsetsPadding } from "../helpers/getSafeAreaInsetsPadding";

export const SettingsScreen = () => {
  const { paddingTop, paddingBottom } = getSafeAreaInsetsPadding();

  return (
    <View style={{ paddingTop, paddingBottom }}>
      <CustomText>Howdy ho from Settings Screen!</CustomText>
    </View>
  );
};
