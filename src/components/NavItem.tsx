import { View } from "react-native";
import { styles } from "../utils/styles";
import { NavItemProps } from "../types/NavItemProps";
import { CustomText } from "./CustomText";
import { colors } from "../utils/constants";

export default function NavItem({ title, icon, isFocused }: NavItemProps) {
  const textColor = isFocused ? colors.light : colors.medium;

  return (
    <View style={styles.navItemContainer}>
      {icon}
      <CustomText style={{ color: textColor }}>{title}</CustomText>
    </View>
  );
}
