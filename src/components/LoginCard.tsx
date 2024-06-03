import { FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { CustomButton } from "./CustomButton";
import { CustomInput } from "./CustomInput";
import { CustomText } from "./CustomText";
import { SocialButton } from "./SocialButton";
import { isEmailValid } from "../helpers/isEmailValid";
import { LoginCardProps } from "../types/props/LoginCardProps";
import { COLORS } from "../utils/constants";

const loginCardStyles = StyleSheet.create({
  blurViewWrapper: {
    borderRadius: 24,
    overflow: "hidden",
    width: Dimensions.get("screen").width - 48,
  },
  blurViewContainer: {
    padding: 18,
    display: "flex",
    alignItems: "center",
  },
  subheaderText: {
    fontSize: 20,
  },
  inputWrapper: {
    backgroundColor: "transparent",
    borderRadius: 24,
    borderWidth: 2,
    borderColor: COLORS.DARK,
    marginTop: 20,
  },
  input: {
    color: COLORS.DARK,
  },
  continueButton: {
    backgroundColor: COLORS.LIGHT,
    width: "100%",
    marginTop: 12,
    alignItems: "center",
  },
  disabledContinueButton: {
    backgroundColor: COLORS.GRAY_CONTRAST,
    width: "100%",
    marginTop: 12,
    alignItems: "center",
  },
  continueButtonText: {
    color: COLORS.PLAIN_WHITE,
    fontSize: 20,
    paddingVertical: 4,
  },
  disabledContinueButtonText: {
    color: COLORS.DARKER_GRAY_CONTRAST,
    fontSize: 20,
    paddingVertical: 4,
  },
  dividerContainer: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  insideDividerLine: {
    flex: 1,
    borderBottomColor: COLORS.DARK,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  dividerText: {
    paddingHorizontal: 12,
  },
  socialButtonLogo: {
    position: "absolute",
    left: 24,
  },
  socialButtonSpacing: {
    marginTop: 12,
  },
});

export const LoginCard = ({
  onConfirmed,
  emailValue,
  passwordValue,
  setEmailValue,
  setPasswordValue,
}: LoginCardProps) => {
  const onContinueButtonPressed = async () => {
    await onConfirmed?.();
  };

  return (
    <View style={loginCardStyles.blurViewWrapper}>
      <BlurView intensity={90} style={loginCardStyles.blurViewContainer}>
        <CustomText style={loginCardStyles.subheaderText}>
          With the email address
        </CustomText>

        <CustomInput
          wrapperStyle={loginCardStyles.inputWrapper}
          inputStyle={loginCardStyles.input}
          placeholderText="Email address"
          onChangeText={(value) => setEmailValue(value)}
          value={emailValue}
        />

        <CustomInput
          secured
          wrapperStyle={loginCardStyles.inputWrapper}
          inputStyle={loginCardStyles.input}
          placeholderText="Password"
          onChangeText={setPasswordValue}
          value={passwordValue}
        />

        <CustomButton
          disabled={!isEmailValid(emailValue) && passwordValue.length <= 0}
          style={
            isEmailValid(emailValue)
              ? loginCardStyles.continueButton
              : loginCardStyles.disabledContinueButton
          }
          onPressed={onContinueButtonPressed}
        >
          <CustomText
            style={
              isEmailValid(emailValue)
                ? loginCardStyles.continueButtonText
                : loginCardStyles.disabledContinueButtonText
            }
          >
            Continue
          </CustomText>
        </CustomButton>

        <View style={loginCardStyles.dividerContainer}>
          <View style={loginCardStyles.insideDividerLine} />
          <CustomText style={loginCardStyles.dividerText}>or</CustomText>
          <View style={loginCardStyles.insideDividerLine} />
        </View>

        <SocialButton
          onPressed={() => {
            //TODO: add facebook social
            return;
          }}
          icon={
            <FontAwesome
              style={loginCardStyles.socialButtonLogo}
              name="facebook-square"
              size={24}
              color={COLORS.PLAIN_WHITE}
            />
          }
          title="With Facebook account"
        />

        <SocialButton
          onPressed={() => {
            //TODO: add apple social
            return;
          }}
          icon={
            <FontAwesome
              style={loginCardStyles.socialButtonLogo}
              name="apple"
              size={24}
              color={COLORS.PLAIN_WHITE}
            />
          }
          title="With Apple account"
          buttonStyle={loginCardStyles.socialButtonSpacing}
        />

        <SocialButton
          onPressed={() => {
            //TODO: add google social
            return;
          }}
          icon={
            <FontAwesome
              style={loginCardStyles.socialButtonLogo}
              name="google"
              size={24}
              color={COLORS.PLAIN_WHITE}
            />
          }
          title="With Google account"
          buttonStyle={loginCardStyles.socialButtonSpacing}
        />
      </BlurView>
    </View>
  );
};
