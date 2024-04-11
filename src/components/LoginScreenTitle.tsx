import { View } from "react-native"
import { CustomText } from "./CustomText"
import { loginScreenStyles } from "../utils/styles"

export const LoginScreenTitle = () => {
    return (
        <View style={loginScreenStyles.titleContainer}>
            <CustomText style={loginScreenStyles.loginTitle}>Sign In</CustomText>
        </View>
    )
}