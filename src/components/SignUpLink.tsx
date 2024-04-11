import { CustomText } from "./CustomText"
import { loginScreenStyles } from "../utils/styles"
import { MotiPressable } from "moti/interactions"
import { useMemo } from "react"
import { SignUpLinkProps } from "../types/SignUpLinkProps"

export const SignUpLink = ({ onPressed }: SignUpLinkProps) => {
    return (
        <MotiPressable
            containerStyle={loginScreenStyles.signUpLinkContainer}
            animate={useMemo(() => ({ hovered, pressed }) => {
                'worklet'

                return {
                    opacity: hovered || pressed ? 0.5 : 1
                }
            },
                []
            )}
            onPress={onPressed}>
            <CustomText style={loginScreenStyles.signUpLinkText}>Click to Sign Up</CustomText>
        </MotiPressable>
    )
}