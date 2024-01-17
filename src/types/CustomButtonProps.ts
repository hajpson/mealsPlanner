import { ReactNode } from "react"
import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";

export type CustomButtonProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    onPressed: ((event: GestureResponderEvent) => void);
}