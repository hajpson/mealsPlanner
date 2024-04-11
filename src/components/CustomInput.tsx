import { TextInput, View } from "react-native";
import { uniStyles } from "../utils/styles";
import { COLORS } from "../utils/constants";
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
        placeholderTextColor={placeholderColorText ?? COLORS.LIGHT}
      />
    </View>
  );
};
