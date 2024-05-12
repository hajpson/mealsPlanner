import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type CustomSafeAreViewProps = {
  children: JSX.Element | ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};
