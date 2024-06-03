import { StyleSheet, TextInput, View } from "react-native";

import { CustomInputProps } from "../types/props/CustomInputProps";
import { COLORS } from "../utils/constants";

const customInputStyles = StyleSheet.create({
  customInputWrapper: {
    width: "100%",
    padding: 10,
    backgroundColor: COLORS.PRIMARY,
  },
  customInput: {
    color: COLORS.PLAIN_WHITE,
    marginHorizontal: 12,
    paddingVertical: 6,
    fontFamily: "Lexend",
    fontSize: 18,
  },
});

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
    <View style={[customInputStyles.customInputWrapper, wrapperStyle]}>
      <TextInput
        secureTextEntry={secured}
        autoCorrect={false}
        style={[customInputStyles.customInput, inputStyle]}
        placeholder={placeholderText}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderColorText ?? COLORS.LIGHT}
      />
    </View>
  );
};
