import { BlurView } from "expo-blur";
import React, { useCallback, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { CustomInput } from "./CustomInput";
import { CustomText } from "./CustomText";
import { MotiView } from "moti";
import { COLORS } from "../utils/constants";
import { RegisterCardProps } from "../types/props/RegisterCardProps";
import { CustomButton } from "./CustomButton";
import { isEmailValid } from "../helpers/isEmailValid";

const registerCardStyles = StyleSheet.create({
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
});

export const RegisterCard = ({
  emailValue,
  passwordValue,
  repeatPasswordValue,
  setEmailValue,
  setPasswordValue,
  setRepeatPasswordValue,
  onConfirmed,
}: RegisterCardProps) => {
  const onRegisterConfirmed = useCallback(async () => {
    await onConfirmed?.();
  }, [onConfirmed]);

  return (
    <MotiView
      style={registerCardStyles.blurViewWrapper}
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BlurView intensity={90} style={registerCardStyles.blurViewContainer}>
        <CustomText style={registerCardStyles.subheaderText}>
          With the email address
        </CustomText>

        <CustomInput
          wrapperStyle={registerCardStyles.inputWrapper}
          inputStyle={registerCardStyles.input}
          placeholderText="Email address"
          onChangeText={setEmailValue}
          value={emailValue}
        />

        <CustomInput
          wrapperStyle={registerCardStyles.inputWrapper}
          inputStyle={registerCardStyles.input}
          placeholderText="Password"
          onChangeText={setPasswordValue}
          value={passwordValue}
        />

        <CustomInput
          wrapperStyle={registerCardStyles.inputWrapper}
          inputStyle={registerCardStyles.input}
          placeholderText="Repeat Password"
          onChangeText={setRepeatPasswordValue}
          value={repeatPasswordValue}
        />

        <CustomButton
          disabled={!isEmailValid(emailValue)}
          style={
            isEmailValid(emailValue)
              ? registerCardStyles.continueButton
              : registerCardStyles.disabledContinueButton
          }
          onPressed={onRegisterConfirmed}
        >
          <CustomText
            style={
              isEmailValid(emailValue)
                ? registerCardStyles.continueButtonText
                : registerCardStyles.disabledContinueButtonText
            }
          >
            Sign Up
          </CustomText>
        </CustomButton>
      </BlurView>
    </MotiView>
  );
};
