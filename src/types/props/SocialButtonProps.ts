import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export type SocialButtonProps = {
  icon: ReactNode;
  title: string;
  buttonStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
};
