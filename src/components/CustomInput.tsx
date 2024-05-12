import { TextInput, View } from "react-native";

import { CustomInputProps } from "../types/props/CustomInputProps";
import { COLORS } from "../utils/constants";
import { uniStyles } from "../utils/styles";

export const CustomInput = ({
  wrapperStyle,
  inputStyle,
  placeholderText,
  placeholderColorText,
  onChangeText,
  value,
  secured = false,
}: CustomInputProps) => {
  return (
    <View style={[uniStyles.customInputWrapper, wrapperStyle]}>
      <TextInput
        secureTextEntry={secured}
        autoCorrect={false}
        style={[uniStyles.customInput, inputStyle]}
        placeholder={placeholderText}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderColorText ?? COLORS.LIGHT}
      />
    </View>
  );
};
