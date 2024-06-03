import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type CustomButtonProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onPressed: () => Promise<void>;
  disabled: boolean;
};
