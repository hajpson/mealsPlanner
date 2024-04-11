import { BlurView } from "expo-blur"
import React, { useState } from "react"
import { View } from "react-native"
import { isEmailValid } from "../helpers/isEmailValid"
import { COLORS } from "../utils/constants"
import { loginScreenStyles } from "../utils/styles"
import { CustomButton } from "./CustomButton"
import { CustomInput } from "./CustomInput"
import { CustomText } from "./CustomText"
import { FontAwesome } from '@expo/vector-icons';
import { SocialButton } from "./SocialButton"

export const LoginCard = () => {
    const [emailAddressValue, setEmailAddressValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const onContinueButtonPressed = async () => {
        //const loginResult = await signUpNewUser();
    }

    return (
        <View style={loginScreenStyles.blurViewWrapper}>
            <BlurView intensity={90} style={loginScreenStyles.blurViewContainer}>
                <CustomText style={loginScreenStyles.subheaderText}>With the email address</CustomText>

                <CustomInput
                    wrapperStyle={loginScreenStyles.inputWrapper}
                    inputStyle={loginScreenStyles.input}
                    placeholderText="Email address"
                    onChangeText={(value) => setEmailAddressValue(value)}
                    value={emailAddressValue} />

                <CustomInput
                    wrapperStyle={loginScreenStyles.inputWrapper}
                    inputStyle={loginScreenStyles.input}
                    placeholderText="Password"
                    onChangeText={(value) => setPasswordValue(value)}
                    value={passwordValue} />

                <CustomButton
                    disabled={isEmailValid(emailAddressValue) ? false : true}
                    style={isEmailValid(emailAddressValue) ? loginScreenStyles.continueButton : loginScreenStyles.disabledContinueButton}
                    onPressed={onContinueButtonPressed}>
                    <CustomText style={isEmailValid(emailAddressValue) ? loginScreenStyles.continueButtonText : loginScreenStyles.disabledContinueButtonText}>Continue</CustomText>
                </CustomButton>

                <View style={loginScreenStyles.dividerContainer}>
                    <View style={loginScreenStyles.insideDividerLine} />
                    <CustomText>or</CustomText>
                    <View style={loginScreenStyles.insideDividerLine} />
                </View>

                <SocialButton
                    icon={<FontAwesome style={loginScreenStyles.socialButtonLogo} name="facebook-square" size={24} color={COLORS.PLAIN_WHITE} />}
                    title="With Facebook account" />

                <SocialButton
                    icon={<FontAwesome style={loginScreenStyles.socialButtonLogo} name="apple" size={24} color={COLORS.PLAIN_WHITE} />}
                    title="With Apple account"
                    buttonStyle={loginScreenStyles.socialButtonSpacing} />

                <SocialButton
                    icon={<FontAwesome style={loginScreenStyles.socialButtonLogo} name="google" size={24} color={COLORS.PLAIN_WHITE} />}
                    title="With Google account"
                    buttonStyle={loginScreenStyles.socialButtonSpacing} />
            </BlurView>
        </View>
    )
}