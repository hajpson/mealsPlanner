import { CustomButtonProps } from "../types/props/CustomButtonProps";
import { MotiPressable } from "moti/interactions";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../utils/constants";

const customButtonStyles = StyleSheet.create({
  customButton: {
    padding: 12,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 24,
  },
});

export const CustomButton = ({
  children,
  style,
  onPressed,
  disabled,
}: CustomButtonProps) => {
  return (
    <MotiPressable
      disabled={disabled}
      containerStyle={{ width: "100%" }}
      animate={useMemo(
        () =>
          ({ hovered, pressed }) => {
            "worklet";

            return {
              opacity: hovered || pressed ? 0.7 : 1,
              scale: hovered || pressed ? 0.9 : 1,
            };
          },
        []
      )}
      style={[customButtonStyles.customButton, style]}
      onPress={onPressed}
    >
      {children}
    </MotiPressable>
  );
};
