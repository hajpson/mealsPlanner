import { FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { View } from "react-native";

import { CustomButton } from "./CustomButton";
import { CustomInput } from "./CustomInput";
import { CustomText } from "./CustomText";
import { SocialButton } from "./SocialButton";
import { isEmailValid } from "../helpers/isEmailValid";
import { LoginCardProps } from "../types/props/LoginCardProps";
import { COLORS } from "../utils/constants";
import { loginScreenStyles } from "../utils/styles";

export const LoginCard = ({ onConfirmed }: LoginCardProps) => {
  const [emailAddressValue, setEmailAddressValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const onContinueButtonPressed = async () => {
    onConfirmed?.();
  };

  return (
    <View style={loginScreenStyles.blurViewWrapper}>
      <BlurView intensity={90} style={loginScreenStyles.blurViewContainer}>
        <CustomText style={loginScreenStyles.subheaderText}>
          With the email address
        </CustomText>

        <CustomInput
          wrapperStyle={loginScreenStyles.inputWrapper}
          inputStyle={loginScreenStyles.input}
          placeholderText="Email address"
          onChangeText={(value) => setEmailAddressValue(value)}
          value={emailAddressValue}
        />

        <CustomInput
          secured
          wrapperStyle={loginScreenStyles.inputWrapper}
          inputStyle={loginScreenStyles.input}
          placeholderText="Password"
          onChangeText={setPasswordValue}
          value={passwordValue}
        />

        <CustomButton
          disabled={!isEmailValid(emailAddressValue)}
          style={
            isEmailValid(emailAddressValue)
              ? loginScreenStyles.continueButton
              : loginScreenStyles.disabledContinueButton
          }
          onPressed={onContinueButtonPressed}
        >
          <CustomText
            style={
              isEmailValid(emailAddressValue)
                ? loginScreenStyles.continueButtonText
                : loginScreenStyles.disabledContinueButtonText
            }
          >
            Continue
          </CustomText>
        </CustomButton>

        <View style={loginScreenStyles.dividerContainer}>
          <View style={loginScreenStyles.insideDividerLine} />
          <CustomText>or</CustomText>
          <View style={loginScreenStyles.insideDividerLine} />
        </View>

        <SocialButton
          icon={
            <FontAwesome
              style={loginScreenStyles.socialButtonLogo}
              name="facebook-square"
              size={24}
              color={COLORS.PLAIN_WHITE}
            />
          }
          title="With Facebook account"
        />

        <SocialButton
          icon={
            <FontAwesome
              style={loginScreenStyles.socialButtonLogo}
              name="apple"
              size={24}
              color={COLORS.PLAIN_WHITE}
            />
          }
          title="With Apple account"
          buttonStyle={loginScreenStyles.socialButtonSpacing}
        />

        <SocialButton
          icon={
            <FontAwesome
              style={loginScreenStyles.socialButtonLogo}
              name="google"
              size={24}
              color={COLORS.PLAIN_WHITE}
            />
          }
          title="With Google account"
          buttonStyle={loginScreenStyles.socialButtonSpacing}
        />
      </BlurView>
    </View>
  );
};
