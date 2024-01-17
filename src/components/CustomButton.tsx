import { Button, Pressable, Text } from "react-native"
import { CustomButtonProps } from "../types/CustomButtonProps"
import { uniStyles } from "../utils/styles"

export const CustomButton = ({
    children,
    style,
    onPressed
}: CustomButtonProps) => {
    return (
        <Pressable
            style={[uniStyles.customButton, style]}
            onPress={onPressed}>
            {children}
        </Pressable>
    )
}