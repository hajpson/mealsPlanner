import { View, StyleSheet } from "react-native";

import { CustomText } from "../components/CustomText";
import { COLORS } from "../utils/constants";

const settingsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainPageContainer: {
    backgroundColor: COLORS.PLAIN_WHITE,
  },
});

export const SettingsScreen = () => {
  return (
    <View
      style={[
        settingsScreenStyles.container,
        settingsScreenStyles.mainPageContainer,
      ]}
    >
      <CustomText>Howdy ho from Settings Screen!</CustomText>
    </View>
  );
};
