import { MotiPressable } from "moti/interactions";
import { useMemo } from "react";

import { CustomText } from "./CustomText";
import { SignUpLinkProps } from "../types/props/SignUpLinkProps";
import { loginScreenStyles } from "../utils/styles";

export const SignLink = ({ onPressed, signMode }: SignUpLinkProps) => {
  return (
    <MotiPressable
      containerStyle={loginScreenStyles.signUpLinkContainer}
      animate={useMemo(
        () =>
          ({ hovered, pressed }) => {
            "worklet";

            return {
              opacity: hovered || pressed ? 0.5 : 1,
            };
          },
        [],
      )}
      onPress={onPressed}
    >
      <CustomText style={loginScreenStyles.signUpLinkText}>
        {signMode === "signIn" ? "Click to Sign Up" : "Click to Sign In"}
      </CustomText>
    </MotiPressable>
  );
};
