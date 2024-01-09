import { Text } from "react-native";
import { CustomTextProps } from "../types/CustomTextProps";
import { styles } from "../utils/styles";

export const CustomText = ({ children, style }: CustomTextProps) => {
  return <Text style={[styles.customText, style]}>{children}</Text>;
};
