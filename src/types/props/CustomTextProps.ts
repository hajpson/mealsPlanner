import { ReactNode } from "react";
import { TextStyle } from "react-native";

export type CustomTextProps = {
  children: JSX.Element | ReactNode | string;
  style?: TextStyle | TextStyle[];
};
