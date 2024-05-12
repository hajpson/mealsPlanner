import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type CustomInputProps = {
  wrapperStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  placeholderText: string;
  placeholderColorText?: string;
  onChangeText: (text: string) => void;
  value: string;
  secured?: boolean;
};
