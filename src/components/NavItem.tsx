import { View } from "react-native";
import { uniStyles } from "../utils/styles";
import { NavItemProps } from "../types/props/NavItemProps";
import { CustomText } from "./CustomText";
import { COLORS } from "../utils/constants";

export default function NavItem({ title, icon, isFocused }: NavItemProps) {
  const textColor = isFocused ? COLORS.PLAIN_WHITE : COLORS.LIGHT;

  return (
    <View style={uniStyles.navItemContainer}>
      {icon}
      <CustomText style={{ color: textColor }}>{title}</CustomText>
    </View>
  );
}
