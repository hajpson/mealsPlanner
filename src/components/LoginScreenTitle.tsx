import { StyleSheet, View } from "react-native";
import { CustomText } from "./CustomText";

const loginScreenStyles = StyleSheet.create({
  titleContainer: {
    marginBottom: 12,
  },
  loginTitle: {
    fontSize: 34,
  },
});

export const LoginScreenTitle = () => {
  return (
    <View style={loginScreenStyles.titleContainer}>
      <CustomText style={loginScreenStyles.loginTitle}>Sign In</CustomText>
    </View>
  );
};
