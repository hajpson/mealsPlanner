import { StyleSheet, View } from "react-native";
import { NavItemProps } from "../types/props/NavItemProps";
import { CustomText } from "./CustomText";
import { COLORS } from "../utils/constants";

const navItemStyles = StyleSheet.create({
  navItemContainer: {
    alignItems: "center",
  },
});

export default function NavItem({ title, icon, isFocused }: NavItemProps) {
  const textColor = isFocused ? COLORS.PLAIN_WHITE : COLORS.LIGHT;

  return (
    <View style={navItemStyles.navItemContainer}>
      {icon}
      <CustomText style={{ color: textColor }}>{title}</CustomText>
    </View>
  );
}
