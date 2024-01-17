import { TextInput, View } from "react-native";
import { uniStyles } from "../utils/styles";
import { colors } from "../utils/constants";
import { useState } from "react";
import { CustomInputProps } from "../types/CustomInputProps";

export const CustomInput = ({
  wrapperStyle,
  inputStyle,
  placeholderText,
  placeholderColorText,
  onChangeText,
  value
}: CustomInputProps) => {
  return (
    <View style={[uniStyles.customInputWrapper, wrapperStyle]}>
      <TextInput
        style={[uniStyles.customInput, inputStyle]}
        placeholder={placeholderText}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderColorText ?? colors.light}
      />
    </View>
  );
};
