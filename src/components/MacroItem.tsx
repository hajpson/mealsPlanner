import { StyleSheet, View } from "react-native";

import { CustomText } from "./CustomText";
import { MacroItemProps } from "../types/props/MacroItemProps";
import { COLORS } from "../utils/constants";

const macroItemStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.GRAY_CONTRAST,
    padding: 6,
    borderRadius: 12,
    flexBasis: 0,
    flexGrow: 1,
    marginHorizontal: 6,
  },
});

export const MacroItem = ({ title, amount }: MacroItemProps) => {
  return (
    <View style={macroItemStyles.container}>
      <CustomText>{amount}g</CustomText>
      <CustomText>{title}</CustomText>
    </View>
  );
};
