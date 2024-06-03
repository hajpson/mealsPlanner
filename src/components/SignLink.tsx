import { MotiPressable } from "moti/interactions";
import { useMemo } from "react";

import { CustomText } from "./CustomText";
import { SignUpLinkProps } from "../types/props/SignUpLinkProps";
import { StyleSheet } from "react-native";
import { COLORS } from "../utils/constants";

const signLinkStyles = StyleSheet.create({
  signUpLinkContainer: {
    marginTop: 12,
  },
  signUpLinkText: {
    color: COLORS.PLAIN_WHITE,
    fontSize: 20,
  },
});

export const SignLink = ({ onPressed, signMode }: SignUpLinkProps) => {
  return (
    <MotiPressable
      containerStyle={signLinkStyles.signUpLinkContainer}
      animate={useMemo(
        () =>
          ({ hovered, pressed }) => {
            "worklet";

            return {
              opacity: hovered || pressed ? 0.5 : 1,
            };
          },
        []
      )}
      onPress={onPressed}
    >
      <CustomText style={signLinkStyles.signUpLinkText}>
        {signMode === "signIn" ? "Click to Sign Up" : "Click to Sign In"}
      </CustomText>
    </MotiPressable>
  );
};
