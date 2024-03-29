import { View } from "react-native";
import { uniStyles } from "../utils/styles";
import { NavItemProps } from "../types/NavItemProps";
import { CustomText } from "./CustomText";
import { colors } from "../utils/constants";

export default function NavItem({ title, icon, isFocused }: NavItemProps) {
  const textColor = isFocused ? colors.plainWhite : colors.light;

  return (
    <View style={uniStyles.navItemContainer}>
      {icon}
      <CustomText style={{ color: textColor }}>{title}</CustomText>
    </View>
  );
}
