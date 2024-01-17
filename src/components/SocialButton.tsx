import React from "react"
import { CustomButton } from "./CustomButton"
import { CustomText } from "./CustomText"
import { loginScreenStyles } from "../utils/styles"
import { SocialButtonProps } from "../types/SocialButtonProps";
import { TextStyle } from "react-native";

export const SocialButton = ({ icon, title, buttonStyle, textStyle }: SocialButtonProps) => {
    return (
        <CustomButton style={[loginScreenStyles.socialButtonContainer, buttonStyle]}>
            {icon}
            <CustomText style={[loginScreenStyles.socialButtonText, textStyle] as TextStyle}>{title}</CustomText>
        </CustomButton>
    );
}