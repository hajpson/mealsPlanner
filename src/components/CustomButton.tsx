import { ViewStyle } from "react-native";
import { CustomButtonProps } from "../types/CustomButtonProps";
import { uniStyles } from "../utils/styles";
import { MotiPressable } from "moti/interactions";
import { useMemo } from "react";

export const CustomButton = ({
    children,
    style,
    onPressed,
    disabled
}: CustomButtonProps) => {
    return (
        <MotiPressable
            disabled={disabled}
            containerStyle={{ width: "100%" }}
            animate={useMemo(() => ({ hovered, pressed }) => {
                'worklet'

                return {
                    opacity: hovered || pressed ? 0.7 : 1,
                    scale: hovered || pressed ? 0.9 : 1
                }
            },
                []
            )}
            style={[uniStyles.customButton, style]}
            onPress={onPressed}>
            {children}
        </MotiPressable>
    )
}