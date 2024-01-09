import { TextInput, View } from "react-native";
import { styles } from "../utils/styles";
import { colors } from "../utils/constants";
import { useState } from "react";

export const CustomInput = () => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.customInputWrapper}>
      <TextInput
        style={[styles.customInput]}
        placeholder="Search"
        value={value}
        onChangeText={(textValue) => setValue(textValue)}
        placeholderTextColor={colors.dark}
      />
    </View>
  );
};
