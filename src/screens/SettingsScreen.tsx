import { View } from "react-native";
import { CustomText } from "../components/CustomText";
import { CustomSafeAreaView } from "../components/CustomSafeAreaView";

export const SettingsScreen = () => {
  return (
    <CustomSafeAreaView>
      <View>
        <CustomText>Howdy ho from Settings Screen!</CustomText>
      </View>
    </CustomSafeAreaView>
  );
};
