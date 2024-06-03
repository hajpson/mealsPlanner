import React from "react";
import { CustomButton } from "./CustomButton";
import { CustomText } from "./CustomText";
import { loginScreenStyles } from "../utils/styles";
import { SocialButtonProps } from "../types/props/SocialButtonProps";
import { StyleSheet, TextStyle } from "react-native";
import { COLORS } from "../utils/constants";

const socialButtonStyles = StyleSheet.create({
  socialButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  socialButtonText: {
    color: COLORS.PLAIN_WHITE,
    alignSelf: "center",
    fontSize: 16,
    paddingVertical: 6,
  },
});

export const SocialButton = ({
  icon,
  title,
  onPressed,
  buttonStyle,
  textStyle,
  disabled = false,
}: SocialButtonProps) => {
  return (
    <CustomButton
      disabled={disabled}
      onPressed={onPressed}
      style={[socialButtonStyles.socialButtonContainer, buttonStyle]}
    >
      {icon}
      <CustomText
        style={[socialButtonStyles.socialButtonText, textStyle] as TextStyle}
      >
        {title}
      </CustomText>
    </CustomButton>
  );
};
