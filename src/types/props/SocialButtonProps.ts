import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export type SocialButtonProps = {
  icon: ReactNode;
  title: string;
  onPressed: () => void;
  buttonStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  disabled?: boolean;
};
