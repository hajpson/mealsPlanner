import { StyleSheet, Text } from "react-native";

import { CustomTextProps } from "../types/props/CustomTextProps";
import { COLORS } from "../utils/constants";

const customTextStyles = StyleSheet.create({
  customText: {
    fontFamily: "LexendSemiBold",
    color: COLORS.DARK,
  },
});

export const CustomText = ({ children, style }: CustomTextProps) => {
  return <Text style={[customTextStyles.customText, style]}>{children}</Text>;
};
