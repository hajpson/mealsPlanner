import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { View } from "react-native";
import { loginScreenStyles } from "../utils/styles";
import { CustomInput } from "./CustomInput";
import { CustomText } from "./CustomText";
import { MotiView } from "moti";

export const RegisterCard = () => {
    const [emailAddressValue, setEmailAddressValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [repeatPasswordValue, setRepeatPasswordValue] = useState("");

    const onContinueButtonPressed = async () => {
        //const loginResult = await signUpNewUser();
    }

    return (
        <MotiView
            style={loginScreenStyles.blurViewWrapper}
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
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

                <CustomInput
                    wrapperStyle={loginScreenStyles.inputWrapper}
                    inputStyle={loginScreenStyles.input}
                    placeholderText="Repeat Password"
                    onChangeText={(value) => setRepeatPasswordValue(value)}
                    value={repeatPasswordValue} />

                {/* <CustomButton
                    disabled={isEmailValid(inputValue) ? false : true}
                    style={isEmailValid(inputValue) ? loginScreenStyles.continueButton : loginScreenStyles.disabledContinueButton}
                    onPressed={onContinueButtonPressed}>
                    <CustomText style={isEmailValid(inputValue) ? loginScreenStyles.continueButtonText : loginScreenStyles.disabledContinueButtonText}>Sign Up</CustomText>
                </CustomButton> */}
            </BlurView>
        </MotiView>
    )
}