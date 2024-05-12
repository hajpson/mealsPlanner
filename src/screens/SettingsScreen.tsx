import { View } from "react-native";

import { CustomText } from "../components/CustomText";
import { uniStyles } from "../utils/styles";

export const SettingsScreen = () => {
  return (
    <View style={[uniStyles.container, uniStyles.mainPageContainer]}>
      <CustomText>Howdy ho from Settings Screen!</CustomText>
    </View>
  );
};
