import { View } from "react-native";
import { CustomText } from "../components/CustomText";
import { CustomSafeAreaView } from "../components/CustomSafeAreaView";
import { uniStyles } from "../utils/styles";

export const SettingsScreen = () => {
  return (
    <CustomSafeAreaView>
      <View style={[uniStyles.container, uniStyles.mainPageContainer]}>
        <CustomText>Howdy ho from Settings Screen!</CustomText>
      </View>
    </CustomSafeAreaView>
  );
};
